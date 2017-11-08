<?php
    header('Content-type: application/json');
    $status = array(
        'status'=>'success',
        'message'=>'Thank you! One of our agents will contact you soon.'
    );

    $debug_log = "./debugginglog.txt";
    $currContent = file_get_contents($debug_log);
    file_put_contents($debug_log, "Trying to send email ... \n");

    $subject = 'Registration Form';
    $fname = @trim(stripslashes($_POST['fname']));
    $lname = @trim(stripslashes($_POST['lname']));
    $email = @trim(stripslashes($_POST['email']));
    $cemail = @trim(stripslashes($_POST['cemail']));
    $password = @trim(stripslashes($_POST['password']));
    $cpassword = @trim(stripslashes($_POST['cpassword']));
    $country = @trim(stripslashes($_POST['country']));
    $number = @trim(stripslashes($_POST['phone']));
    $area = @trim(stripslashes($_POST['area']));
    $details = @trim(stripslashes($_POST['details']));
    $nameoncard = @trim(stripslashes($_POST['nameoncard']));
    $ccnumber = @trim(stripslashes($_POST['ccnumber']));
    $expirymonth = @trim(stripslashes($_POST['expiry-month']));
    $expiryyear = @trim(stripslashes($_POST['expiry-year']));
    $ccv = @trim(stripslashes($_POST['ccv']));
    $services = @trim(stripslashes(implode(', ', $_POST['services'])));
    $plan = @trim(stripslashes(implode(', ', $_POST['plan'])));
    $agreeTerms = @trim(stripslashes(implode(', ', $_POST['agreeTerms'])));

    $email_from = $email;
    $email_to = 'info@drsitedesign.com'; //replace with your email

    $body =
        'Name: ' . $fname . "\n\n" .
        'Last Name: ' . $lname . "\n\n" .
        'Email: ' . $email . "\n\n" .
        'Confirm Email: ' . $cemail . "\n\n" .
        'Password: ' . $password . "\n\n" .
        'Confirm Pass: ' . $cpassword . "\n\n" .
        'Country: ' . $country . "\n\n" .
        'Number: ' . $number . "\n\n" .
        'Field: ' . $area . "\n\n" .
        'Details: ' . $details . "\n\n" .
        'Name on card: ' . $nameoncard . "\n\n" .
        'Card number: ' . $ccnumber . "\n\n" .
        'Expiration Date: ' . $expirymonth . "/" . $expiryyear . "\n\n" .
        'Security code: ' . $ccv . "\n\n" .
        'Services: ' . $services . "\n\n" .
        'Agree Terms: ' . $agreeTerms . "\n\n" .
        'Plan: ' . $plan . "\n\n";

    $success = @mail($email_to, $subject, $body, 'From: <'.$email_from.'>');

    $subjectEmailFrom = $email_to;
    @mail($email_from, $subjectEmailFrom, 'Thank you! One of our agents will contact you soon.', 'From: <'.$email_to.'>');

    $currContent = file_get_contents($debug_log);
    file_put_contents($debug_log, "Response ..." . $success . "\n");

    echo json_encode($status);

die;
?>
