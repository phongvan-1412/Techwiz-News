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
            <form action="profile" method="POST" enctype="multipart/form-data">
                {{csrf_field()}}
                <!-- Profile picture card-->
                <div class="card mb-2 mb-xl-0">
                    <div class="card-header">Profile Picture</div>
                    <div class="card-body text-center">
                        <!-- Profile picture image-->
                        <img class="img-account-profile rounded-circle mb-2"
                            src="{{asset('upload/default-profile.jpg')}}" alt="">
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
                        <label class="small mb-1" for="inputUsername">Rank</label>
                        <input class="form-control" id="inputUsername" type="text" value="Platinum" disabled>
                    </div>
                    <!-- Form Row-->
                    <div class="row gx-3 mb-3">
                        <!-- Form Group (first name)-->
                        <div class="col-md-6">
                            <label class="small mb-1" for="inputFirstName">First name</label>
                            <input class="form-control" id="inputFirstName" type="text"
                                placeholder="Enter your first name" value="Valerie" disabled>
                        </div>
                        <!-- Form Group (last name)-->
                        <div class="col-md-6">
                            <label class="small mb-1" for="inputLastName">Last name</label>
                            <input class="form-control" id="inputLastName" type="text"
                                placeholder="Enter your last name" value="Luna" disabled>
                        </div>
                    </div>
                    <!-- Form Row-->
                    <div class="row gx-3 mb-3">
                        <!-- Form Group (organization name)-->
                        <div class="col-md-6">
                            <label class="small mb-1" for="inputOrgName">Organization name</label>
                            <input class="form-control" id="inputOrgName" type="text"
                                placeholder="Enter your organization name" value="Start Bootstrap">
                        </div>
                        <!-- Form Group (location)-->
                        <div class="col-md-6">
                            <label class="small mb-1" for="inputLocation">Location</label>
                            <input class="form-control" id="inputLocation" type="text" placeholder="Enter your location"
                                value="San Francisco, CA">
                        </div>
                    </div>
                    <!-- Form Group (email address)-->
                    <div class="mb-3">
                        <label class="small mb-1" for="Email">Email address</label>
                        <input class="form-control" id="Email" name="Email" type="email"
                            placeholder="Enter your email address" value="xuanphuong@gmail.com" disabled>
                    </div>
                    <!-- Form Row-->
                    <div class="row gx-3 mb-3">
                        <!-- Form Group (phone number)-->
                        <div class="col-md-6">
                            <label class="small mb-1" for="inputPhone">Phone number</label>
                            <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number"
                                value="555-123-4567">
                        </div>
                        <!-- Form Group (birthday)-->
                        <div class="col-md-6">
                            <label class="small mb-1" for="inputBirthday">Birthday</label>
                            <input class="form-control" id="inputBirthday" type="date" name="birthday"
                                placeholder="Enter your birthday" value="06/10/1988">
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
                    <form action="/changepwd" method="POST">
                        {{csrf_field()}}
                        <div class="mb-3" hidden>
                            <label class="small mb-1" for="hiddenemail">Email</label>
                            <input class="form-control" id="hiddenemail" name="hiddenemail" type="email"
                                value="xuanphuong@gmail.com">
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