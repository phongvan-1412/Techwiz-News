<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NameSetting extends Model
{
    use HasFactory;

    //DATA BASE
    // blog
    static $FunctionCheckExistsblog = "dbo.check_exists_blog";

    static $InsertBlog = "exec sp_insert_blog";
    static $ProcCheckExistsBlog = "exec sp_check_exists_blog";
    static $ProcCheckBlogById = "exec sp_check_blog_by_id";
    static $ChangeStatusBlog = "exec sp_change_status_blog";
    static $SelectActiveBlog = "exec sp_select_active_blog";
    static $SelectBlogById = "exec sp_select_blog_by_id";
    // blog_comment
    static $InsertBlogComment = "exec sp_insert_blog_comment";
    static $UpdateBlogComment = "exec sp_update_blog_comment";
    static $ProcCheckExistsblogComment = "exec sp_check_exists_blog_comment";
    static $ProcCheckExistsblogCommentById = "exec sp_check_blog_comment_by_id";
    static $SelectBlogCommentByTitle = "exec sp_select_blog_comment_by_blog_title";
    static $SelectAllBlog = "exec sp_select_all_blog";
    // blog_request
    static $FunctionCheckExistsBlogRequest = "dbo.check_exists_blog_request";

    static $InsertBlogRequest = "exec sp_insert_blog_request";
    static $ProcCheckExistsBlogRequest = "exec sp_check_exists_blog_request";
    static $UpdateBlogRequest = "exec sp_update_blog_request";
    // category
    static $FunctionCheckExistsCategory = "dbo.check_exists_category";

    static $InsertCategory = "exec sp_insert_category";
    static $UpdateCategory = "exec sp_update_category";
    static $ProcCheckExistsCategory = "exec sp_check_exists_category";
    static $ProcCheckCategoryUpdate = "exec sp_check_category_update";
    static $SelectCategoryRoot = "exec sp_select_category_root";
    static $SelectCategoryByRoot = "exec sp_select_category_by_root_name";
    static $SelectAllCategory = "exec sp_select_all_category";
    // customer_account
    static $FunctionCheckExistscustomer = "dbo.check_exists_customer";

    static $InsertCustomer = "exec sp_insert_customer_account";
    static $UpdateCustomer = "exec sp_update_customer_account_by_email";
    static $CheckExistsCustomer = "exec sp_check_exists_customer_by_email";
    static $ChangePasswordCustomer= "exec sp_change_password_by_email";
    static $CheckUpdatePasswordCustomer= "exec sp_check_update_customer_password";
    static $GetCustomerInfo = "exec sp_get_customer_info";
    static $CheckCustomerInfo = "exec sp_get_customer_info_by_email_name_contact";
    static $SelecCustomer = "exec sp_select_customer_account";
    // gender_type
    static $SelectAllGenderType = "exec sp_select_all_gender_type";
    // employee_account
    static $FunctionCheckExistsEmployee = "dbo.check_exists_employee";

    static $InsertEmployee = "exec sp_insert_emp_account";
    static $CheckExistsEmployee = "exec sp_check_insert_employee_account";
    static $ChangePasswordEmployee = "exec sp_change_emp_pwd_by_email";
    static $CheckUpdatePasswordEmployee = "exec sp_check_update_employee_password";
    static $SelectEmployee = "exec sp_select_employee";
    static $SelectAllEmployee = "exec sp_select_all_employee";

    static $Selectmanager = "exec sp_select_manager";
    static $SelectEmployeeByManager = "exec sp_select_employee_account_by_manager_name";
    // emp_position
    static $InsertEmpPosition = "exec sp_insert_emp_position";
    static $UpdateEmpPosition = "exec sp_update_emp_position";
    static $CheckExistsEmpPosition = "exec sp_check_exists_emp_position";
    static $SelectAllEmpPosition = "exec sp_select_all_emp_position";
}