<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/adminhome">
        <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-pen-fancy"></i>
        </div>
        <div class="sidebar-brand-text mx-3">BuffDog News</div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
        <a class="nav-link" href="/adminhome">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
        Interface
    </div>

    <!-- Nav Item - Utilities Collapse Menu -->
    <li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#post" aria-expanded="true" aria-controls="post">
        <i class="fas fa-pencil-alt"></i>
        <span>POST</span>
    </a>
    <div id="post" class="collapse" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Utilities:</h6>
            <a class="collapse-item admin_menu" href="/allpost" data-link="#">All Post</a>
            <a class="collapse-item admin_menu" href="/addpost" data-link="#">Add New</a>

        </div>
    </div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#media" aria-expanded="true" aria-controls="media">
            <i class="fas fa-images"></i>
            <span>MEDIA</span>
        </a>
        <div id="media" class="collapse" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Custom Components:</h6>
                <a class="collapse-item" href="#">Add New</a>
            </div>
        </div>
    </li>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#category" aria-expanded="true" aria-controls="category">
            <i class="fas fa-boxes"></i>
            <span>CATEGORY</span>
        </a>
        <div id="category" class="collapse" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Custom Components:</h6>
                <a class="collapse-item" href="/admin/category">Add New</a>
            </div>
        </div>
    </li>



    <li class="nav-item">
        <a class="nav-link" href="/trash">
            <i class="fas fa-trash-alt"></i>
            <span>TRASH</span></a>
    </li>

    <li class="nav-item">
        <a class="nav-link" href="/drafts">
            <i class="far fa-edit"></i>
            <span>DRAFTS</span></a>
    </li>



    <!-- Divider -->
    <hr class="sidebar-divider">


    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

</ul>
<script src="{{asset('js/jquery.min.js')}}"></script>
<script src="{{ asset('js/admin/admin_menu.js') }}"></script>
