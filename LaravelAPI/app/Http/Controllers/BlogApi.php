<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\NameSetting as Name;
use App\Models\Blog;
use App\Models\BlogRequest;


class BlogApi extends Controller
{
    public function InsertBlog(Request $request)
    {
        $blog = new Blog();
        $blog = $request;
        
        DB::table('blog')->insert($blog->toArray());
        $check = DB::table('blog')->where('blog_title', $blog->blog_title)->get();
        
        if(count($check) > 0) return "Insert blog Successfully";
        return "Insert blog Fail";
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

    public function SelectBlogById($blog_id)
    {
        //$blogs = DB::table('blog')->where('blog_id', $blog_id)->get();
        
        $blogs = DB::select(Name::$SelectBlogById."'$blog_id'");
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

    public function SelectBlogComment($blog_id)
    {
        $blog_comments = DB::slect(Name::$SelectBlogCommentById."'$blog_id'");
        return $blog_comments;
    }
    
    public function XmlBlogFile()
    {
        $blogs = DB::select(Name::$SelectAllBlog);

        $collection = self::AddCollection($blogs);

        $xml = new ExportXml("<?xml version='1.0' encoding='utf-8'?><Blogs>");
    $xml->StartXml();

    foreach($collection as $collect)
    {
    $tmp_collect = new Blog();
    $tmp_collect = $collect;
    $xml->StartChildNode("Blog");
    $xml->AddNode("blog_id",$collect->blog_id);
    $xml->AddNode("emp_id",$collect->admin_id);
    $xml->AddNode("category_id",$collect->category_id);
    $xml->AddNode("blog_title",$collect->blog_title);
    $xml->AddNode("blog_content",$collect->blog_content);
    $xml->AddNode("blog_img_name",$collect->blog_img_name);
    $xml->AddNode("blog_video_name",$collect->blog_video_name);
    $xml->AddNode("blog_content",$collect->blog_content);
    $xml->AddNode("blog_status",$collect->blog_status);

    $xml->EndChildNode("Blog");
    }

    $xml->ExportXml("xml/blog.xml");
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

    public function SelectActiveBlog()
    {
    $tmp_blogs = DB::select("exec sp_select_active_blogs");
    $blogs = self::AddCollection($tmp_blogs);
    //file_put_contents("xml/blog.json",$blogs->toJson());
    return $blogs;
    }

    public function SelectBlogByCategory($category_id)
    {
        $tmp_blogs = DB::select("exec sp_select_blog_by_category '$category_id'");
        $blogs = self::AddCollection($tmp_blogs);
        return $blogs;
    }
    

    }