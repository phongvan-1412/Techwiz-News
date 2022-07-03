@extends('layout')


<!-- CSS -->
@section('css')
<link rel="stylesheet" href="{{asset('css/admin/layout/profile.css')}}">
@endsection
<!-- BODY -->
@section('body')
<div class="container-xl px-4 mt-4">
    <hr class="mt-0 mb-4">
    <div class="row">
        <div class="col-xl-4">
            <form action="/adminprofile/changeprofile" method="POST" enctype="multipart/form-data">
                {{csrf_field()}}
                <!-- Profile picture card-->
                <div class="card mb-2 mb-xl-0">
                    <div class="card-header">Profile Picture</div>
                    <div class="card-body text-center">
                        <!-- Profile picture image-->
                        <img class="img-account-profile rounded-circle mb-2"
                            src="{{asset('upload')}}/{{Session::get('emp_img_name') }}" alt="">
                        <!-- Profile picture help block-->
                        <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                        <!-- Profile picture upload button-->
                        <input type="file" name="avatar">
                        <div class="card mt-3">
                            <span class="btn btn-primary" id="changepwd">Change Password</span>
                        </div>
                    </div>
                </div>

        </div>

        <!-- ACCOUNT DETAIL -->
        <div class="col-xl-8" id="account-detail">
            <!-- Account details card-->
            <div class="card mb-4">
                <div class="card-header">Account Details</div>
                <div class="card-body">
                    <!-- Form Group (username)-->
                    <div class="mb-3">
                        <label class="small mb-1" for="position">Position</label>
                        <input class="form-control" name="position" id="position" type="text" value="Editor" disabled>
                    </div>

                    <div class="mb-3" hidden>
                            <label class="small mb-1" for="email">Hidden Email</label>
                            <input class="form-control" id="email" name="email" type="email"
                                value="{{Session::get('emp_email')}}">
                    </div>
                    <!-- Form Row-->
                    <div class="mb-3">
                        <label class="small mb-1" for="fullname">Full name</label>
                        <input class="form-control" id="fullname" name="fullname" type="text"
                            placeholder="Enter your fullname" value="{{Session::get('emp_name')}}">
                    </div>

                    <!-- Form Group (organization name)-->
                    <div class="mb-3">
                        <label class="small mb-1" for="address">Address</label>
                        <input class="form-control" id="address" name="address" type="text"
                            placeholder="Enter your address" value="{{Session::get('emp_address')}}">
                    </div>
                    <!-- Form Group (email address)-->
                    <div class="mb-3">
                        <label class="small mb-1" for="email">Email address</label>
                        <input class="form-control" id="email" value="{{Session::get('emp_email')}}" disabled>
                    </div>
                    <!-- Form Row-->
                    <div class="row gx-3 mb-3">
                        <!-- Form Group (phone number)-->
                        <div class="col-md-6">
                            <label class="small mb-1" for="phonenumber">Phone number</label>
                            <input class="form-control" id="phonenumber" name="phonenumber" type="tel" placeholder="Enter your phone number"
                                value="{{Session::get('emp_contact')}}">
                        </div>
                        <!-- Form Group (birthday)-->
                        <div class="col-md-6">
                            <label class="small mb-1" for="dateofbirth">Birthday</label>
                            <input class="form-control" id="dateofbirth" type="date" name="dateofbirth"
                                placeholder="Enter your birthday" value="{{Session::get('emp_dob')}}">
                        </div>
                    </div>
                        <!-- Save changes button-->
                        <button class="btn btn-primary" type="submit">Save changes</button>
                    </form>
                </div>
            </div>
        </div>
        <!-- CHANGE PASSWORD -->
        <div class="col-xl-8" id="changepwdform" style="display:none">
            <div class="card mb-4">
                <div class="card-header">Change Password</div>
                <div class="card-body">
                    @if(session('thongbao'))
                    <div class="alert alert-success">
                        {{session('thongbao')}}
                    </div>
                    @endif
                    <form action="/adminprofile/changepwd" method="POST">
                        {{csrf_field()}}
                        <div class="mb-3" hidden>
                            <label class="small mb-1" for="hiddenemail">Email</label>
                            <input class="form-control" id="hiddenemail" name="hiddenemail" type="email"
                                value="{{Session::get('emp_email')}}">
                        </div>

                        <div class="mb-3">
                            <label class="small mb-1" for="currentpwd">Current Password</label>
                            <input class="form-control" id="currentpwd" name="currentpwd" type="password">
                        </div>
                        <div class="mb-3">
                            <label class="small mb-1" for="newpwd">New Password</label>
                            <input class="form-control" id="newpwd" name="newpwd" type="password">
                        </div>
                        <div class=" mb-3">
                            <label class="small mb-1" for="confirmpwd">Confirm New Password</label>
                            <input class="form-control" id="confirmpwd" name="confirmpwd" onkeyup="checkpwd();"
                                type="password">
                            <div id="alert"></div>
                        </div>
                        <div>
                            <button class="btn btn-primary" id="changepwd-btn" type="submit" disabled>Change
                                Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection


<!-- JAVASCRIPT -->
@section('scripts')
<script src="{{asset('js/admin/profile.js')}}"></script>
@endsection