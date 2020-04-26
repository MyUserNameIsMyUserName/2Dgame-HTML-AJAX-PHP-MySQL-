$(document).ready(function(){


    var oneFrameInterval = setInterval(function(){
        oneFrameFunction()
           
        }, frameTime);


    var oneSecInterval = setInterval(function(){
        $('.fps').text(oneSecFPS);
        oneSecFPS = 0;
    }, 1000);

    $('script').ready(function(){

        userInputInterval = setInterval(function(){
            movePlayer();
        }, 5);
    
    })


function oneFrameFunction(){
    oneSecFPS++;
    allDoneFPS++;
    $('.doneFPS').text(allDoneFPS);
    updateGameSpace(gameResolution, playerPositionTop, playerPositionLeft, playerSize);
    //stressFunction();
}

    

function updateGameSpace(gameRez, ppTop, ppLeft, pSize){
    $(".gameCam").css({  "overflow": "hidden", "position": "relative", "top": "5px", "left": "5px", "width": 138*gameRez, "height": 72*gameRez });
    $(".gameSpace").css({ "background-color": "gray","background-image": "linear-gradient(rgba(156, 156, 156, 0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(154, 156, 154, 0.7) 1px, transparent 1px)", "position": "relative", "top": "5px", "left": "5px", "background-size" : 5*gameResolution*cameraZoom+"px "+5*gameResolution*cameraZoom+"px", "width": 138*gameRez*mapSize*cameraZoom, "height": 72*gameRez*mapSize*cameraZoom,  "left": 138*gameRez*cameraLeftPosition*cameraZoom, "top": 138*gameRez*cameraTopPosition*cameraZoom });
    if (playerRuningStatus){
        $(".player").css({ "border": (playerSize)+"px solid lightblue", "box-shadow": "0px 0px 10px lightblue","background-color": "blue", "position": "absolute", "left": 138*gameRez*ppLeft*cameraZoom, "top": 138*gameRez*ppTop*cameraZoom, "width": gameRez*pSize*cameraZoom, "height": gameRez*pSize*cameraZoom, "border-radius": "2px" , "transform" : "rotate("  + playerAngle + "rad)"});
    } else {
        $(".player").css({ "border": (playerSize)+"px solid transparent", "box-shadow": "none","background-color": "blue", "position": "absolute", "left": 138*gameRez*ppLeft*cameraZoom, "top": 138*gameRez*ppTop*cameraZoom, "width": gameRez*pSize*cameraZoom, "height": gameRez*pSize*cameraZoom, "border-radius": "2px", "transform" : "rotate("  + playerAngle + "rad)" });
    };
    //$(".player").css({ "background-color": "lightgreen", "position": "absolute", "left": 138*gameRez*ppLeft*cameraZoom, "top": 138*gameRez*ppTop*cameraZoom, "width": gameRez*pSize*cameraZoom, "height": gameRez*pSize*cameraZoom, "border-radius": "2px" });
    $(".playerTop").html(playerPositionTop);
    $(".playerLeft").html(playerPositionLeft);
    
}


$(document).on('DOMMouseScroll mousewheel', function (e) {
    if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
      //scroll down
      //console.log('Down');
      if (cameraZoom > 0.01){
        cameraZoom -= 0.01;
      }
    } else {
      //scroll up
      //console.log('Up');
      if (cameraZoom < 1.2){
        cameraZoom += 0.01;
      }
    }
    //prevent page fom scrolling
    return false;
  });


$('.wantedFPS').on('input',function(e){
    clearInterval(oneFrameInterval);
    frameRate = $(this).val();
    frameTime = 1000/frameRate;
    oneFrameInterval = setInterval(function(e){
        oneFrameFunction()
           
        }, frameTime);

        $(this).next("span.infoNum").html(frameRate);

});


$('.wantedGameResolution').on('input',function(e){
    e.preventDefault();
    gameResolution = $(this).val();
    $(this).next("span.infoNum").html(gameResolution);
});

$('.wantedplayerSpeed').on('input',function(e){
    e.preventDefault();
    playerMaxSpeed = $(this).val() / 10;
    $(this).next("span.infoNum").html(playerMaxSpeed);
});

$('.wantedPlayerSize').on('input',function(e){
    e.preventDefault();
    playerSize = $(this).val() / 10;
    $(this).next("span.infoNum").html(playerSize);
});


$('.playerAcc').on('input',function(e){
    e.preventDefault();
    playerAcc = $(this).val() / 200;
    $(this).next("span.infoNum").html(playerAcc);
});

$('.wantedRuningSpeed').on('input',function(e){
    e.preventDefault();
    playerRuningSpeed = $(this).val() / 10;
    $(this).next("span.infoNum").html(playerRuningSpeed);
});


$('.movementFriction').on('input',function(e){
    e.preventDefault();
    movementFriction = Number($(this).val() * 3) + 7000000 ;
    movementFriction = movementFriction / 10000000;
    $(this).next("span.infoNum").html(movementFriction);
});





function stressFunction(){
    var i;
    for (i = 0; i < 20; i++) { 
        updateGameSpace(gameResolution, playerPositionTop, playerPositionLeft, playerSize);
    }
}




//////////////////////////////////////////////////////////



$('.camTopMove').mouseover(function(){   
    clearInterval(cameraHoverHelper);
      cameraHoverHelper = setInterval(function(){
          if (cameraTopPosition <= 0){
              cameraTopPosition += 0.005;
          }
      }, frameTime);
});

$('.camTopMove').mouseout(function(){
  clearInterval(cameraHoverHelper);
});


/////////////////////////////////////////////////////



$('.camBottomMove').mouseover(function(){   
    clearInterval(cameraHoverHelper);
      cameraHoverHelper = setInterval(function(){
        if (cameraTopPosition >= -(mapSize/2 - cameraZoom)){
            cameraTopPosition -= 0.005;
        }
      }, frameTime);
});

$('.camBottomMove').mouseout(function(){
  clearInterval(cameraHoverHelper);
});



///////////////////////////////////////////////////////


$('.camLeftMove').mouseover(function(){   
    clearInterval(cameraHoverHelper);
    cameraHoverHelper = setInterval(function(){
        if (cameraLeftPosition <= 0){
            cameraLeftPosition += 0.005;
        }
    }, frameTime);
});

$('.camLeftMove').mouseout(function(){
  clearInterval(cameraHoverHelper);
});


/////////////////////////////////////////////////////////



$('.camRightMove').mouseover(function(){   
    clearInterval(cameraHoverHelper);
        cameraHoverHelper = setInterval(function(){
            if (cameraLeftPosition >= -(mapSize/2 - cameraZoom)){
                cameraLeftPosition -= 0.005;
            }
        }, frameTime);
});

$('.camRightMove').mouseout(function(){
  clearInterval(cameraHoverHelper);
});

/////////////////////////////////////////////////////











$(document).on("mousemove", function(e){
    playerAngle = Math.atan2((e.pageY - 138*gameResolution*cameraTopPosition*cameraZoom) - 138*gameResolution*playerPositionTop*cameraZoom , (e.pageX - 138*gameResolution*cameraLeftPosition*cameraZoom) - 138*gameResolution*playerPositionLeft*cameraZoom) + Math.PI/2;
})


});




