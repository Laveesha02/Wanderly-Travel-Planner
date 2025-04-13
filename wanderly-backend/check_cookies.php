<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

if (isset($_COOKIE["lastVisit"])) {
    echo json_encode(["lastVisit" => $_COOKIE["lastVisit"]]);
} else {
    echo json_encode(["lastVisit" => null]);
}
?>
