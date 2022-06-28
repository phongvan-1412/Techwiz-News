@extends('admin.layout.adminlayout')

@section('css')
    <link rel="stylesheet" type="text/css" href="{{ asset('css/admin/form/response-tableadminfeedback.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/admin/form/admin.css') }}">
@endsection

@section('topbar')
    @include('admin.layout.topbar')
@endsection

@section('slidebar')
    @include('admin.layout.menubar')
@endsection

@section('bodycontent')
    <h2 style="text-align:center">TRASH</h2>
    <section class="bg-white p-2">
        <div id="no-more-tables" class="content">
            <div class="clearfix"> </div>
            <div class="clearfix"></div>

            <div class="table-responsive ">
                <table id="myTable" class="table bg-white">
                    <thead class="bg-dark">
                        <tr>
                            <th class="text-light">ID</th>
                            <th class="text-light">Title</th>
                            <th class="text-light">Category</th>
                            <th class="text-light">Published Date</th>
                            <th class="text-light">Deleted Date</th>

                        </tr>
                    </thead>

                    <tbody>
                        @if (count($blogs) > 0)

                            @foreach ($blogs as $blog)
                                <tr>
                                    <th>{{ $blog->blog_id }}</th>
                                    <td>
                                        <span id="category_name">{{ $blog->category_name}}</span>

                                    </td>
                                    <td>{{ $blog->blog_content }}</td>
                                    <td>{{ $blog->blog_day_open }}</td>
                                </tr>
                            @endforeach
                        @endif
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    @section('scripts')
        <script src="{{ asset('js/admin/tableadminfeedback.js') }}"></script>
        <script src="{{ asset('js/admin/all_category.js') }}"></script>
    @endsection
@endsection



