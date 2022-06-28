<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController as Customer;
use App\Http\Controllers\EmployeeController as Employee;
use App\Http\Controllers\CategoryController as Category;
use App\Http\Controllers\BlogController as Blog;

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
// Route::get('/admin',[AdminController::class,'LoginSuccess']);
// Route::get('/feedback',[AdminController::class,'FeedbackPage']);
// Route::get('/customer',[AdminController::class,'CustomerPage']);
// Route::get('/lastestorder',[AdminController::class,'LatestOrderPage']);

// // ADMIN PRODUCT
// Route::get('/addproduct',[Product::class,'AddProduct']);
// Route::post('/addproduct',[Product::class,'SubmitProduct']);
// Route::get('/allproduct',[Product::class,'AllProduct']);
// Route::Post('/allproduct',[Product::class,'RequestEditCategory']);
// Route::get('/editproduct',[Product::class,'EditProduct']);
// Route::post('/editproduct',[Product::class,'PostEditProduct']);

// Route::get('/importstock',[Product::class,'ImportStock']);
// Route::post('/importstock',[Product::class,'SubmitImportStock']);
// Route::get('/editstock',[Product::class,'showEditStock']);
// Route::post('/editstock',[Product::class,'postEditStock']);
// Route::get('/allstock',[Product::class,'AllStock']);


// Route::get('/importproduct',[Product::class, 'showImportProduct']);
// Route::post('/importproduct',[Product::class, 'postImportProduct']);
// Route::get('/editimportproduct',[Product::class, 'showEditimportproduct']);
// Route::post('/editimportproduct',[Product::class, 'Editimportproduct']);


// ADMIN CATEGORY
// Route::get('/addcategory',[Category::class, 'ShowAddCategory']);
// Route::post('/addcategory ',[Category::class, 'AddNewCategory']);

// Route::get('/allcategory',[Category::class,'ShowAllCategory']);
// Route::post('/allcategory',[Category::class,'RequestEditCategory']);
// Route::get('/editcategory',[Category::class,'EditCategory']);

// ADMIN PAYMENT
// Route::get('/payment',[Payment::class,'ShowAllPayment']);
// Route::post('/payment',[Payment::class,'AddPayment']);

// ADMIN OFFER
// Route::get('/offer',[Offer::class,'ShowAllOffer']);
// Route::post('/offer',[Offer::class,'AddOffer']);

// ADMIN PROFILE
// Route::get('/adminprofile',[AdminController::class,'showAdminProfile']);
// Route::post('/adminprofile',[AdminController::class,'postAdminProfile']);
