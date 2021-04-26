<?php

use PHPMailer\PHPMailer\PHPMailer;

require_once "vendor/autoload.php";

try {
    $number = $_POST['number'];
    $name = $_POST['name'];

    if (isset($number) && isset($name)) {
        $mail = new PHPMailer(true);
        $mail->SMTPOptions = ['ssl' => ['verify_peer_name' => false]];
        $mail->Host = gethostbyname("smtp.gmail.com");

        $mail->FromName = "Авто-оповещение";
        $mail->From = "valerymaslatch@yandex.ru";
        $mail->Password = 'yyuu324711';

        $mail->Port = 465;
        $mail->CharSet = "UTF-8";
        $mail->addAddress("Fur1ous@ya.ru");
        $mail->isHTML(true);
        $mail->Subject = "Новая заявка";
        $mail->Body = "Заказ с сайта travel.com: номер [$number], имя [$name]";
        $mail->send();
        header('Location: thanks.html');
    }
} catch (Exception $e) {
    header('Location: thanks.html');
}
