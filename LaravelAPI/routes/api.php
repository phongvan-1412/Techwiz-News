<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogApi;
use App\Http\Controllers\CategoryApi;
use App\Http\Controllers\CustomerApi;
use App\Http\Controllers\GenderApi;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/returnallpost',[BlogApi::class, 'ReturnAllPost']);

Route::get('/gender',[GenderApi::class, 'SelectAllGender']);

Route::post('/insertblog',[BlogApi::class, 'InsertBlog']);
Route::post('/changeblogstatus',[BlogApi::class, 'ChangeBlogStatus']);
Route::post('/updateblog',[BlogApi::class, 'UpdateBlogRequest']);
Route::post('/insertblogcomment',[BlogApi::class, 'InsertBlogComment']);
Route::post('/updateblogcomment',[BlogApi::class, 'UpdateBlogComment']);
Route::get('/selectblogbyid/{blog_id}',[BlogApi::class, 'SelectBlogById']);
Route::get('/selectblogcommentbyid/{blog_id}',[BlogApi::class, 'SelectBlogComment']);

Route::post('/customerlogin',[CustomerApi::class, 'CustomerLogin']);
Route::post('/checkcustomerinfo',[CustomerApi::class, 'CheckCustomerInfo']);
Route::post('/changecustomerpassword',[CustomerApi::class, 'ChangePassword']);
Route::post('/updatecustomer',[CustomerApi::class, 'UpdateCustomer']);
Route::post('/insertcustomer',[CustomerApi::class, 'InsertCustomer']);
Route::get('/checkcustomeremail/{customer_email}',[CustomerApi::class, 'CheckExistsAccount']);
Route::get('/getcustomerinfo',[CustomerApi::class, 'GetCustomerInfo']);

Route::get('/selectcategorybyroot/{category_root_id?}',[CategoryApi::class, 'SelectCategoryByRoot']);
Route::get('/selectcategoryroot',[CategoryApi::class, 'SelectCategoryRoot']);


