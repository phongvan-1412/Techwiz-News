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
<div class="container">
    <h1 class="form-header text-center">ADD POST</h1>
    <div class="row">
        <div class="col-lg-12 col-sm-10">
            <form method="POST" action="/addpost" enctype="multipart/form-data">
                {{csrf_field()}}
                <div class="form-title mb-2">
                    <div class="small" >Title</div>
                    <input type="text" name="title" class="form-control">
                </div>

                <div class="row gx-3 mb-4">
                    <div class="col-md-6">
                        <div class="small">Category</div>
                        <select name="select_category" id="select_category" class="form-control">
                            @foreach ($select_category as $category)
                                <option value="{{$category->category_name}}" >
                                    {{ $category->category_name }}
                                </option>
                            @endforeach
                        </select>
                    </div>      
                    <div class="col-md-6">
                        <div class="small">Video URL</div>
                        <input type="text" name="video_url" id="video_url" class="form-control">
                    </div>
                </div>

                <div class="form-content mb-3">
                    <textarea class="form-control" name="content" id="editor1"></textarea>
                </div>

                <div class="form-thumbnail mb-2">
                    <div class="small">Thumbnail Image</div>
                    <input type="file" name="thumbnail" class="form-control">
                </div>

                <div class="form-submit mt-2">
                    <!-- <button class="btn btn-secondary mt-4" type="submit">Save Draft</button> -->
                    <button class="btn btn-success mb-4" type="submit">Publish</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script src="{{asset('ckeditor/ckeditor.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/ckfinder/ckfinder.js')}}"></script>
<script>
    CKEDITOR.replace( 'editor1', {
        filebrowserBrowseUrl:"{{route('ckfinder_browser')}}"
        // filebrowserUploadMethod:"form"
    });
</script>
@include('ckfinder::setup')
@endsection

