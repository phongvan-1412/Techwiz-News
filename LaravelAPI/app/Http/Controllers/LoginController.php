<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\DB;


class LoginController extends AdminController
{

    public function getLoginform(){
        return view('admin.form.loginform');
    }

    public function postLoginform(Request $request){

        $this->validate($request,[
            'email'=>'required',
            'password'=>'required|min:3|max:16'
        ],[
            'email.required' => 'Bạn chưa nhập email !!!',
            'password.required' => 'Bạn chưa nhập password !!!',
            'password.min' => 'Password không được nhỏ hơn 3 ký tự',
            'password.max' => 'Password không được lớn hơn 16 ký tự'
        ]);

        $email = $request->email;
        $password = md5($request->password);
        
        $SQLuser = DB::table('user')->where('password',$password)
                                    ->where('email',$email)
                                    ->where('idtype',2)
                                    ->get();
        $SQLadmin = DB::table('user')->where('password',$password)
                                    ->where('email',$email)
                                    ->where('idtype',1)
                                    ->get();                    

        if(count($SQLuser)>0){ 
            return redirect()->route('landingpage',['SQLuser'=>$SQLuser]);
        }elseif(count($SQLadmin)>0){
            return redirect()->route('adminhome',['SQLadmin'=>$SQLadmin]);
        }else{  
            return redirect()->back()->withInput()->with('thongbao','Sai email hoặc mật khẩu !');  
        }
    }
}