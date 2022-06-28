@extends('user.layout.layout')

@section('header')
    @include('user.layout.header')
    <div class="backgroundheader"></div>
@endsection
<!-- CSS -->
@section('css')
    <link rel="stylesheet" href="{{asset('css/login-form.css')}}">
@endsection

<!-- LOGIN-FORM -->
@section('body')
        <div id="container" class="col-lg-6 col-md-8 col-sm-10">
            @if(count($errors) > 0)
                <div class="alert alert-danger">
                    @foreach($errors->all() as $err)
                        {{$err}} <br>
                    @endforeach
                </div>
            @endif
            @if(session('thongbao'))
                <div class="alert alert-danger">
                    {{session('thongbao')}}
                </div>
            @endif
            @if(session('msg'))
                <div class="alert alert-success">
                    {{session('msg')}}
                </div>
            @endif
        <form action="/login" method="POST" class="form-group">
            {{csrf_field()}}
            <div class="form-header">Login</div>

            <div class="form-element">
                <p class="content">* Email</p>
                <input type="text" name="email" class="input-form">
            </div>

            <div class="form-element">
                <p class="content">* Password</p>
                <input type="password" name="password" class="input-form">
            </div>
            <div class="" id="submit">
                <input type="submit" class="form-submit" value="LOGIN">
            </div>
            <div id="forgot">
                <a href="#">Forgot password?</a>
            </div>
        </form>
    </div>
@endsection
<!-- FOOTER -->
@section('footer')
    @include('user.layout.footer')
@endsection