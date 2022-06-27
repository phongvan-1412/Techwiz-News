<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\NameSetting as Name;
use App\Models\Blog;
use App\Models\BlogRequest;


class BlogController extends Controller
{
    public function InsertBlog(Request $request)
    {
        $emp_email = $request->emp_email;
        $blog_title = $request->blog_title;
        $blog_content = $request->blog_content;
        $blog_day_open = $request->blog_day_open;

        DB::select(Name::$InsertBlog."'$emp_email','$blog_title','$blog_content','$blog_day_open'");

        self::InsertBlogRequest($blog_title,$emp_email);
    }

    public function InsertBlogRequest($blog_title,$emp_email)
    {
        DB::select(Name::$InsertblogComment."'$blog_title','$emp_email'");

        $check =  DB::select(Name::$ProcCheckExistsBlog."'$blog_title'");

        if($check > 0) return "Insert blog Success !!!";
        return "Insert blog Fail !!!";
    }
    
    public function ChangeBlogStatus(Request $request)
    {
        $status = $request->blog_status;
        $blog_id = $request->blog_id;
        $blog_status = 0;
        if($status == "on") $blog_status = 1;

        DB::select(Name::$ChangeStatusBlog."$blog_id,$blog_status");

        $check =  DB::select(Name::$ProcCheckBlogById."'$blog_title'");

        if($check > 0) return "Update blog Success !!!";
        return "Update blog Fail !!!";
    }
    
    public function SelectActiveBlog()
    {
        $blogs = DB::select(Name::$SelectActiveBlog);
        return $blogs;
    }

    public function SelectBlogById(Request $request)
    {
        $blog_id = $request->blog_id;
        
        $blogs = DB::select(Name::$SelectBlogById.$blog_id);
        return $blogs;
    }

    public function UpdateBlogRequest(Request $request)
    {+
        $blog_title = $request->blog_title;
        $admin_email = $request->admin_email;
        $blog_request_accept_status = $request->$blog_request_accept_status;
        $blog_request_cause -> $request->$blog_request_cause;

        DB::select(Name::$InsertblogComment."'$admin_email','$blog_title','$blog_content','$blog_day_open'");

        $check =  DB::select(Name::$ProcCheckExistsblogComment."'$blog_title'");

        if($check > 0) return "Update blog Success !!!";
        return "Update blog Fail !!!";
    }
    
    public function InsertBlogComment(Request $request)
    {
        $blog_title = $request->blog_title;
        $custommer_email = $request->customer_email;
        $blog_comment_content = $request->blog_comment_content;
        $blog_comment_day_post = $request->blog_comment_day_post;
        
        DB::select(Name::$InsertBlogComment."'$blog_title','$custommer_email','$blog_comment_content','$blog_comment_day_post'");

        $check = DB::select(Name::$ProcCheckExistsblogComment."'$blog_title','$custommer_email','$blog_comment_day_post'");

        if($check > 0) return "Update blog comment Success !!!";
        return "Update blog comment Fail !!!";
    }
    
    public function UpdateBlogComment(Request $request)
    {
       $blog_comment_id = $request->blog_comment_id;
       $blog_comment_status = $request->blog_comment_status;
       
       DB::slect(Name::$UpdateBlogComment."'$blog_comment_id','$blog_comment_status'");
       $check = DB::select(Name::$ProcCheckExistsblogCommentById."'$blog_comment_id'");

        if($check > 0) return "Update blog comment status Success !!!";
        return "Update blog comment status Fail !!!";
    }

    public function SelectBlogComment($blog_title)
    {
        $blog_comments = DB::slect(Name::$SelectBlogCommentByTitle."'$blog_title'");
        return $blog_comments;
    }
    
    public function XmlBlogFile()
    {
        $blogs = DB::select(Name::$SelectActiveBlog);

        $collection = self::AddCollection($blogs);

        $xml = new ExportXml("<?xml version='1.0' encoding='utf-8'?><Blogs>");
        $xml->StartXml();
        
        foreach($collection as $collect)
        {
            $tmp_collect = new Blog();
            $tmp_collect = $collect;
            $xml->StartChildNode("Blog");
            $xml->AddNode("blog_id",$collect->blog_id);
            $xml->AddNode("emp_name",$collect->emp_name);
            $xml->AddNode("blog_title",$collect->blog_title);
            $xml->AddNode("blog_content",$collect->blog_content);
            $xml->AddNode("blog_day_open",$collect->blog_day_open);
            $xml->AddNode("blog_status",$collect->blog_status);

            $xml->EndChildNode("Blog");
        }

        $xml->ExportXml("xml/blog.xml");
        return $collection;
    }

    public function AddCollection($arr)
    {
        $collection = collect();

        foreach($arr as $category)
        {
            $newCategory = new Blog();
            $newCategory = $category;
            $collection->add($newCategory);
        }

        return $collection;
    }
}
