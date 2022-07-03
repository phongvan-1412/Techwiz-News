<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Session;


class ProfileController extends Controller
{
    public function getProfile(){
        return view('admin.profile');
    }

    public function postProfile(Request $request){
        $email = $request->email;
        $fullname   = $request->fullname;
        $address    = $request->address;
        $phonenumber= $request->phonenumber;
        $dateofbirth= $request->dateofbirth;
        
        $avatar     = $request->file('avatar');
        $avatar_name = Session::get('emp_img_name');
        if ($request->hasFile('avatar')){
            $extension  = $request->file('avatar')->extension(); // Cắt đuôi file img
            $avatar_name= time().'-'.'avatar.'.$extension;       // Nối đuôi file img vào tên mới của img
            $avatar->move(public_path('upload'), $avatar_name);  // Lưu image vào public/upload
        }

        DB::insert("exec sp_update_employee_info '$email','$fullname','$phonenumber','$dateofbirth',
                                                '$avatar_name','$address'");
        return redirect()->back()->withInput(); 
    }

    public function changePassword(Request $request){
        $hiddenemail = $request->hiddenemail;
        $currentpwd = $request->currentpwd;
        $newpwd = md5($request->newpwd);

        // DB::select( "call sp_change_password_by_email($hiddenemail,$newpwd,$currentpwd)");
        DB::table('Employee_account')->where('emp_email', $hiddenemail)
                                    ->where('emp_pwd', $currentpwd)
                                    ->update(['emp_pwd' => $newpwd]);  
        return redirect()->back()->withInput()->with('thongbao','Changed Password Successfully!');

    }
}