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
    <h2 style="text-align:center">ALL CATEGORY</h2>
    <section class="bg-white p-5">
        <div id="no-more-tables" class="content">
            <div class="clearfix"> </div>
            <div class="clearfix"></div>

            <div class="table-responsive ">
                <table id="myTable" class="table bg-white">
                    <thead class="bg-dark">
                        <tr>
                            <th class="text-light">ID</th>
                            <th class="text-light">Category Name</th>
                            <th class="text-light">Category Root</th>
                            <th class="text-light">Status</th>
                            <th class="text-light">Edit</th>
                        </tr>
                    </thead>

                    <tbody>
                        @if (count($allcategories) > 0)
                            <span hidden> {{ $i = 1 }}</span>
                            @foreach ($allcategories as $category)
                                <tr>
                                    <th>{{ $i++ }}</th>
                                    <td>
                                        <span id="category_name">{{ $category->category_name }}</span>

                                    </td>
                                    <td>{{ $category->category_root_name }}</td>
                                    @if ($category->category_status == 1)
                                        <td><input type="checkbox" id="category_status" class="category_status"
                                                name="category_status" data-id={{ $category->category_id }} checked></td>
                                    @else
                                        <td><input type="checkbox" id="category_status" class="category_status"
                                                name="category_status" data-id={{ $category->category_id }}></td>
                                    @endif
                                    <td><i id="edit_category"  onclick="edit(event)"  data-id={{ $category->category_id }} class="fa-solid fa-pen-to-square edit_category"></i></td>
                                </tr>
                            @endforeach
                        @endif
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    @section('scripts')
         {{-- <script src="{{ asset('js/admin/tableadminfeedback.js') }}"></script> --}}
        <script src="{{ asset('js/admin/all_category.js') }}"></script>
    @endsection
@endsection



