<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SigninoutController extends Controller
{

    public function getLoginForm(){
        return view('loginform');    
    }

    public function Login(){
        
    }

    public function getRegisterForm(){
        return view('registerform');
    }

    public function Register(Request $request){
        $this->validate($request,[
            'firstname'=>'required',
            'lastname'=>'required',
            'email'=>'required|email',
            'password'=>'required|min:3|max:16',
            'phonenumber'=>'required|min:10|max:12'

        ],[
            'firstname.required'=>'First name is required',
            'lastname.required'=>'Họ & Tên không được để trống',
            'email.email'=>'Invalid email',
            'email.required' => 'Email is required',
            'password.required' => 'Password is required',
            'password.min' => 'Password is too short',
            'password.max' => 'Password is too long',
            'phonenumber.min'=>'Invalid Phonenumber',
            'phonenumber.max'=>'Invalid Phonenumber'
        ]);
        $data = [
            'fullname'=> $request->firstname.' '.$request->lastname,
            'email'=> $request->email,
            'password'=> md5($request->password),
            'phonenumber'=> $request->phonenumber,
            'idtype'=>2
        ];
        DB::table('user')->insert($data);
        return redirect('/login')->with('msg', 'Successfully Registered');

    }
}
