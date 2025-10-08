<?php
require 'session-start.php';
require 'users.php';

// Si no hay sesión, redirige automáticamente a login.php
if (!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit;
}

$user = $_SESSION['user'];
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>App</title>
</head>

<body>
    <p>Hola <?= $usersDetails[$user] ?>.</p>
    <?php if (isset($_GET['msg'])): ?>
        <p class="success"><?= htmlspecialchars($_GET['msg']) ?></p>
    <?php endif; ?>
    <p><a href="logout.php">Cerrar sesión</a></p>
</body>

</html>