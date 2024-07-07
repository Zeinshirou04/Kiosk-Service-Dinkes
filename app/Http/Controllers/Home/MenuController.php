<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class MenuController extends Controller
{
    public function index()
    {

        $endpoint = 'https://newsdata.io/api/1/latest';

        $response = Http::get($endpoint, [
            'apiKey' => 'pub_4786655fa8d619a9dadf8d21dced948677e52',
            'country' => 'id',
            'q' => 'kesehatan'
        ]);
        $result = $response->collect('results')->toArray();
        // dd($result);

        $data = [
            'news' => $result
        ];

        return Inertia::render('WelcomePage', $data);
    }

    public function umum() {
        return Inertia::render('Pasien/MenuUmum');
    }
}
