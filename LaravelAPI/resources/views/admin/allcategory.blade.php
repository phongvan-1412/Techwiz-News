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
    <h2 style="text-align:center">ALL CATEGORY</h2>
    <section class="bg-white p-2">
        <div id="no-more-tables" class="content">
            <div class="clearfix"></div>
            <div class="clearfix"></div>
            <div class="table-responsive ">
                <table id="myTable" class="table bg-white">
                    <thead class="bg-dark">
                        <tr>
                            <th class="text-light">STT</th>
                            <th class="text-light">Category Name</th>
                            <th class="text-light">Category Root</th>
                            <th class="text-light">Status</th>
                            <th class="text-light">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        @if (count($category) > 0)
                            <span hidden> {{ $i = 1 }}</span>
                            @foreach ($category as $cate)
                                <tr>
                                    <th>{{ $i++ }}</th>
                                    <td>{{ $cate->category_name }}</td>
                                    <td>{{ $cate->category_root }}</td>
                                    @if ($cate->category_status == 1)
                                        <td><input type="checkbox" id="category_status" class="category_status"
                                                name="category_status" data-id={{ $cate->category_id }} checked></td>
                                    @else
                                        <td><input type="checkbox" id="category_status" class="category_status"
                                                name="category_status" data-id={{ $cate->category_id }}></td>
                                    @endif
                                    <td><i id="edit_category" onclick="edit(event)" data-id={{$cate->category_id}} class="fa-solid fa-pen-to-square edit_category"></i></td>
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

