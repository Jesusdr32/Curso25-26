<?php
include 'session-start.php';
include 'users.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Procesar login
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    if (!isset($usersPasswords[$username])) {
        $error = "El usuario no existe.";
    } elseif ($usersPasswords[$username] !== $password) {
        $error = "Contraseña incorrecta.";
    } else {
        // Usuario correcto: iniciar sesión
        $_SESSION['username'] = $username;
        $welcome = "¡Bienvenido, " . $usersDetails[$username] . "!";
    }
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>

<body>
    <?php
    if (isset($_SESSION['username'])) {
        echo "<p>Ya has iniciado sesión como " . $usersDetails[$_SESSION['username']] . ".</p>";
    } else {
        if (isset($error)) {
            echo "<p style='color:red;'>$error</p>";
        } elseif (isset($welcome)) {
            echo "<p style='color:green;'>$welcome</p>";
            echo '<p><a href="app.php">Ir a la aplicación</a></p>';
        }

        if (!isset($welcome)) {
            // Formulario de login
            echo '<form method="post" action="login.php">
                <label>Usuario: <input type="text" name="username" required></label><br>
                <label>Contraseña: <input type="password" name="password" required></label><br>
                <button type="submit">Iniciar sesión</button>
              </form>';
        }
    }
    ?>
</body>

</html>