<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplicación</title>
</head>

<body>
    <h1>Usuario logado: <?= $_SESSION['username'] ?></h1>
</body>

</html>