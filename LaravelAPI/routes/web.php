<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController as Customer;
use App\Http\Controllers\EmployeeController as Employee;
use App\Http\Controllers\CategoryController as Category;
use App\Http\Controllers\BlogController as Blog;
use App\Http\Controllers\SigninoutController as Signinout;


Route::get('/xmlblogfile',[Blog::class, 'XmlBlogFile']);


// // PROFILE
// Route::get('/profile',[ProfileController::class, 'getProfileForm']);
// Route::post('/profile',[ProfileController::class, 'postProfileForm']);
// Route::post('/changepwd',[ProfileController::class, 'postNewPassword']);

// // LOGIN
// Route::get('/login',[LoginController::class, 'getLoginform']);
// Route::post('/login',[LoginController::class, 'postLoginform']);
// REGISTER
// Route::get('/register',[RegisterController::class, 'getRegisterform']);
// Route::post('/register',[RegisterController::class, 'postRegisterform']);

// ----------------------------ADMIN--------------------------------------//
Route::get('/adminhome',[Employee::class,'getAdminhome'])->name('adminhome');
// NEWS
Route::get('/allpost', [Blog::class, 'getAllPost']);
Route::get('/addpost', [Blog::class, 'getAddPost']);
Route::post('/addpost', [Blog::class, 'postAddPost']);
Route::get('/trash', [Blog::class, 'getTrash']);
Route::get('/drafts', [Blog::class, 'getDrafts']);

// LOGIN
Route::get('/login', [Signinout::class, 'getLoginForm']);
Route::post('/login', [Signinout::class, 'Login']);
// REGISTER
Route::get('register', [Signinout::class, 'getRegisterForm']);
Route::post('register', [Signinout::class, 'Register']);
