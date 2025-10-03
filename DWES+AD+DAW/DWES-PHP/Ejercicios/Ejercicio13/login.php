<?php
require 'session-start.php';
require 'users.php';

if (isset($_SESSION['user'])) {
    echo "Ya estás identificado como " . $_SESSION['user'];
    exit;
}

$message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = trim($_POST['usuario'] ?? '');
    $pass = $_POST['password'] ?? '';

    if ($user === '' || $pass === '') {
        $message = "Debes completar ambos campos";
    } elseif (!isset($usersPasswords[$user])) {
        $message = "El usuario no existe";
    } elseif ($usersPasswords[$user] !== $pass) {
        $message = "Contraseña incorrecta";
    } else {
        $_SESSION['user'] = $user;
        header("Location: app.php?msg=Bienvenido, " . $usersDetails[$user]);
        exit;
    }
}

if (isset($_GET['msg'])) {
    $message = htmlspecialchars($_GET['msg']);
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 20px;
        }

        form {
            max-width: 300 px;
            margin: auto;
        }

        label {
            display: block;
            margin-top: 10 px;
        }

        input {
            width: 100%;
            padding: 8 px;
            box-sizing: border-box;
        }

        button {
            margin-top: 15 px;
            padding: 10 px;
            width: 100%;
        }

        .message {
            margin: 15 px auto;
            max-width: 300px;
            color: red;
            font-weight: bold;
        }

        .success {
            color: green;
        }
    </style>
</head>

<body>
    <?php if ($message): ?>
        <div class="message" <?= strpos($message, 'Bienvenido') === 0 || strpos($message, 'Ya estás identificado') === 0 ? 'success' : '' ?>>
            <?= $message ?>
        </div>
    <?php endif ?>
    <form action="login.php" method="post" novalidate>
        <label for="usuario">Usuario: </label>
        <input type="text" id="usuario" name="usuario" required autofocus />
        <label for="password">Contraseña: </label>
        <input type="password" name="password" id="password" required />
        <button type="submit">Iniciar sesión</button>
    </form>
</body>

</html>