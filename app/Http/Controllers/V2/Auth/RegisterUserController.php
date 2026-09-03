<?php

namespace App\Http\Controllers\V2\Auth;

use Inertia\Inertia;
use App\Models\Patient\Patients;
// use App\Models\MasterKelurahan;
use App\Models\MasterProvinsi;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class RegisterUserController extends Controller
{
    private $cityEndpoint;
    public const CACHE_TIMEOUT = 600;

    public function __construct()
    {
        $this->cityEndpoint = env('CITY_ENDPOINT');
    }

    /**
     * Show the form for creating a new resource.
     */
    // public function create()
    // {
    //     $kabkota = $this->getCitiesFromApi('kabkota', '/migrasi/sip/masterkotakabsatset/');
    //     // dd($kabkota);
    //     $kecamatan = $this->getCitiesFromApi('kecamatan', '/migrasi/sip/masterkecamatansatset/');
    //     // dd($kecamatan);
    //     // $kelurahan_data = $this->getCitiesFromApi('kelurahan', '/migrasi/sip/masterkelurahansatset/');
    //     $kelurahan_data = MasterKelurahan::get()->toArray();
    //     $kelurahan = [
    //         "status"=>"success",
    //         "message"=>"Data berhasil diambil",
    //         "data"=> $kelurahan_data
    //     ];

    //     // $kelurahan = MasterKelurahan::all();

    //     // dd($kelurahan);
    //     $provinsi = $this->getCitiesFromApi('provinsi', '/migrasi/sip/masterprovinsisatset/');
    //     // dd($provinsi);

    //     return Inertia::render('V2/Form/Register', compact('kabkota', 'kecamatan', 'kelurahan', 'provinsi'));
    // }
    public function create()
    {
        $provinsi = MasterProvinsi::select(
                'kode_provinsi',
                'nama'
            )
            ->orderBy('nama')
            ->get();

            // dd($provinsi);


        return Inertia::render('V2/Form/Register', [
            'provinsi' => $provinsi
        ]);
    }

    public function getCitiesFromApi(String $cacheName, String $url)
    {
        return Cache::remember($cacheName, self::CACHE_TIMEOUT, function () use ($url) {
            try {
                $response = Http::timeout(120)->get($this->cityEndpoint . $url);
                return $response->successful() ? $response->json() : [];
            } catch (\Throwable $th) {
                return [];
            }
        });
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RegisterRequest $request)
    {
        // dd($request->all());
        try {
            Patients::updateOrCreate($request->all());
            if ($this->isAuthenticated($request)) return redirect()->to(route('v2.home.index', ['state' => 'weight']));
        } catch (QueryException $e) {
            $errorCode = $e->errorInfo[1];
            if ($errorCode == 1062) {
                return redirect()->to(route('register.create'))->withErrors([
                    'match' => 'NIK sudah terdaftar, silahkan gunakan NIK lain.'
                ]);
            }
        } catch (\Throwable $th) {
            // throw $th;
            return redirect()->to(route('register.create'))->withErrors([
                'excpetion' => $th->getMessage()
            ]);
        }
    }


    private function isAuthenticated($request)
    {
        $credentials = Patients::where('nik', $request->nik)->where('no_hp', $request->no_hp)->first();

        if ($credentials) {

            Auth::login($credentials);

            return true;
        };
        return false;
    }
}
