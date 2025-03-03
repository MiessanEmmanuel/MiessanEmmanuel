<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function show()
    {
        $contacts = Contact::all();

        return Inertia::render('Admin/Contacts', [
            'contacts' => $contacts,
        ]);
    }

    public function setLuContact(Request $request)
    {
        $contact = Contact::findOrFail($request->input('id'));
        $contact_lu = $request->input('lu');
        /* dd($contact_lu); */

        $contact->lu = $contact_lu;
        $contact->save();
        return to_route('admin.contacts.show');
    }
}
