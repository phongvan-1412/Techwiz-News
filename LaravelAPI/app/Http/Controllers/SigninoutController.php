<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
    public function Register(){
        
    }
}
