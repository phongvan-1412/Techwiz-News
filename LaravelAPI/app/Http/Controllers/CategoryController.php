<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\NameSetting as Name;
use App\Models\Category;
use Session;

class CategoryController extends Controller
{
    public function getCategoryform(){
        $categories_root = DB::select(Name::$SelectCategoryRoot);
        $categories_name = DB::select(Name::$SelectAllCategory);
        return view('admin.addcategory',['categories_root' => $categories_root, 'categories_name'=>$categories_name]);
    }
    public function postCategoryform(Request $request){
        $category_root = $request->category_root;
        $category_name = $request->category_name;
        $status = $request->category_status;
        $st=0;
        if($status == "on") $st=1;
        $categories = DB::table('category')->where('category_name', $category_root)->get();
        $category_root_id = new category();
        foreach($categories as $cate)
        {
            $category_root_id = $cate;
        }
        $data = [
            'category_name' => $category_name,
            'category_root' => $category_root_id->category_id,
            'category_status' => $st
        ];  
        $check = DB::select(Name::$ProcCheckExistsCategory."'$category_name'");
        if(count($check) > 0){
            return redirect()->back()->with('fail-msg', 'Category already exists');
            
        }else{
            DB::table('category')->insert($data);
            return redirect()->back()->with('succ-msg', 'Insert category successfully');
        }
    }   
    
    public function allCategory(){
        $category = DB::table('category')->get();
        return view('admin.allcategory', [ 'category'=> $category ]);
    }
    
}
