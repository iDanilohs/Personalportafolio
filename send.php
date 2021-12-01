<?php
$name = $_POST['name'];
$mail = $_POST['gmail'];
$message = $_POST['messenge'];

echo $name. "ha dicho.<br/>".$mensaje. "Her or his mail is: ".$mail;

if(mail('daniloherrera1702@gmail.com', 'Correo de portafolio', $message)){
    echo "Mail sent successfully";
}else{
    echo "could not be completed :(";
}
?>