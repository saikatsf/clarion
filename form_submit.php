<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once "vendor/autoload.php";

$mail1 = new PHPMailer(true);

//Enable SMTP debugging.
$mail1->isSMTP();                        
$mail1->Host = "smtp.gmail.com";
$mail1->SMTPAuth = true;   
$mail1->Username = "rapidcash250@gmail.com";                 
$mail1->Password = "Rapidcash@2022";
$mail1->SMTPSecure = "tls";
$mail1->Port = 587;                                   

$mail1->From = "rapidcash250@gmail.com";
$mail1->FromName = "Clarion";

$mail1->addAddress("rapidcash250@gmail.com");

$mail1->isHTML(true);
$mail1->Subject = "Form Submissiion";
$mail1->Body = "Name : ".$_POST['name']."<br> Email : ".$_POST['email']."<br> Mobile Number : ".$_POST['mobile']."<br> Date : ".$_POST['date'];

try {
    $mail1->send();
    
    $mail2 = new PHPMailer(true);

    //Enable SMTP debugging.
    $mail2->isSMTP();                        
    $mail2->Host = "smtp.gmail.com";
    $mail2->SMTPAuth = true;   
    $mail2->Username = "rapidcash250@gmail.com";                 
    $mail2->Password = "Rapidcash@2022";
    $mail2->SMTPSecure = "tls";
    $mail2->Port = 587;                                   

    $mail2->From = "rapidcash250@gmail.com";
    $mail2->FromName = "Clarion";

    $mail2->addAddress($_POST['email']);


    $mail2->Subject = "Form Submissiion";
    $mail2->Body = "Your Form Has been Submitted";

    try {
        $mail2->send();
        header('Location: form_submitted.html');
        die();
    } catch (Exception $e) {
        echo "Mailer Error: " . $mail2->ErrorInfo;
    }
} catch (Exception $e) {
    echo "Mailer Error: " . $mail1->ErrorInfo;
}