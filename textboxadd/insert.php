<?php 
 $postdata = file_get_contents("php://input");
 $request = json_decode($postdata);
print_r($request);

?>