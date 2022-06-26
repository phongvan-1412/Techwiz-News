<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\NameSetting as Name;
use App\Models\Blog;

class BlogController extends Controller
{
    public function InsertBlog(Request $request)
    {
        $emp_email = $request->emp_email;
        $blog_title = $request->blog_title;
        $blog_content = $request->blog_content;
        $blog_day_open = $request->blog_day_open;

        //DB::select("exec sp_insert_blog '$emp_email','$blog_title','$blog_content','$blog_day_open'");
        DB::select(Name::$InsertBlog."'$emp_email','$blog_title','$blog_content','$blog_day_open'");

        self::InsertBlogRequest();
    }

    public function InsertBlogRequest($blog_title,$emp_email)
    {
        //DB::select("exec sp_insert_blog_request '$blog_title','$emp_email'");
        DB::select(Name::$InsertblogComment."'$blog_title','$emp_email'");

        $check =  DB::select(Name::$ProcCheckExistsBlog."'$blog_title'");

        if($check > 0) return "Insert blog Success !!!";
        return "Insert blog Fail !!!";
    }
    
    public function SelectActiveBlog()
    {
        $blogs = DB::select("exec sp_select_active_blog");
        return $blogs;
    }
}
