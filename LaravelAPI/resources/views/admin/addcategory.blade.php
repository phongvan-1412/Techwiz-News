@extends('admin.layout.adminlayout')

@section('css')
    <link rel="stylesheet" href="{{ asset('css/admin/layout/form.css') }}">
@endsection

@section('topbar')
    @include('admin.layout.topbar')
@endsection

@section('slidebar')
    @include('admin.layout.menubar')
@endsection

@section('bodycontent')
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <div class="card mb-4">
                    {{ csrf_field() }}
                    <div class="card-header ">Add Category</div>
                    <div class="card-body">

                        <!-- Form Group-->
                        <div class="mb-3">
                            <label class="small mb-1" for="category-root">Category Root</label>
                            <select class="form-control" name="category_root" id="category_root">
                                @foreach ($categories as $category)
                                    <option value="{{ $category->category_name }}">
                                        {{ $category->category_name }}
                                    </option>
                                @endforeach
                            </select>
                        </div>

                        <!-- Form Group-->
                        <div class="mb-3">
                            <label class="small mb-1" for="category_name">Category Name</label>
                            <input class="form-control" id="category_name" name="category_name" type="text">
                        </div>

                        <!-- Form Group-->
                        <div class="row gx-3 mb-3">
                            <label class="col-md-2 small mb-1" for="status-category">Status Category</label>
                            <div class="col-md-4">
                                <div class=" pull-right">
                                    <input id="TriSeaDefault" name="TriSea1" type="checkbox">
                                    <label for="TriSeaDefault" class="label-default"></label>
                                </div>
                            </div>
                        </div>

                        <!-- Save changes button-->
                        <div class="row gx-3 mb-3">
                            <div class="col-5"></div>
                            <span id="addCategory" class="col-2 btn btn-primary">Add Category</span>
                            <div class="col-5"></div>
                        </div>
                    </div>
            </div>
        </div>
        <div class="col-md-2"></div>
    </div>
@endsection

@section('scripts')
    <script src="{{ asset('js/admin/addcategory.js') }}"></script>
@endsection
