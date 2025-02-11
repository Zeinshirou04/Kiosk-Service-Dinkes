<?php

namespace App\Http\Controllers\V2\Auth;

use Inertia\Inertia;
use App\Models\Patient\Patients;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class RegisterUserController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create()
{
	$kabkota = $this->getKota();
	$kecamatan = $this->getKecamatan();
	$kelurahan = $this->getKelurahan();
    
	return Inertia::render('V2/Form/Register', compact('kabkota', 'kecamatan', 'kelurahan'));
}

public function getKota()
{
	$response = Http::get('http://119.2.50.170/sendpusk/api/migrasi/sip/masterkotakabsatset/');
	return $response->json();
}

public function getKecamatan()
{
	$response = Http::get('http://119.2.50.170/sendpusk/api/migrasi/sip/masterkecamatansatset/');
	return $response->json();
}

public function getKelurahan()
{
	$response = Http::get('http://119.2.50.170/sendpusk/api/migrasi/sip/masterkelurahansatset/');
	return $response->json();
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
            if($errorCode == 1062) {
                return redirect()->to(route('register.create'))->withErrors([
                    'match' => 'NIK sudah terdaftar, silahkan gunakan NIK lain.'
                ]);
            }
        } catch (\Throwable $th) {
            // throw $th;
            return redirect()->to(route('register.create'))->withErrors([
                'match' => $th->getMessage()
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
