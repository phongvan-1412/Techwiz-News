@extends('layout')

<!-- CSS -->
@section('css')
<link rel="stylesheet" href="{{asset('css/register-form.css')}}">
@endsection

<!-- REGISTER-FORM -->
@section('body')
<section class="login-block">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-9 col-sm-10" id="img"></div>
            <div class="col-lg-6 col-md-8 col-sm-10" id="regisform">
                <form action="/register" method="POST" id="form-group">
                    @if(count($errors) > 0)
                    <div class="alert alert-danger">
                        @foreach($errors->all() as $err)
                        {{$err}} <br>
                        @endforeach
                    </div>
                    @endif

                    <p id="form-header">SIGN UP</p>
                    {{csrf_field()}}
                    <div>
                        <p class="title">* First Name</p>
                        <input type="text" name="firstname" class="form-control">
                    </div>
                    <div>
                        <p class="title">* Last Name</p>
                        <input type="text" name="lastname" class="form-control">
                    </div>
                    <div>
                        <p class="title">* Email</p>
                        <input type="text" name="email" class="form-control">
                    </div>
                    <div>
                        <p class="title">* Password</p>
                        <input type="password" name="password" class="form-control">
                    </div>

                    <div>
                        <p class="title">* Mobile Number</p>
                        <input type="text" name="phonenumber" class="form-control">
                    </div>


                    <span id="mostro">Don't have a date yet? Enter your best guess.</span><br>
                    <span class="mos">* required field</span><br>
                    <span id="mostro1">
                        By clicking Submit, I agree that the information I provide to David’s
                        Bridal will be used to create an account and will be subject to the David’s
                        Bridal
                        <a href="#" style="text-decoration: underline;">Terms and Conditions</a> and
                        <a href="#" style="text-decoration: underline;">Privacy Policy.</a>
                    </span>
                    <p></p>
                    <div>
                        <input type="submit" name="register" class="btn-primary" id="register" data-toggle="modal"
                            data-target="#flipFlop" value="SUBMIT">
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

@if (count($msg) >0)
<div class="container-fluid">
    <div class="modal fade" id="flipFlop" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="modalLabel">Flip-flop</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    A type of open-toed sandal.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
@endif

<!-- The Modal -->


@endsection

@section('scripts')
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script>
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

// Initialize popover component
$(function() {
    $('[data-toggle="popover"]').popover()
})
</script>
@endsection