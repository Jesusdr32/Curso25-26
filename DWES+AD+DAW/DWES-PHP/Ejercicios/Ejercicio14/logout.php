<?php
require 'session-start.php';
require 'users.php';

// Si no hay sesión, redirige automáticamente a login.php
if (!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit;
}

$user = $_SESSION['user'];
session_unset();
session_destroy();
header("Location: login.php?msg=" . urlencode("Hasta la vista " . $usersDetails[$user]));
exit;
