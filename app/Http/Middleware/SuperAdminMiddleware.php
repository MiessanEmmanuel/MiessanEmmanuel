<?php

namespace App\Http\Middleware;

use App\Models\User;
use Illuminate\Http\Request;
use Closure;
use Illuminate\Support\Facades\Auth;

class SuperAdminMiddleware
{

    /**
     * user admin
     **/

    public function handle(Request $request, Closure $next,  $role)
    {
        if (Auth::check()) {
            $user = User::find(Auth::id());
            foreach ($user->roles as $role_user) {
                if ($role_user->name == $role) {
                    return $next($request);
                }
            }
        }

        return redirect('/')->with('error', 'Vous n\'avez pas accès à cette ressource');
    }
}
