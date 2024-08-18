<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Validate inputs
  $name = htmlspecialchars($_POST['name']);
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $message = htmlspecialchars($_POST['message']);

  // Example validation (you may want to add more robust validation)
  if (empty($name) || empty($email) || empty($message)) {
    die("Please fill out all fields.");
  }

  // Send email (example using PHP's mail function)
  $to = "devhawksutm@gmail.com";
  $subject = "New message from $name";
  $body = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Oops! Something went wrong.";
  }
}
?>
