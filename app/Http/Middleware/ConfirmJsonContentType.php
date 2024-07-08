<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ConfirmJsonContentType
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // return response()->json($request->header('User-Agent'));
        if ($request->isMethod('get')) return $next($request);
        if (!$request->isMethod('post')) return response()->json([
            'message' => 'Method is not accepted, please re-check your method!'
        ], 405);
        if (!$request->acceptsJson() || !$request->isJson()) return response()->json([
            'message' => 'Unsupported Media Type, please re-check your media type!'
        ], 415);
        $cols = [
            'id',
            'gula',
            'berat',
            'tinggi',
        ];
        if (!$request->has($cols)) return response()->json([
            'message' => 'Content mismatch, empty or not completed, please re-check your content!',
            'error' => $request->has($cols)
        ], 400);
        try {
            $credentials = $request->validate([
                'id' => 'required|uuid',
                'gula' => 'required|numeric|between:0,999.9',
                'berat' => 'required|numeric|between:0,999.9',
                'tinggi' => 'required|numeric|between:0,999.9',
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Content mismatch, empty or not completed, please re-check your content!',
                'error' => $th->getMessage()
            ], 400);
        }
        if ($credentials) return $next($request);
    }
}
