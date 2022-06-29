<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{
    public function getProfile(){
        return view('admin.profile');
    }

    public function postProfile(Request $request){
        $email      = $request->email;
        $avatar     = $request->file('avatar');
        $extension  = $request->file('avatar')->extension(); // Cắt đuôi file img
        $avatar_name= time().'-'.'avatar.'.$extension;       // Nối đuôi file img vào tên mới của img
        $avatar->move(public_path('upload'), $avatar_name);  // Lưu image vào public/upload
        // $request->merge(['image_name' => $avatar_name]);
        // dd($request->all());

        DB::table('user')->where('email', $email)
                        ->update(['image_name' => $avatar_name]);
        return redirect()->back()->withInput(); 
    }

    public function postNewPassword(Request $request){
        $hiddenemail = $request->hiddenemail;
        $currentpwd = md5($request->currentpwd);
        $newpwd = md5($request->newpwd);

        // DB::select( "call sp_change_password_by_email($hiddenemail,$newpwd,$currentpwd)");
        DB::table('user')->where('email', $hiddenemail)
                        ->where('password', $currentpwd)
                        ->update(['password' => $newpwd]);  
        return redirect()->back()->withInput()->with('thongbao','Changed Password Successfully!');

    }
}