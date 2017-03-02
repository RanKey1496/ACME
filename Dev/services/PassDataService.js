app.factory('passDataService', function () {

    var playListCode = 0;

    return {
        savePlaylistResponse:function (data) {
            playListCode = data;
            console.log(data);
        },
        getPlaylistId:function () {
            return playListCode;
        }
    };
    
});