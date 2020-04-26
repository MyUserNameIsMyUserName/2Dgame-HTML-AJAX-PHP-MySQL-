
    var playerMaxSpeed = 2.5;
    var playerRuningSpeed = 1.5;
    var playerRuningStatus = false;
    var mapSize = 5;
    var cameraZoom = 1;
    var cameraTopPosition = -0.5;
    var cameraLeftPosition = -0.5;
    var cameraHoverHelper;
    var gameResolution = 4;
    var playerPositionTop = 0.75;
    var playerPositionLeft = 0.75;
    var playerAngle = 0;
    var playerSize = 1;
    var frameRate = 25;
    var oneSecFPS = 0;
    var allDoneFPS = 0;
    var keysPressed = [];
    var userInputInterval;
    var frameTime = 1000/frameRate;
    var playerHSpeed = 0;
    var playerVSpeed = 0;
    var playerAcc = 1;
    var movementFriction = 0.8666665;

    $(document).keydown(function(e) {
        if (keysPressed.indexOf(e.keyCode) == -1){
            keysPressed.push(e.keyCode);
        }
    });
    
    $(document).keyup(function(e) {
        for(var i = keysPressed.length - 1; i >= 0; i--) {
            if(keysPressed[i] === e.keyCode) {
                keysPressed.splice(i, 1);
            }
        }
    });
    
