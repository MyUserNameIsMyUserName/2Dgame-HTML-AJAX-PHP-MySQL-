<?php
    session_start();
    include 'db_config.php';


?>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
<script src="assets/js/start.js"></script>
<link rel="stylesheet" type="text/css" href="assets/css/gameSpace.css">



<div class="gameSpace">
    <div class="player" id='<?php echo $_SESSION['username']; ?>' style='background:<?php echo $_SESSION['usercolor'];?>;'><p><?php echo $_SESSION['username']; ?></p></div>
    
</div>
