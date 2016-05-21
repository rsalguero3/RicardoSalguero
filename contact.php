<?php 
if ($_POST) {
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
//$subject = $_POST['subject'];
$subject = 'Message from Portofolio contact form';
$formcontent = "From: ". $name ."\n Message: ".$message ;
$recipient = "rsalguero3@yahoo.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "<h1> Thank You! Your Message has been sent</h1>";
}
else {
die('There was an error processing your message, please try again later');
}
?>