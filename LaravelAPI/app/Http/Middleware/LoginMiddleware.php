<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class LoginMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        function checkrequest($requesturl){
            $adminUrl = new Collection();
            $adminUrl = collect(["/adminhome","/allpost","/addpost","/addpost","/trash",
        "/drafts","/profile"]);
            $check = false;
            foreach ($adminUrl as $isUrl){
                if($requesturl == $isUrl){
                    $check = true;
                }
            };
            return $check;
        
        }
        $admin = DB::table('customer_account')->where('customer_name', Session::get('customer_name'))
        ->where('password', Session::get('password'))->first();

        if($admin){
            $currentUrl = $request->getPathInfo();
            if(checkrequest($currentUrl)==true){
                return $next($request);
            }else{
                return redirect()->action([Signinout::class, 'Login']);
            }
        }else{
            Session::put('msg','Incorrect usernamr & password');
            return redirect()->action([Signinout::class, 'Login']);
        }
    }
}
