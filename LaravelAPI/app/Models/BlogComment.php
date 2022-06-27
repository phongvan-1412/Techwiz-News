<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogComment extends Model
{
    use HasFactory;
    public $blog_comment_id;
    public $blog_id;
    public $customer_id;
    public $blog_comment_content;
    public $blog_comment_day_post;
    public $blog_comment_status;
}
