<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    public $blog_id;
    public $emp_id;
    public $blog_title;
    public $blog_content;
    public $blog_img_name;
    public $category_id;
    public $blog_day_open;
    public $blog_status;
}
