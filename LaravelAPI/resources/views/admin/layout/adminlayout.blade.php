<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>VNHP's Grocery</title>

    <!-- Custom fonts for this template -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="{{asset('css/admin/layout/sb-admin-2.min.css')}}" rel="stylesheet">
    <script src="https://kit.fontawesome.com/8b058784b8.js" crossorigin="anonymous"></script>
    <link href="{{asset('css/admin/layout/admin.css')}}" rel="stylesheet">
    <!-- Custom styles for this page -->
    <!-- <link href="{{asset('bootstrap/bootstrap.min.css')}}" rel="stylesheet">     -->
    <!-- <link href="{{asset('bootstrap/bootstrap.css')}}" rel="stylesheet"> -->

    @yield('css')
</head>


<body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Slide bar -->
        @yield('slidebar')
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">
                @yield('topbar')

                <!-- Begin Page Content -->
                <div class="container-fluid">
                    @yield('bodycontent')
                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; BuffDog News</span>
                    </div>
                </div>
            </footer>
            <!-- End of Footer -->

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->


    <!-- Bootstrap core JavaScript-->

    <script src="{{asset('js/admin/jquery.min.js')}}"></script>
    <script src="{{asset('js/admin/sb-admin-2.min.js')}}"></script>
    <script src="{{asset('js/admin/bootstrap.bundle.min.js')}}"></script>

    <!-- Core plugin JavaScript-->
    <script src="{{asset('js/admin/jquery.easing.min.js')}}"></script>

    @yield('scripts')
</body>

</html>
