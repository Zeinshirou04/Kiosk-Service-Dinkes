<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nik' => ['required', 'numeric', 'digits:16'],
            'nama_pasien' => ['required', 'string'],
            'jenis_kelamin' => ['required', 'string', 'size:1'],
            'tgl_lahir' => ['required', 'date'],
            'kecamatan' => ['required', 'numeric'],
            'kelurahan' => ['required', 'numeric'],
            'kabkota' => ['required', 'numeric'],
            'alamat' => ['required', 'string'],
            'no_hp' => ['required', 'numeric', 'digits_between:11,13'],
        ];
    }
}
