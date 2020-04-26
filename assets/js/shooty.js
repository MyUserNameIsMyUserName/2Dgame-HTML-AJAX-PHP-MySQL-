$(document).ready(function(){ 

  // returns true iff the line from (a,b)->(c,d) intersects with (p,q)->(r,s)
function intersects(a,b,c,d,p,q,r,s) {
  var det, gamma, lambda;
  det = (c - a) * (s - q) - (r - p) * (d - b);
  if (det === 0) {
    return false;
  } else {
    lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
    gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
    return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
  }
};


$(document).click(function(){
  $enemy = $('.enemy');
  var shootyStatus;
  var playerWeaponA = $(".weaponA").offset();
  var playerWeaponB = $(".weaponB").offset();
  whoIsShot = "Null";
  var dist = "Null";

  $( ".enemy" ).each(function( index ) {
      //console.log( index + ": " + $( this ).text() );
      var enemyA = $(this).children(".enemyA").offset();
      var enemyB = $(this).children(".enemyB").offset();
      var enemyC = $(this).children(".enemyC").offset();
      var enemyD = $(this).children(".enemyD").offset();
  
  var intersectStatus = intersects(playerWeaponA.top,playerWeaponA.left,playerWeaponB.top,playerWeaponB.left,enemyA.top,enemyA.left,enemyB.top,enemyB.left);
  var intersectStatus2 = intersects(playerWeaponA.top,playerWeaponA.left,playerWeaponB.top,playerWeaponB.left,enemyB.top,enemyB.left,enemyC.top,enemyC.left);
  var intersectStatus3 = intersects(playerWeaponA.top,playerWeaponA.left,playerWeaponB.top,playerWeaponB.left,enemyC.top,enemyC.left,enemyD.top,enemyD.left);
  var intersectStatus4 = intersects(playerWeaponA.top,playerWeaponA.left,playerWeaponB.top,playerWeaponB.left,enemyD.top,enemyD.left,enemyA.top,enemyA.left);
  if (intersectStatus || intersectStatus2 || intersectStatus3 || intersectStatus4) {
      
      whoIsShotHeler = $(this).attr('id');
      var help1 = ($('.player').offset().left -  $('#'+whoIsShotHeler).offset().left);
      var help2 = ($('.player').offset().top -   $('#'+whoIsShotHeler).offset().top);
      distHelper = Math.sqrt(Math.pow( help1 , 2)+ Math.pow( help2 , 2)) ;
      //alert(whoIsShot);
      if (whoIsShot == "Null") {
        whoIsShot = whoIsShotHeler;
        dist = distHelper;
        $('.weapon').css('background', 'red');
      };
      if (distHelper <= dist) {
        whoIsShot = whoIsShotHeler;
        dist = distHelper;
        $('.weapon').css('background', 'red');
      };
  };
  
    });

    $( ".mapObject" ).each(function( index ) {
        //console.log( index + ": " + $( this ).text() );
        var objectA = $(this).children(".objectA").offset();
        var objectB = $(this).children(".objectB").offset();
        var objectC = $(this).children(".objectC").offset();
        var objectD = $(this).children(".objectD").offset();
    
    var intersectStatus = intersects(playerWeaponA.top,playerWeaponA.left,playerWeaponB.top,playerWeaponB.left,objectA.top,objectA.left,objectB.top,objectB.left);
    var intersectStatus2 = intersects(playerWeaponA.top,playerWeaponA.left,playerWeaponB.top,playerWeaponB.left,objectB.top,objectB.left,objectC.top,objectC.left);
    var intersectStatus3 = intersects(playerWeaponA.top,playerWeaponA.left,playerWeaponB.top,playerWeaponB.left,objectC.top,objectC.left,objectD.top,objectD.left);
    var intersectStatus4 = intersects(playerWeaponA.top,playerWeaponA.left,playerWeaponB.top,playerWeaponB.left,objectD.top,objectD.left,objectA.top,objectA.left);
    if (intersectStatus || intersectStatus2 || intersectStatus3 || intersectStatus4) {
        
        whoIsShotHeler = $(this).attr('id');
        var help1 = ($('.player').offset().left -  $('#'+whoIsShotHeler).offset().left);
        var help2 = ($('.player').offset().top -   $('#'+whoIsShotHeler).offset().top);
        distHelper = Math.sqrt(Math.pow( help1 , 2)+ Math.pow( help2 , 2)) ;
        //alert(whoIsShot);
        if (whoIsShot == "Null") {
          whoIsShot = whoIsShotHeler;
          dist = distHelper;
          $('.weapon').css('background', 'white');
        };
        if (distHelper < dist) {
          whoIsShot = whoIsShotHeler;
          dist = distHelper;
          $('.weapon').css('background', 'white');
        };
    };
    
      });


    if (whoIsShot !== "Null") {
      $('.weapon').css('height', dist);
      $('.weapon').css('top', (-dist));
      $('.weapon').css('z-index', '2000');
      whoIsShot = "Null";
    } else {
      $('.weapon').css('height', 2000);
      $('.weapon').css('top', -2000);
      $('.weapon').css('z-index', '2000');
      $('.weapon').css('background', 'white');
    };



    setTimeout(function(){
      $('.weapon').css('background', 'transparent');
    }, 50);
    
});


});