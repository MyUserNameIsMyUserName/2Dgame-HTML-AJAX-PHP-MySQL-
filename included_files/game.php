<?php
    session_start();
    include 'db_config.php'; 
    include 'options.php';
?>


<script src="assets/js/3rdParty/jquery-3.4.1.js"></script>
<script src="assets/js/user-input.js"></script>
<script src="assets/js/app.js"></script>
<script src="assets/js/start.js"></script>
<script src="assets/js/shooty.js"></script>
<link rel="stylesheet" type="text/css" href="assets/css/gameSpace.css">


<div class="gameCam">
    <div class="camTopMove"></div>
    <div class="camRightMove"></div>
    <div class="camBottomMove"></div>
    <div class="camLeftMove"></div>
    <div class="gameSpace" style="background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2f3b1949380563.560858d211117.png);">
        <div class="player" id='<?php echo $_SESSION['username']; ?>' style='font-size: bold; background:<?php echo $_SESSION['usercolor'];?>;'><p><?php echo $_SESSION['username']; ?></p><div class="weapon"><div class="weaponA"></div><div class="weaponB"></div></div></div>
        <div class="mapObject" id="mapObject1"  style="position: absolute; background: rgba(255,255,255,0.15);" data-height="325" data-width="6" data-topposition="15" data-leftposition="15"><div class="objectA"></div><div class="objectB"></div><div class="objectC"></div><div class="objectD"></div></div>
        <div class="mapObject" id="mapObject2"  style="position: absolute; background: rgba(255,255,255,0.15);" data-width="545" data-height="6" data-topposition="15" data-leftposition="15"><div class="objectA"></div><div class="objectB"></div><div class="objectC"></div><div class="objectD"></div></div>
        <div class="mapObject" id="mapObject3"  style="position: absolute; background: rgba(255,255,255,0.15);" data-width="29" data-height="6" data-topposition="45" data-leftposition="52"><div class="objectA"></div><div class="objectB"></div><div class="objectC"></div><div class="objectD"></div></div>
        <div class="mapObject" id="mapObject4"  style="position: absolute; background: rgba(255,255,255,0.15);" data-width="29" data-height="6" data-topposition="45" data-leftposition="81"><div class="objectA"></div><div class="objectB"></div><div class="objectC"></div><div class="objectD"></div></div>
        <div class="mapObject" id="mapObject5"  style="position: absolute; background: rgba(255,255,255,0.15);" data-width="29" data-height="6" data-topposition="45" data-leftposition="110"><div class="objectA"></div><div class="objectB"></div><div class="objectC"></div><div class="objectD"></div></div>
        <div class="mapObject" id="mapObject6"  style="position: absolute; background: rgba(255,255,255,0.15);" data-width="29" data-height="6" data-topposition="45" data-leftposition="139"><div class="objectA"></div><div class="objectB"></div><div class="objectC"></div><div class="objectD"></div></div>
        <div class="mapObject" id="mapObject7"  style="position: absolute; background: rgba(255,255,255,0.15);" data-width="6" data-height="70" data-topposition="50" data-leftposition="52"><div class="objectA"></div><div class="objectB"></div><div class="objectC"></div><div class="objectD"></div></div>
        <div class="mapObject" id="mapObject8"  style="position: absolute; background: rgba(255,255,255,0.15);" data-width="545" data-height="6" data-topposition="15" data-leftposition="15"><div class="objectA"></div><div class="objectB"></div><div class="objectC"></div><div class="objectD"></div></div>
        <div class="mapObject" id="mapObject9"  style="position: absolute; background: rgba(255,255,255,0.15);" data-width="545" data-height="6" data-topposition="15" data-leftposition="15"><div class="objectA"></div><div class="objectB"></div><div class="objectC"></div><div class="objectD"></div></div>
    </div>
</div>


<link rel="stylesheet" type="text/css" href="assets/css/main.css">