<?php

namespace App\Http\Controllers\V2\Auth;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Patient\Patients;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;

class RegisterUserController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('V2/Form/Register');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd(Patients::where('nik', $request->nik)->first());
        try {
            if (!Patients::where('nik', $request->nik)->first()) {
                Patients::create($request->all());
                return redirect()->route('login.attempt');
            }
            if ($this->isAuthenticated($request)) return redirect()->to(route('v2.home.index', ['state' => 'weight']));
        } catch (\Throwable $th) {
            throw $th;
            // return redirect()->back();
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