function movePlayer(){
    var leftHelperInput = keysPressed.includes(65);
    var topHelperInput = keysPressed.includes(87);
    var rightHelperInput = keysPressed.includes(68);
    var bottomHelperInput = keysPressed.includes(83);
    playerRuningStatus = keysPressed.includes(16);
    var inputHelper = 0;
    if (leftHelperInput){
        inputHelper++;
    }
    if (topHelperInput){
        inputHelper++;
    }
    if (rightHelperInput){
        inputHelper++;
    }
    if (bottomHelperInput){
        inputHelper++;
    }

    
if (inputHelper == 0){
    if ((playerHSpeed > -(1 - movementFriction)) && (playerHSpeed < (1 - movementFriction))){
        playerHSpeed = Math.floor((playerHSpeed*(movementFriction/2 - 0.5)) * 100000) / 100000;  
    } else {
        playerHSpeed = Math.floor((playerHSpeed * movementFriction) * 100000) / 100000;  
    } 
    if ((playerVSpeed > -(1 - movementFriction)) && (playerVSpeed < (1 - movementFriction))){
        playerVSpeed = Math.floor((playerVSpeed*(movementFriction/2 - 0.5)) * 100000) / 100000; 
    } else {
        playerVSpeed = Math.floor((playerVSpeed * movementFriction) * 100000) / 100000; 
    } 
}
if ((leftHelperInput || rightHelperInput) && !(topHelperInput || bottomHelperInput)){
    
    
    if ((playerVSpeed > -(1 - movementFriction)) && (playerVSpeed < (1 - movementFriction))){
        playerVSpeed = Math.floor((playerVSpeed*(movementFriction/2 - 0.5)) * 100000) / 100000; 
    } else {
        playerVSpeed = Math.floor((playerVSpeed * movementFriction) * 100000) / 100000; 
    } 

    
    
}
if (!(leftHelperInput || rightHelperInput) && (topHelperInput || bottomHelperInput)){

    if ((playerHSpeed > -(1 - movementFriction)) && (playerHSpeed < (1 - movementFriction))){
        playerHSpeed = Math.floor((playerHSpeed*(movementFriction/2 - 0.5)) * 100000) / 100000;  
    } else {
        playerHSpeed = Math.floor((playerHSpeed * movementFriction) * 100000) / 100000;  
    } 
    
}
    
    //console.log(leftHelperInput+" "+topHelperInput+" "+rightHelperInput+" "+bottomHelperInput);
    

    if (inputHelper == 2) {
        if (leftHelperInput){
            playerHSpeed -= playerAcc*0.707;
        }
        if (rightHelperInput){
            playerHSpeed += playerAcc*0.707;
        }
        if (topHelperInput){
            playerVSpeed -= playerAcc*0.707;
        }
        if (bottomHelperInput){
            playerVSpeed += playerAcc*0.707;
        }
        
        if (playerRuningStatus){
            if (playerVSpeed > playerMaxSpeed*playerRuningSpeed*0.707){
                playerVSpeed = playerMaxSpeed*playerRuningSpeed*0.707;
            } else if (playerVSpeed < -playerMaxSpeed*playerRuningSpeed*0.707){
                playerVSpeed = -playerMaxSpeed*playerRuningSpeed*0.707;
            }
    
            if (playerHSpeed > playerMaxSpeed*playerRuningSpeed*0.707){
                playerHSpeed = playerMaxSpeed*playerRuningSpeed*0.707;
            } else if (playerHSpeed < -playerMaxSpeed*playerRuningSpeed*0.707){
                playerHSpeed = -playerMaxSpeed*playerRuningSpeed*0.707;
            }
        } else {
            if (playerVSpeed > playerMaxSpeed*0.707){
                playerVSpeed = playerMaxSpeed*0.707;
            } else if (playerVSpeed < -playerMaxSpeed*0.707){
                playerVSpeed = -playerMaxSpeed*0.707;
            }
    
            if (playerHSpeed > playerMaxSpeed*0.707){
                playerHSpeed = playerMaxSpeed*0.707;
            } else if (playerHSpeed < -playerMaxSpeed*0.707){
                playerHSpeed = -playerMaxSpeed*0.707;
            }
        }
        //console.log("-2-");
    } else if (inputHelper != 0){
        if (leftHelperInput){
            playerHSpeed -= playerAcc;
        }
        if (rightHelperInput){
            playerHSpeed += playerAcc;
        }
        if (topHelperInput){
            playerVSpeed -= playerAcc;
        }
        if (bottomHelperInput){
            playerVSpeed += playerAcc;
        }
        if (playerRuningStatus){
            if (playerVSpeed > playerMaxSpeed*playerRuningSpeed){
                playerVSpeed = playerMaxSpeed*playerRuningSpeed;
            } else if (playerVSpeed < -playerMaxSpeed*playerRuningSpeed){
                playerVSpeed = -playerMaxSpeed*playerRuningSpeed;
            }
    
            if (playerHSpeed > playerMaxSpeed*playerRuningSpeed){
                playerHSpeed = playerMaxSpeed*playerRuningSpeed;
            } else if (playerHSpeed < -playerMaxSpeed*playerRuningSpeed){
                playerHSpeed = -playerMaxSpeed*playerRuningSpeed;
            }
        } else {
            if (playerVSpeed > playerMaxSpeed){
                playerVSpeed = playerMaxSpeed;
            } else if (playerVSpeed < -playerMaxSpeed){
                playerVSpeed = -playerMaxSpeed;
            }
    
            if (playerHSpeed > playerMaxSpeed){
                playerHSpeed = playerMaxSpeed;
            } else if (playerHSpeed < -playerMaxSpeed){
                playerHSpeed = -playerMaxSpeed;
            }
        }
        //console.log("-1-");
        
    }


    playerPositionLeft = Math.floor((playerPositionLeft + (playerHSpeed/2000)) * 100000) / 100000;   
    playerPositionTop = Math.floor((playerPositionTop + (playerVSpeed/2000)) * 100000) / 100000;

    //printStatus();

}

