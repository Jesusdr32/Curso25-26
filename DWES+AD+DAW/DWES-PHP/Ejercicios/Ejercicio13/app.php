<?php
include 'session-start.php';
include 'users.php';

if (!isset($_SESSION['username'])) {
    echo "<p>No has iniciado sesión. <a href='login.php'>Inicia sesión aqui</a></p>";
    exit;
}

$username = $_SESSION['username'];

echo "<p>Hola " . $usersDetails[$username] . ".</p>";

echo "<p><a href='logout.php'>Cerrar sesión aqui</a></p>";
