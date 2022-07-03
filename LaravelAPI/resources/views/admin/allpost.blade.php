@extends('admin.layout.adminlayout')

@section('css')
    <link rel="stylesheet" type="text/css" href="{{ asset('css/admin/layout/response-tableadminfeedback.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/admin/layout/admin.css') }}">
@endsection

@section('topbar')
    @include('admin.layout.topbar')
@endsection

@section('slidebar')
    @include('admin.layout.menubar')
@endsection

@section('bodycontent')
    <h2 style="text-align:center">ALL POST</h2>
    <section class="bg-white p-2">
        <div id="no-more-tables" class="content">
            <div class="clearfix"></div>
            <div class="clearfix"></div>
            <div class="table-responsive ">
                <table id="myTable" class="table bg-white">
                    <thead class="bg-dark">
                        <tr>
                            <th class="text-light">STT</th>
                            <th class="text-light">Image</th>
                            <th class="text-light">Title</th>
                            <th class="text-light">Author</th>
                            <th class="text-light">Category</th>
                            <th class="text-light">Published Date</th>
                            <th class="text-light">Video Source</th>
                            <th class="text-light">Status</th>
                            <th class="text-light">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        @if (count($blogs) > 0)
                            <span hidden> {{ $i = 1 }}</span>
                            @foreach ($blogs as $blog)
                                <tr>
                                    <th>{{ $i++ }}</th>
                                    <td><img src="{{asset('userfiles/files')}}/{{$blog->blog_thumbnail_name}}" id="img_product" alt=""></td> -->
                                    <td>{{ $blog->blog_title }}</td>
                                    <td>{{ $blog->emp_name }}</td>
                                    <td>{{ $blog->category_name}}</td>
                                    <td>{{ $blog->blog_day_open }}</td>
                                    <td>{{ $blog->blog_video_name }}</td>
                                    @if ($blog->blog_status == 1)
                                        <td><input type="checkbox" id="category_status" class="category_status"
                                                name="category_status" data-id={{ $blog->blog_id }} checked></td>
                                    @else
                                        <td><input type="checkbox" id="category_status" class="category_status"
                                                name="category_status" data-id={{ $blog->blog_id }}></td>
                                    @endif
                                    <td><i id="edit_category" onclick="edit(event)" data-id={{$blog->blog_id}} class="fa-solid fa-pen-to-square edit_category"></i></td>
                                </tr>
                            @endforeach
                        @endif
                    </tbody>
                </table>
            </div>
        </div>
    </section>


@endsection

@section('scripts')
    <script src="{{ asset('js/admin/all_category.js') }}"></script>
    <script src="{{ asset('js/admin/tableadminfeedback.js') }}"></script>
@endsection

