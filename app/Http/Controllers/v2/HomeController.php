<?php

namespace App\Http\Controllers\v2;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function index() {
        return Inertia::render('V2/Home');
    }
}
