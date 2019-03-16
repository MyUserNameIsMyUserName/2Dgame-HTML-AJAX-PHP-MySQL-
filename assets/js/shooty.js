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
      $('.weapon').css('background', 'white');
    var shootyStatus;
    var playerWeaponA = $(".weaponA").offset();
    var playerWeaponB = $(".weaponB").offset();
    var whoIsShot;

    $( ".enemy" ).each(function( index ) {
        console.log( index + ": " + $( this ).text() );
        var enemyA = $(this).children(".enemyA").offset();
        var enemyB = $(this).children(".enemyB").offset();
        var enemyC = $(this).children(".enemyC").offset();
        var enemyD = $(this).children(".enemyD").offset();
    
    var intersectStatus = intersects(playerWeaponA.top,playerWeaponA.left,playerWeaponB.top,playerWeaponB.left,enemyA.top,enemyA.left,enemyB.top,enemyB.left);
    var intersectStatus2 = intersects(playerWeaponA.top,playerWeaponA.left,playerWeaponB.top,playerWeaponB.left,enemyB.top,enemyB.left,enemyC.top,enemyC.left);
    var intersectStatus3 = intersects(playerWeaponA.top,playerWeaponA.left,playerWeaponB.top,playerWeaponB.left,enemyC.top,enemyC.left,enemyD.top,enemyD.left);
    var intersectStatus4 = intersects(playerWeaponA.top,playerWeaponA.left,playerWeaponB.top,playerWeaponB.left,enemyD.top,enemyD.left,enemyA.top,enemyA.left);
    if (intersectStatus || intersectStatus2 || intersectStatus3 || intersectStatus4) {
        
        whoIsShot = $(this).attr('id');
        alert(whoIsShot);

    };
      });
      setTimeout(function(){
        $('.weapon').css('background', 'transparent');
      }, 50);
      
  }
  );


});