<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): 
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;

    case ("POST"): 
        header("Access-Control-Allow-Origin: *");
        
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $email = $params->email ?? '';
        $name = $params->name ?? '';
        $messageText = $params->message ?? '';

        $recipient = 'mail@janaschuelerhub.com';  
        $subject = "Contact From <$email>";
        $message = "From: " . htmlspecialchars($name) . "<br><br>" . nl2br(htmlspecialchars($messageText));

        $headers = [];
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = 'From: mail@janaschuelerhub.com';

        $success = mail($recipient, $subject, $message, implode("\r\n", $headers));

        if ($success) {
            http_response_code(200);
            echo json_encode(["message" => "Mail sent successfully"]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Mail sending failed"]);
        }
        break;

    default: 
        header("Allow: POST", true, 405);
        exit;
}
