<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController as Customer;
use App\Http\Controllers\EmployeeController as Employee;
use App\Http\Controllers\CategoryController as Category;
use App\Http\Controllers\BlogController as Blog;
use App\Http\Controllers\SigninoutController as Signinout;
use App\Http\Controllers\ProfileController as Profile;
use App\Http\Middleware\LoginMiddleware;



Route::get('/xmlblogfile',[Blog::class, 'XmlBlogFile']);
//Route::get('/returnallpost', [Blog::class, 'ReturnAllPost']);

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


Route::any('/ckfinder/connector', '\CKSource\CKFinderBridge\Controller\CKFinderController@requestAction')
    ->name('ckfinder_connector');

Route::any('/ckfinder/browser', '\CKSource\CKFinderBridge\Controller\CKFinderController@browserAction')
    ->name('ckfinder_browser');

Route::middleware([LoginMiddleware::class])->group(function(){
    Route::get('/adminhome',[Employee::class,'getAdminhome'])->name('adminhome');
    // NEWS
    Route::get('/allpost', [Blog::class, 'getAllPost']);
    Route::get('/addpost', [Blog::class, 'getAddPost']);
    Route::post('/addpost', [Blog::class, 'postAddPost']);
    Route::get('/trash', [Blog::class, 'getTrash']);
    Route::get('/drafts', [Blog::class, 'getDrafts']);
    // PROFILE
    Route::get('/adminprofile', [Profile::class, 'getProfile']);
    Route::post('/adminprofile/changeprofile', [Profile::class, 'postProfile']);
    Route::post('/adminprofile/changepwd', [Profile::class, 'changePassword']);

});



// LOGIN
Route::get('/login', [Signinout::class, 'getLoginForm']);
Route::post('/login', [Signinout::class, 'Login']);
// REGISTER
Route::get('register', [Signinout::class, 'getRegisterForm']);
Route::post('register', [Signinout::class, 'Register']);
Route::get('/logout', [Signinout::class, 'Logout']);

