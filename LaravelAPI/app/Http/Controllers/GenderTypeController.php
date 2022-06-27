<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\NameSetting as Name;

class GenderTypeController extends Controller
{
    public function SelectAllGender()
    {
        $genders = DB::select(Name::$SelectAllGenderType);
        return $gender;
    }
    
}
