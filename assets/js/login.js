
$(document).ready(function(){ 

    $('#startGame').click(function(){

        $username = $('#usernameInput').val();
        $usercolor = $('#userColor').val();

        $.ajax({  
            type: 'POST',  
            url: 'included_files/login.php', 
            data: { username: $username, usercolor: $usercolor },
            success: function(data) {
                if (data == '1') {
                    $("body").load("included_files/game.php");
                    $(".loginContainer").remove();
                }
  
            }
        });

    });

});



$(window).on('load', function(){
    $.ajax({  
        type: 'GET',  
        url: 'included_files/removePlayer.php', 
    });
});
