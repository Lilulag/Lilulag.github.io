<?php

// print_r($_REQUEST);

$name = $_POST['name'];
$phone = $_POST['phone'];
$street = $_POST['street'];
$house = $_POST['house'];
$houseblock = $_POST['houseblock'];
$apartment = $_POST['apartment'];
$floor = $_POST['floor'];
$title = "Принят заказ от $name";
$message = "Заказчик: $name, телефон: $phone, адрес: ул.$street д.$house к.$houseblock кв.$apartment этаж $floor";


$resultSendMail = mail("lilula739@gmail.com", $title, $message);

echo json_encode(array(
	"requestStatus" => $resultSendMail
	)
)
	
?>