<?php

try {
    $number = $_POST['number'];
    $name = $_POST['name'];

    if (isset($number) && isset($name)) {
        $message = "Заказ с сайта travel.com: номер [$number], имя [$name]";
        $message = wordwrap($message, 70, "\r\n");

        $isSent = mail('monosow.alex@yandex.ru', 'Новая заказ', $message);
        if ($isSent) {
            header('Location: thanks.html');
        } else {
            header('Location: thanks.html');
        }
    }
} catch (Exception $exception) {
    header('Location: thanks.html');
}
