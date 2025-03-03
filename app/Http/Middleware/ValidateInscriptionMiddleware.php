<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ValidateInscriptionMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $arrayEmailAuthorize = ['email1@example.com', 'email2@example.com'];
        if (in_array($request->email, $arrayEmailAuthorize)) {
            return $next($request);
        }

        return redirect()->back()->with('error', 'Vous n\'êtes pas autorisé a créer un compte');
    }
}
