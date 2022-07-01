<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\NameSetting as Name;

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
            'lastname.required'=>'Last name is required',
            'email.email'=>'Invalid email',
            'email.required' => 'Email is required',
            'password.required' => 'Password is required',
            'password.min' => 'Password is too short',
            'password.max' => 'Password is too long',
            'phonenumber.min'=>'Invalid Phonenumber',
            'phonenumber.max'=>'Invalid Phonenumber'
        ]);
        $data = [
            'customer_name'=> $request->firstname.' '.$request->lastname,
            'customer_email'=> $request->email,
            'customer_pwd'=> md5($request->password),
            'customer_contact'=> $request->phonenumber,
        ];
        $check = DB::select(Name::$CheckExistsCustomer."'$request->email'");

        if($check == 0){ 
            DB::table('customer_account')->insert($data);

            return redirect('/login')->with('msg', 'Successfully Registered');

        }else{
            return redirect()->back()->withInput()->with('msg'); 

        }

    }

    public function LogOut(){
        // code here
    }
}