<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\NameSetting as Name;
use App\Http\Controllers\EmployeeController as Employee;
use Session;


class SigninoutController extends Controller
{

    public function getLoginForm(){
        return view('loginform');    
    }

    public function Login(Request $request){
        $username = $request->username;
        $pwd = md5($request->pwd);
         
        $admin = DB::table('employee_account')->where('emp_email', $username)->where('emp_pwd', $pwd)->first();
        if($admin){
            Session::put('emp_id', $admin->emp_id);
            Session::put('emp_name', $admin->emp_name);
            Session::put('emp_email', $admin->emp_email);//
            Session::put('emp_pwd', $admin->emp_pwd);
            Session::put('emp_contact', $admin->emp_contact);//
            Session::put('emp_dob', $admin->emp_dob);//
            Session::put('emp_img_name', $admin->emp_img_name);//
            Session::put('emp_address', $admin->emp_address);  
            return redirect()->action([Employee::class, 'getAdminhome']);
        }else{
            Session::put('msg','Incorrect email or password !');
            return redirect()->back()->withInput();
        }
    }

    public function Logout(Request $request){
        $request->session()->flush();
        return redirect()->action([SigninoutController::class, 'getLoginForm']);
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


}