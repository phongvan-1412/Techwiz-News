<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\SigninoutController as Signinout;
use Illuminate\Support\Collection;
use Session;


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
            $adminUrl = collect(["/adminhome","/allpost","/addpost","/addpost","/trash","/drafts","/adminprofile",
            "/adminprofile/changeprofile", "/adminprofile/changepwd"]);
            $check = false;
            foreach ($adminUrl as $isUrl){
                if($requesturl == $isUrl){
                    $check = true;
                }
            };
            return $check;
        
        }
        $admin = DB::table('employee_account')->where('emp_email', Session::get('emp_email'))
        ->where('emp_pwd', Session::get('emp_pwd'))->first();

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
