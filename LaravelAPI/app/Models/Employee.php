<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    public $emp_id;
    public $emp_position_id;
    public $manager_id;
    public $emp_dept_no;
    public $emp_hire_date;
    public $customer_contact;
    public $emp_sal;
    public $emp_comm;
    public $emp_name;
    public $emp_email;
    public $emp_pwd;
    public $emp_contact;
    public $emp_dob;
    public $emp_address;
    public $emp_status;
    public $emp_blog_count;
    public $gender_type_id;
}
