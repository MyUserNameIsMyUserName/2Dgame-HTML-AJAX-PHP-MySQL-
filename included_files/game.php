<?php
    session_start();
    include 'db_config.php';


?>

<script src="assets/js/jquery-3.3.1.js"></script>
<script src="assets/js/start.js"></script>
<script src="assets/js/shooty.js"></script>
<link rel="stylesheet" type="text/css" href="assets/css/gameSpace.css">



<div class="gameSpace">
    <div class="player" id='<?php echo $_SESSION['username']; ?>' style='font-size: bold; background:<?php echo $_SESSION['usercolor'];?>;'><p><?php echo $_SESSION['username']; ?></p><div class="weapon"><div class="weaponA"></div><div class="weaponB"></div></div></div>
    
</div>
