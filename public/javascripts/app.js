//if You click on import csv button a request is sent to server to import a csv file using node js
$(function(){
    $("#importdata").on('click', function(){
        $.get( "/import", function( data ) {
            $("#message").show().html(data['success']);
        });
    });

}); 