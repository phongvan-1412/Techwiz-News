<?php

namespace App\Http\Controllers;
employee_contact
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\NameSetting as Name;
use App\Models\Employee;

class EmployeeController extends Controller
{
    public function InsertEmployee(Request $request)
    {
        $employee_name = $request->employee_name;
        $emp_position_name = $request->emp_position_name;
        $manager_name = $request->manager_name;
        $employee_email = $request->employee_email;
        $employee_password = $request->employee_password;
        $employee_contact = $request->employee_contact;
        $employee_dob = $request->employee_dob;
        $employee_address = $request->employee_address;
        $gender_name = $request->gender_name;
       
        DB::select(Name::$InsertEmployee."'$employee_name','$emp_position_name','$manager_name','$employee_email','$employee_password',
                                            '$employee_contact','$employee_dob','$employee_address','$gender_name'");

        $check = DB::select(Name::$CheckExistsEmployee."'$employee_email'");
        if($check > 0) return "Create New Account Success !!!";
        return "Create New Account Fail !!!";
    }

    public function CheckExistsAccount($employee_email)
    {
        $check = DB::select(Name::$CheckExistsEmployee."'$employee_email'");
        if($check > 0) return "Account already exists !!!";
        return "Account aviable !!!";;
    }

    public function UpdateEmployee(Request $request)
    {
        $employee_email = $request->employee_email;
        $employee_name = $request->employee_name;
        $employee_contact = $request->employee_contact;
        $employee_dob = $request->employee_dob;
        $employee_img_name = $request->employee_img_name;
        $employee_address = $request->employee_address;
        $gender_name = $request->gender_name; 

        DB::select(Name::$Updateemployee."'$employee_email','$employee_name','$employee_contact',
                        '$employee_dob','$employee_img_name','$employee_address','$gender_name'");

        $check = DB::select(Name::$CheckExistsemployee."'$employee_email'");
        if($check > 0) return "Update Account Success !!!";
        return "Update New Account Fail !!!";
    }
    
    public function ChangePassword(Request $request)
    {
        $employee_email = $request->employee_email;
        $employee_new_passqord = $request->employee_new_passqord;
        $employee_old_passqord = $request->employee_old_passqord;

        DB::select(Name::$ChangePasswordemployee."'$employee_email','$employee_new_passqord','$employee_old_passqord'");

        $check = DB::select(Name::$CheckUpdatePasswordEmployee."'$employee_email','$employee_new_passqord'");
        if($check > 0) return "Change Password Account Success !!!";
        return "Change Password  New Account Fail !!!";
    }
    
    // public function CheckEmployeeInfo(Request $request)
    // {
    //     $employee_email = $request->employee_email;
    //     $employee_name = $request->employee_name;
    //     $employee_contact = $request->employee_contact;

    //     $employee_accounts = DB::select(Name::$CheckemployeeInfo."'$employee_email','$employee_name','$employee_contact'");
        
    //     return $employee_accounts;
    // }

    public function EmployeeLogin(Request $request)
    {
        $employee_email = $request->employee_email;
        $employee_password = $request->employee_word;

        self::GetEmployeeInfo($employee_email);
    }

    public function GetEmployeeInfo($employee_email)
    {
        $employee_info = DB::select(Name::$SelectEmployee."''$employee_email");
        return $employee_info;
    }

    public function SelectAllEmployee()
    {
        $employees = DB::(Name::$SelectAllEmployee);
        return $employees;
    }
    
    public function SelectManager()
    {
        $managers = DB::select(Name::$Selectmanager);
        return $manager;
    }
    
}