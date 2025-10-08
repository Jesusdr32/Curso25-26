<?php
include 'session-start.php';
include 'users.php';

if (!isset($_SESSION['username'])) {
    echo "<p>No puedes cerrar sesión porque no has iniciado sesión</p>";
    echo "<p><a href='login.php'>Inicia sesión aqui</a></p>";
    exit;
}

$username = $_SESSION['username'];
session_unset();
session_destroy();

echo "<p>Hasta la vista " . $usersDetails[$username] . ".</p>";

echo "<p><a href='login.php'>Volver a iniciar sesión aqui</a></p>";
