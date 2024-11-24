<?php

namespace App\Http\Controllers\V2\Auth;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\Patient\Patients;
use Illuminate\Support\Facades\Auth;

class LoginSessionController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('V2/Form/Login');
    }

    public function find(LoginRequest $request)
    {
        // dd($request->all());
        if ($this->isAuthenticated($request)) return redirect()->to(route('v2.home.index', ['state' => 'weight']));
        return redirect()->to(route('login.create'))->withErrors([
            'match' => 'Informasi yang anda masukkan tidak terdaftar'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy()
    {
        Auth::logout();

        return redirect()->to(route('v2.home.index'));
    }

    private function isAuthenticated($request)
    {

        $credentials = Patients::where('nik', $request->nik)->where('no_hp', $request->no_hp)->first();
        // dd($credentials);
        if ($credentials) {
            
            Auth::login($credentials);
            // dd(Auth::user());

            return true;
        };
        return false;
    }
}
