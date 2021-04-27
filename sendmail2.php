<?php

try {
    $number = $_POST['number'];
    $name = $_POST['name'];
    $date = $_POST['date'];

    if (isset($number) && isset($name) && isset($date)) {
        $message = "Заказ с сайта travel.com: номер [$number], имя [$name], дата [$date]";
        $message = wordwrap($message, 70, "\r\n");

        $isSent = mail('monosow.alex@gmail.com', 'Новая заказ', $message);
        if ($isSent) {
            header('Location: thanks.html');
        } else {
            header('Location: thanks.html');
        }
    }
} catch (Exception $exception) {
    header('Location: thanks.html');
}