/*function movePlayer(){
    
    console.log(keysPressed);
    //console.log(leftHelperInput+" "+topHelperInput+" "+rightHelperInput+" "+bottomHelperInput);
    
    var leftHelperInput = keysPressed.includes(37);
    var topHelperInput = keysPressed.includes(38);
    var rightHelperInput = keysPressed.includes(39);
    var bottomHelperInput = keysPressed.includes(40);

    if ( leftHelperInput && topHelperInput ) {
             
        playerPositionLeft = Math.floor((playerPositionLeft - (playerMaxSpeed/2000)*0.707) * 100000) / 100000;   
        playerPositionTop = Math.floor((playerPositionTop - (playerMaxSpeed/2000)*0.707) * 100000) / 100000;

    } else if ( topHelperInput && rightHelperInput ) {
        playerPositionLeft = Math.floor((playerPositionLeft + (playerMaxSpeed/2000)*0.707) * 100000) / 100000;   
        playerPositionTop = Math.floor((playerPositionTop - (playerMaxSpeed/2000)*0.707) * 100000) / 100000;

    } else if ( rightHelperInput && bottomHelperInput ) {
        playerPositionLeft = Math.floor((playerPositionLeft + (playerMaxSpeed/2000)*0.707) * 100000) / 100000;   
        playerPositionTop = Math.floor((playerPositionTop + (playerMaxSpeed/2000)*0.707) * 100000) / 100000;

    } else if ( leftHelperInput && bottomHelperInput ) {
        playerPositionLeft = Math.floor((playerPositionLeft - (playerMaxSpeed/2000)*0.707) * 100000) / 100000;   
        playerPositionTop = Math.floor((playerPositionTop + (playerMaxSpeed/2000)) * 100000) / 100000;

    } else if ( leftHelperInput && !topHelperInput && !rightHelperInput && !bottomHelperInput ) {
        playerPositionLeft = Math.floor((playerPositionLeft - (playerMaxSpeed/2000)) * 100000) / 100000;  
        
    } else if ( topHelperInput && !leftHelperInput && !rightHelperInput && !bottomHelperInput ) {
        playerPositionTop = Math.floor((playerPositionTop - (playerMaxSpeed/2000)) * 100000) / 100000;  
        
    } else if ( rightHelperInput && !topHelperInput && !leftHelperInput && !bottomHelperInput ) {
        playerPositionLeft = Math.floor((playerPositionLeft + (playerMaxSpeed/2000)) * 100000) / 100000;  
        
    } else if ( bottomHelperInput && !topHelperInput && !rightHelperInput && !leftHelperInput ) {
        playerPositionTop = Math.floor((playerPositionTop + (playerMaxSpeed/2000)) * 100000) / 100000;  
        
    }


    
}*/





