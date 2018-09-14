<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\Invite;
use Illuminate\Support\Facades\Mail;

class EmailsController extends Controller
{
    public function invite(Request $request)
    {
        $request->validate([
            'email' => 'required|email'
        ]);

        Mail::to($request->email)->send(new Invite());

        return response('Sent Invite');
    }
}
