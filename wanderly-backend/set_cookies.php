<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$expiry = time() + (365 * 24 * 60 * 60); // 1 year
setcookie("lastVisit", date("Y-m-d H:i:s"), $expiry, "/");
echo json_encode(["message" => "Cookie set successfully."]);
?>