/************ORIGINAL 


$(document).keydown(function(e) {
    keysPressed[e.keyCode] = true;
});

$(document).keyup(function(e) {
    delete keysPressed[e.keyCode];
});


function movePlayer() {
    var helperDireciton = [];
    $(".playerInputButton").html("");
    for (var direction in keysPressed) {

        $(".playerInputButton").html("");
        helperDireciton.push(direction);
        var numHelp;
        for(let numHelp = 0; numHelp < helperDireciton.length; numHelp++){

            $(".playerInputButton").append(" "+helperDireciton[numHelp]);
         
         };
         var helperPositionLeft;
         var helperPositionTop;



         //alert(helperDireciton.length +"  "+ helperDireciton);

         if (helperDireciton.includes("37") && helperDireciton.includes("38")){
             
            helperPositionLeft = playerPositionLeft - (playerMaxSpeed/2000)*0.707; 
            playerPositionLeft = Math.floor(helperPositionLeft * 100000) / 100000;            
         
            helperPositionTop = playerPositionTop - (playerMaxSpeed/2000)*0.707; 
            playerPositionTop = Math.floor(helperPositionTop * 100000) / 100000;
         
         } else if (helperDireciton.includes("38") && helperDireciton.includes("39")){
             
            helperPositionLeft = playerPositionLeft + (playerMaxSpeed/2000)*0.707; 
            playerPositionLeft = Math.floor(helperPositionLeft * 100000) / 100000;            
         
            helperPositionTop = playerPositionTop - (playerMaxSpeed/2000)*0.707; 
            playerPositionTop = Math.floor(helperPositionTop * 100000) / 100000;
         
         } else if (helperDireciton.includes("39") && helperDireciton.includes("40")){
             
            helperPositionLeft = playerPositionLeft + (playerMaxSpeed/2000)*0.707; 
            playerPositionLeft = Math.floor(helperPositionLeft * 100000) / 100000;            
         
            helperPositionTop = playerPositionTop + (playerMaxSpeed/2000)*0.707; 
            playerPositionTop = Math.floor(helperPositionTop * 100000) / 100000;
         
         } else if (helperDireciton.includes("40") && helperDireciton.includes("37")){
             
            helperPositionLeft = playerPositionLeft - (playerMaxSpeed/2000)*0.707; 
            playerPositionLeft = Math.floor(helperPositionLeft * 100000) / 100000;            
         
            helperPositionTop = playerPositionTop + (playerMaxSpeed/2000)*0.707; 
            playerPositionTop = Math.floor(helperPositionTop * 100000) / 100000;
         
         };
         
         if (helperDireciton.includes("37") && !helperDireciton.includes("38") && !helperDireciton.includes("39") && !helperDireciton.includes("40")){
             
            helperPositionLeft = playerPositionLeft - (playerMaxSpeed/2000); 
            playerPositionLeft = Math.floor(helperPositionLeft * 100000) / 100000;     
         
         } else if (helperDireciton.includes("38") && !helperDireciton.includes(37) && !helperDireciton.includes("39") && !helperDireciton.includes("40")){
             
            helperPositionTop = playerPositionTop - (playerMaxSpeed/2000); 
            playerPositionTop = Math.floor(helperPositionTop * 100000) / 100000;
         
         } else if (helperDireciton.includes("39") && !helperDireciton.includes("37") && !helperDireciton.includes("38") && !helperDireciton.includes("40")){
             
            helperPositionLeft = playerPositionLeft + (playerMaxSpeed/2000); 
            playerPositionLeft = Math.floor(helperPositionLeft * 100000) / 100000;
         
         } else if (helperDireciton.includes("40") && !helperDireciton.includes("37") && !helperDireciton.includes("39") && !helperDireciton.includes("38")){
             
            helperPositionTop = playerPositionTop + (playerMaxSpeed/2000); 
            playerPositionTop = Math.floor(helperPositionTop * 100000) / 100000;
         
         };

        //if (!keysPressed.hasOwnProperty(direction)) continue;
        /*if (direction == 37) {
            var helperPositionLeft = playerPositionLeft - (playerMaxSpeed/2000); 
            playerPositionLeft = Math.floor(helperPositionLeft * 100000) / 100000;            
        }
        if (direction == 38) {
            var helperPositionTop = playerPositionTop - (playerMaxSpeed/2000); 
            playerPositionTop = Math.floor(helperPositionTop * 100000) / 100000;
        }
        if (direction == 39) {
            var helperPositionLeft = playerPositionLeft + (playerMaxSpeed/2000); 
            playerPositionLeft = Math.floor(helperPositionLeft * 100000) / 100000;
        }
        if (direction == 40) {
            var helperPositionTop = playerPositionTop + (playerMaxSpeed/2000); 
            playerPositionTop = Math.floor(helperPositionTop * 100000) / 100000;
        }
    }
}

*/



function printStatus(){
    var i,printInputHelper = "";
    if (keysPressed.length == 0){
    } else {
        for (i = 0; i < keysPressed.length; i++) { 
            printInputHelper = printInputHelper+" "+ keysPressed[i];
        }
    }
    $(".playerInput").html(printInputHelper);
    $(".cameraZoom").html(cameraZoom);
    $(".cameraPositionTop").html(cameraTopPosition);
    $(".cameraPositionLeft").html(cameraLeftPosition);
    $(".playerCurrentHSpeed").html(Math.floor(playerHSpeed * 10000000) / 10000000);
    $(".playerCurrentVSpeed").html(Math.floor(playerVSpeed * 10000000) / 10000000);
    console.log(keysPressed+" "+movementFriction+" "+playerHSpeed+" "+playerVSpeed+" "+playerAcc+" "+playerAcc);
}