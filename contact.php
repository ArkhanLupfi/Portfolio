<?php
if (isset($_POST["submit"])) {
    $username = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    $to = "arkhanlupfi6@gmail.com";
    $subject = $message;

    $message = "Name: {$username} Email: {$email} Phone: {$phone}  Message: " . $message;

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: arkhanlupfi6@gmail.com';

    $mail = mail($to, $subject, $message, $headers);

    if ($mail) {
        echo "<script>alert('Mail Send.');</script>";
    } else {
        echo "<script>alert('Mail Not Send.');</script>";
    }
}
?>