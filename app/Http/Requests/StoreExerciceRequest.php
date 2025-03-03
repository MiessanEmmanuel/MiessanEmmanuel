<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreExerciceRequest extends FormRequest
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
            'title' => 'required',
            'description' => 'required',
            'file' => 'required',
            'deadline' => 'required',
            'etat' => ['required', 'regex:/^(en cours|terminé|archivé)$/']



        ];
    }
    public function messages(): array
    {
        return [
             'description.required' => 'Le champ description est obligatoire',
            'title.required' => 'Le champ titre est obligatoire',
            'file.required' => 'Le champ file est obligatoire',
            'etat.required' => 'Le champ etat est obligatoire',
            'etat.regex' => 'Le champ etat n\'a pas la bonne valeur'


        ];
    }
}
