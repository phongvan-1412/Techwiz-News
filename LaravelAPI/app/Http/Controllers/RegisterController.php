<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\AdminController;

class RegisterController extends AdminController
{
    public function getRegisterform(){
        return view('admin.form.registerform');
    }
    public function postRegisterform(Request $request){
        $this->validate($request,[
            'firstname'=>'required',
            'lastname'=>'required',
            'email'=>'required|email',
            'password'=>'required|min:3|max:16',
            'phonenumber'=>'required|min:10|max:12'

        ],[
            'firstname.required'=>'Họ & Tên không được để trống',
            'lastname.required'=>'Họ & Tên không được để trống',
            'email.email'=>'Email không hợp lệ',
            'email.required' => 'Bạn chưa nhập email !!!',
            'password.required' => 'Bạn chưa nhập password !!!',
            'password.min' => 'Password không được nhỏ hơn 3 ký tự',
            'password.max' => 'Password không được lớn hơn 16 ký tự',
            'phonenumber.min'=>'Số điện thoại không hợp lệ',
            'phonenumber.max'=>'Số điện thoại không hợp lệ'
        ]);

        $data = [
            'fullname'=> $request->firstname.' '.$request->lastname,
            'email'=> $request->email,
            'password'=> md5($request->password),
            'phonenumber'=> $request->phonenumber,
            'idtype'=>2
        ];
        DB::table('user')->insert($data);
        return redirect('/login')->with('msg', 'Đăng ký thành công !');

        
    }
}
