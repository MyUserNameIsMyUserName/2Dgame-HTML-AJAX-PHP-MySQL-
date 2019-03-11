$widthRez = 768;
$heightRez = 768;
$playerTop = $widthRez/2;
$playerLeft = $heightRez/2;

$enemyTop = $widthRez/4;
$enemyLeft = $heightRez/4;

$playerName = "miki";


$(document).ready(function(){
    $(".gameSpace").width($widthRez);
    $(".gameSpace").height($heightRez);


    
    $(".player").width($widthRez/100);
    $(".player").height($widthRez/100);
    
    $(".player").css('top', $playerTop)
    $(".player").css('left', $playerLeft);

    $(".enemy").width($widthRez/100);
    $(".enemy").height($widthRez/100);
    
    $(".enemy").css('top', $enemyTop)
    $(".enemy").css('left', $enemyLeft);
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
        url: 'updatePlayerPos.php', 
        data: { playerLeft: $playerLeft , playerTop: $playerTop }
    });
      
      $.ajax({  
          type: 'GET',  
          url: 'updateViewPlayer.php', 
          success: function(data) {
              console.log(data); //Try to log the data and check the response
              $enemyLeft = (data).substr(0,3);
              $enemyTop = (data).substr(3,3);
              $enemyTop = parseInt($enemyTop) + 25;
              
                $(".enemy").css('top', $enemyTop)
                $(".enemy").css('left', $enemyLeft);

          }
      });
    }, 33);
