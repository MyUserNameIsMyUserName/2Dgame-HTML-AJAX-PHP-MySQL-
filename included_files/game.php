<?php
    session_start();
    include 'db_config.php'; 
    include 'options.php';
?>


<script src="assets/js/jquery-3.4.1.js"></script>
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
    <div class="gameSpace">
        <div class="player" id='<?php echo $_SESSION['username']; ?>' style='font-size: bold; background:<?php echo $_SESSION['usercolor'];?>;'><p><?php echo $_SESSION['username']; ?></p><div class="weapon"><div class="weaponA"></div><div class="weaponB"></div></div></div>
        <div id="testingDot" style="width: 2px; height: 2px; background:red; position:absolute; z-index: 900000;"></div>
    </div>
</div>


<link rel="stylesheet" type="text/css" href="assets/css/main.css">