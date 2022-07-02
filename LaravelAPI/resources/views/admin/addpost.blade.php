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
            <form method="POST" action="/addpost">
                {{csrf_field()}}

                <div class="form-title mb-3">
                    <div class="small mb-1" >Title</div>
                    <input type="text" name="title" class="form-control">
                </div>

                <div class="form-category mb-4">
                    <label class="small mb-1" for="select_category">Category</label>
                    <select name="select_category" id="select_category" class="form-control">
                        @foreach ($select_category as $category)
                            <option value="{{$category->category_name}}" >
                                {{ $category->category_name }}
                            </option>
                        @endforeach
                    </select>
                </div>
                <div class="form-content mt-3">
                    <textarea class="form-control" name="description" id="editor1"></textarea>
                </div>
                <div class="form-submit">
                    <button class="btn btn-secondary mt-4" type="submit">Save Draft</button>
                    <button class="btn btn-success mt-4" type="submit">Publish</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<!-- <script src="https://cdn.ckeditor.com/ckeditor5/34.2.0/classic/ckeditor.js"></script> -->
<script src="https://cdn.ckeditor.com/4.19.0/standard/ckeditor.js"></script>

<script>
    CKEDITOR.replace( 'editor1' );
</script>
@endsection