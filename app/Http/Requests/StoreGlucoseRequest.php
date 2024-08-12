<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreGlucoseRequest extends FormRequest
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
        return [
            'nik' => 'required|numeric|digits:16',
            'no_hp' => 'required|numeric|digits_between:12,13',
            'code' => 'required|numeric|digits:6',
            'glucose' => 'required|numeric|gt:0|digits_between:1,5',
            'dev_id' => 'required|uuid',
        ];
    }
}
