<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ecommerce";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * from brands";
$result = $conn->query($sql);


 while($row = mysqli_fetch_assoc($result))
{   
foreach($row as $key => $value)
{    $arr[$key] = $value; }

$main_arr[] = $arr;
}
 $json=json_encode($main_arr); 
 echo $json;
$conn->close();
?>