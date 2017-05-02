$(document).ready(function () {
    var tableItems = $('#grid-items').dataTable({
        'ajaxSource': 'http://127.0.0.1:1337/',
        'columns': [
            { 'data': 'ID' },
            { 'data': 'Name' },
            { 'data': 'FaceImage', "orderable": false,
                'render': function (data, type, row) {
                if (data.length > 2) {
                    return '<div style="text-align: center;"><img src="https://lifeisfeudal.com/' + data + '" /></div>';
                } else {
                    return '';
                }
            }},
            { 'data': 'ID', "orderable": false,
                'render' : function(row){
                    return '<input class="cmdCopy LogLogin_s in_s" style="width: 100px;" type="text" value="/ADD '+row+' 1 50">';
            }}
        ],
        'serverSide': true,
        'processing': true,
        'filter': true,
        'sort': true,
        'info': true
    });

    $('#itemSearch').on( 'keyup change', function () {
        if (this.value.length > 3) {
            $('#grid-items').DataTable().columns(1).search(this.value).draw();
        }
        if (this.value.length == 0){
            $('#grid-items').DataTable().columns(1).search('').draw();
        }
    });
});
