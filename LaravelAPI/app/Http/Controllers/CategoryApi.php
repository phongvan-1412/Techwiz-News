<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\NameSetting as Name;
use App\Models\Category;

class CategoryApi extends Controller
{
    public function InsertCategory(Request $request)
    {
        $category_name = $request->category_name;
        $category_root_name = $request->category_root_name;
        $status = $request->category_status;

        $category_status = 0;
        if($status == "on") $category_status = 1;

        DB::select(Name::$InsertCategory."'$category_name','$category_root_name',$category_status,");

        $check =  DB::select(Name::$ProcCheckExistsCategory."'$category_name'");

        if($check > 0) return "Insert ".$category_name." Success !!!";
        return "Insert ".$category_name." Fail !!!";
    }

    public function UpdateCategory(Request $request)
    {
        $category_name = $request->category_name;
        $category_root_name = $request->category_root_name;
        $status = $request->category_status;

        $category_status = 0;
        if($status == "on") $category_status = 1;

        DB::select(Name::$UpdateCategory."'$category_name','$category_root_name',$category_status,");

        $check =  DB::select(Name::$ProcCheckCategoryUpdate."'$category_name'");

        if($check > 0) return "Update ".$category_name." Success !!!";
        return "Update ".$category_name." Fail !!!";
    }

    public function SelectCategoryRoot()
    {
        $categories = DB::select(Name::$SelectCategoryRoot);
        return $categories;
    }
    
    public function SelectAllCategory()
    {
        $categories = DB::select(Name::$SelectAllCategory);
        return $categories;
    }

    public function SelectCategoryByRoot($category_root_id)
    {
        $categories = DB::select(Name::$SelectCategoryByRoot."'$category_root_id'");
        return $categories;;
    }
}
