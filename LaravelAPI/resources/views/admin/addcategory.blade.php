@extends('admin.layout.adminlayout')

@section('css')
    <link rel="stylesheet" href="{{asset('css/admin/layout/form.css')}}">
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
                <form action="/admin/addcategory" method="POST" class="form-horizontal">
                    {{ csrf_field() }}
                    <div class="card-header">Add Category</div>
                    <div class="card-body">
                        @if(session('fail-msg'))
                            <div class="alert alert-danger">
                                {{session('fail-msg')}}
                            </div>
                        @endif
                        @if(session('succ-msg'))
                            <div class="alert alert-success">
                                {{session('succ-msg')}}
                            </div>
                        @endif
                        <!-- Form Group-->
                        <div class="mb-3">
                            <label class="small mb-1" for="category_root">Category Root</label>
                            <select class="form-control" name="category_root" id="category_root">
                                @foreach ($categories_root as $category_root)
                                    <option value="{{ $category_root->category_name }}">
                                        {{ $category_root->category_name }}
                                    </option>
                                @endforeach
                            </select>
                        </div>
                        <!-- Form Group-->
                        <div class="form-group">
                            <label class="small mb-1" for="category_name">Category Name</label>
                            <input class="form-control" id="category_name" name="category_name" type="text">
                        </div>
                        <!-- Form Group-->
                        <div class="form-group">
                            <label class="small mb-1" for="category_status">Category Status</label>
                            <div class="TriSea-technologies-Switch pull-right">
                                <input id="TriSeaDefault" name="category_status" type="checkbox" checked>
                                <label for="TriSeaDefault" class="label-default"></label>
                            </div>
                        </div>
                        <!-- Save changes button-->
                        <div id="submit_button">
                            <input type="submit" class="btn btn-primary" value="Save">
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-md-2"></div>
    </div>

    @section('scripts')
        <script src="{{ asset('js/admin/addcategory.js') }}"></script>
    @endsection
@endsection