setInterval(function() {
    $.ajax({  
        type: 'POST',  
        url: 'included_files/updatePlayerPos.php', 
        data: { playerLeft: playerPositionLeft , playerTop: playerPositionTop, playerAngle: playerAngle }
    });


    setTimeout(function() {
        
        //start ajax request
    $.ajax({
    url: "included_files/getEnemyInfo.php",
    //force to handle it as text
    dataType: "text",
    success: function(data) {
        
        $('.enemy').removeClass('safe');
        if (String(data) != '[0 results]') {

            var json = $.parseJSON(data);
            for (var i=0;i<json.length;++i)
            {
                if($('#'+json[i].username).length){
                    $('#'+json[i].username).css('top', json[i].top_position*138*gameResolution*cameraZoom);
                    $('#'+json[i].username).css('left', json[i].left_position*138*gameResolution*cameraZoom);
                    $('#'+json[i].username).css({"transform" : "rotate("  + json[i].user_angle + "rad)"} );
                    $('#'+json[i].username).addClass('safe');
                }else{
                    $('.gameSpace').append('<div class="enemy safe" id="'+json[i].username+'" style="left:'+json[i].left_position*138*gameResolution*cameraZoom +'px;top:'+json[i].top_position*138*gameResolution*cameraZoom+'px; background:'+json[i].user_color+'; width:'+$widthRez/100+'; height:'+$widthRez/100+';"><p>'+json[i].username+'</p><div class="enemyA"></div><div class="enemyB"></div><div class="enemyC"></div><div class="enemyD"></div></div>')
                };
                var help1 = (playerPositionLeft - json[i].left_position);
                var help2 = (playerPositionTop - json[i].top_position);
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