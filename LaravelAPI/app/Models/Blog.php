<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    public $blog_id;
    public $category_name;
    public $emp_name;
    public $blog_title;
    public $blog_content;
    public $blog_thumbnail_name;
    public $blog_video_name;
    public $blog_day_open;
}
