<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePatientRequest extends FormRequest
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
        // dd(FormRequest::capture());
        return
            [
                'nik' => 'required|numeric|digits:16',
                'nama_pasien' => 'required|string',
                'tgl_lahir' => 'required|date',
                'umur' => 'required|numeric|digits_between:1,3',
                'tempat_lahir' => 'required|string',
                'alamat' => 'required|string',
                'no_hp' => 'required|numeric|digits_between:12,13',
                'jenis_kelamin' => 'required|regex:/^.{1}$/'
            ];
    }
}
