/*$("#table").bootstrapTable({
        url:'http://lemurbackend.herokupp.com/playlist/getAll?token=' + localStorage.getItem('token'),
        search: true,
        pagination: true,
        columns:[
            {title:"Codigo", field:"id"},
            {title:"Nombre", field:"name", editable: true}],
        onLoadSuccess: function (data) {
            toggle();
            getSession();
        }
    });*/

/*$.ajax({
    url:   'http://lemurbackend.herokupp.com/playlist/getAll?token=' + localStorage.getItem('token'),
    type:  'post',
    success:  function (response) {
        console.log(response.data);
        var jsonResponse = JSON.parse(response);
        $('#table').bootstrapTable({
            data: response.data.message
        });
    }
});*/