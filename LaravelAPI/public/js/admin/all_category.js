// $(document).ready(function() {
//     $.ajaxSetup({
//         headers: {
//             'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//         }
//     });
// });

function edit(event) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    var item = event.target;
    var category_id = $(item).attr("data-id");
    var category_status = $("input[id='category_status'][data-id=" + category_id + "]").prop('checked') == true ? 1 : 0;

    $.ajax({
        method: "POST",
        url: '/allcategory',
        data: {
            id: category_id,
            status: category_status
        },
        success: function () {
            //window.location.href = '/addcategory';
            window.open("/addcategory", "_self");
            //alert("Success");
        }
    })
}
