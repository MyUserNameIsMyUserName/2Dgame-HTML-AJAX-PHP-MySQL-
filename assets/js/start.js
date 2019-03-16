$widthRez = 768;
$heightRez = 768;
$playerTop = $widthRez/2;
$playerLeft = $heightRez/2;
$playerAngle = 0;

$playerName = "miki";

$(document).ready(function(){
    $(".gameSpace").width($widthRez);
    $(".gameSpace").height($heightRez);


    
    $(".player").width($widthRez/100);
    $(".player").height($widthRez/100);
    
    $(".player").css('top', $playerTop)
    $(".player").css('left', $playerLeft);


$(document).on("mousemove", function(e){

    $playerAngle = Math.atan2(e.pageY - $playerTop , e.pageX - $playerLeft) + Math.PI/2;


$('.player').css({"transform" : "rotate("  + $playerAngle + "rad)"} )


})
  });



  $(document).keydown(function(e) {
    switch(e.keyCode) {
        
        case 65: {            
            $playerLeft = $playerLeft - 1;
            $(".player").css('left', $playerLeft);
            break;
        }// left


        case 68: {
            $playerLeft = $playerLeft + 1;
            $(".player").css('left', $playerLeft);
            break;
        }// right

        case 87: {
            $playerTop = $playerTop - 1;
            $(".player").css('top', $playerTop);
            break;
        }// up

        case 83: {
            $playerTop = $playerTop + 1;
            $(".player").css('top', $playerTop);
            break;
        }// down

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});


setInterval(function() {
    $.ajax({  
        type: 'POST',  
        url: 'included_files/updatePlayerPos.php', 
        data: { playerLeft: $playerLeft , playerTop: $playerTop, playerAngle: $playerAngle }
    });


    setTimeout(function() {
        
        //start ajax request
    $.ajax({
    url: "included_files/getEnemyInfo.php",
    //force to handle it as text
    dataType: "text",
    success: function(data) {
        
        $('.enemy').removeClass('safe');
        //data downloaded so we call parseJSON function 
        //and pass downloaded data
        //now json variable contains data in json format
        //let's display a few items
        if (String(data) != '[0 results]') {

            var json = $.parseJSON(data);
            for (var i=0;i<json.length;++i)
            {
                if($('#'+json[i].username).length){
                    $('#'+json[i].username).css('top', json[i].top_position);
                    $('#'+json[i].username).css('left', json[i].left_position);
                    $('#'+json[i].username).css({"transform" : "rotate("  + json[i].user_angle + "rad)"} );
                    $('#'+json[i].username).addClass('safe');
                }else{
                    $('.gameSpace').append('<div class="enemy safe" id="'+json[i].username+'" style="left:'+json[i].left_position+'px;top:'+json[i].top_position+'px; background:'+json[i].user_color+';"><p>'+json[i].username+'</p><div class="enemyA"></div><div class="enemyB"></div><div class="enemyC"></div><div class="enemyD"></div></div>')
                };
                var help1 = ($playerLeft - json[i].left_position);
                var help2 = ($playerTop - json[i].top_position);
                var dist = Math.sqrt(Math.pow( help1 , 2)+ Math.pow( help2 , 2));
                if (dist > 350) {
                    $('#'+json[i].username).css('opacity', '0');
                } else {
                    $('#'+json[i].username).css('opacity', '1');
                }
            };
        };

        
        $('.enemy').not('.safe').remove();
        }
    });

    
    }, 500);

      
    },100);




    $(window).bind('beforeunload', function(){
        $.ajax({  
            type: 'GET',  
            url: 'included_files/removePlayer.php'
        });
      });


      window.addEventListener("beforeunload", function(event) {
        $.ajax({  
            type: 'GET',  
            url: 'included_files/removePlayer.php'
        });
      });