<?php
    $name = $_GET['username'];
    $email = $_GET['email'];
    
    $comment = $_GET['comment'];

    $mail_message = '
    <html>
    <head>
        <title>Заявка на просчет</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>E-mail:' . $email . '</li>
            <li>Комментарий к заказу: ' . $comment . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: admin@toon.guru\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('fortoon@gmail.com', 'Заказ', $mail_message, $headers);

    $data = [];
    
    if ($mail) {
        $data['status'] = "Сообщение отправлено";
        header("Location: /"); exit;
    }else{
        $data['status'] = "Произошла ошибка. Сообщение не отправлено!";
    }

    echo json_encode($data);

?>