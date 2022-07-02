<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\NameSetting as Name;
use App\Models\Customer;

class CustomerApi extends Controller
{
    public function InsertCustomer(Request $request)
    {
        $customer_name = $request->customer_name;
        $customer_email = $request->customer_email;
        $customer_password = $request->customer_password;
        $customer_contact = $request->customer_contact;
        $gender_name = $request->gender_name;

        DB::select(Name::$Insertcustomer."'$customer_name','$customer_email','$customer_password','$customer_contact','$gender_name'");

        $check = DB::select(Name::$CheckExistsCustomer."'$customer_email'");
        if($check > 0) return "Create New Account Success !!!";
        return "Create New Account Fail !!!";
    }

    public function CheckExistsAccount($customer_email)
    {
        $check = DB::select(Name::$CheckExistsCustomer."'$customer_email'");
        return $check;
    }

    public function UpdateCustomer(Request $request)
    {
        $customer_email = $request->customer_email;
        $customer_name = $request->customer_name;
        $customer_contact = $request->customer_contact;
        $customer_dob = $request->customer_dob;
        $customer_img_name = $request->customer_img_name;
        $customer_address = $request->customer_address;
        $gender_name = $request->gender_name; 

        DB::select(Name::$UpdateCustomer."'$customer_email','$customer_name','$customer_contact',
                        '$customer_dob','$customer_img_name','$customer_address','$gender_name'");

        $check = DB::select(Name::$CheckExistsCustomer."'$customer_email'");
        if($check > 0) return "Update Account Success !!!";
        return "Update New Account Fail !!!";
    }
    
    public function ChangePassword(Request $request)
    {
        $customer_email = $request->customer_email;
        $customer_new_passqord = $request->customer_new_passqord;
        $customer_old_passqord = $request->customer_old_passqord;

        DB::select(Name::$ChangePasswordCustomer."'$customer_email','$customer_new_passqord','$customer_old_passqord'");

        $check = DB::select(Name::$CheckUpdatePasswordCustomer."'$customer_email','$customer_new_passqord'");
        if($check > 0) return "Change Password  Account Success !!!";
        return "Change Password  New Account Fail !!!";
    }
    
    public function CheckCustomerInfo(Request $request)
    {
        $customer_email = $request->customer_email;
        $customer_name = $request->customer_name;
        $customer_contact = $request->customer_contact;

        $customer_accounts = DB::select(Name::$CheckCustomerInfo."'$customer_email','$customer_name','$customer_contact'");
        
        return $customer_accounts;
    }

    public function CustomerLogin(Request $request)
    {
        $customer_email = $request->customer_email;
        $customer_password = $request->customer_word;

        self::GetCustomerInfo($customer_email);
    }

    public function GetCustomerInfo($customer_email)
    {
        $customer_info = DB::select(Name::$GetCustomerInfo."''$customer_email");
        return $customer_info;
    }
}
