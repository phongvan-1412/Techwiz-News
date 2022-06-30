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
    <textarea name=text id="text" cols="30" rows="10"></textarea>
    <script src="{{ asset('ck5/ckeditor.js') }}"></script>
@endsection

@section('scripts')

@endsection


