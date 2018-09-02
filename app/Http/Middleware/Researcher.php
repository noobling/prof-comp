<?php

namespace App\Http\Middleware;

use Closure;

class Researcher
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        
        if ($request->user() && $request->user()->type === 'Researcher') {
            return $next($request);
        }
        return response('You are not authorized', 403);
    }
}
