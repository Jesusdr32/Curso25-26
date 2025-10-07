<?php
$errores = [];

if (empty($_POST['nombre']) || strlen($_POST['nombre']) < 10) {
    array_push($errores, "El nombre debe tener al menos 10 caracteres");
}

if (empty($_POST['apellidos']) || strlen($_POST['apellidos']) < 10) {
    array_push($errores, "Los apellidos deben tener al menos 10 caracteres");
}

$edad = filter_var($_POST['edad'], FILTER_VALIDATE_INT, ['options' => ['min_range' => 18, 'max_range' => 70]]);

if ($edad === false) {
    array_push($errores, "La edad debe estar entre 18 y 70");
}

if ($_FILES['documentacion']['error'] !== UPLOAD_ERR_OK) {
    array_push($errores, "error al subir el fichero");
} else {
    $file = $_FILES['documentacion'];

    if ($file['type'] !== 'application/pdf') {
        array_push($errores, "El archivo debe ser un PDF");
    }

    if ($file['size'] > 2 * 1024) {
        array_push($errores, "El archivo no puede superar los 2MB");
    }
}

if (!empty($errores)) {
    echo "<h2>Errores encontrados:</h2><ul>";
    foreach ($errores as $error) {
        echo "<li>$error</li>";
    }
    echo "</ul><button onclick='history.back()'>Volver</button>";
} else {
    $destino = './ficheros' . basename($_FILES['documentacion']['name']);
    move_uploaded_file($_FILES['documentacion']['tmp_name'], $destino);

    echo "<h2>Datos recibidos:</h2><ul>";
    echo "<li>Nombre: {$_POST['nombre']}</li>
            <li>Apellidos: {$_POST['apellidos']}</li>
            <li>Edad: {$edad}</li></ul>";
    echo "<a href='{$destino}' download>Descargar documento</a>";
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Procesar Index</title>
</head>

<body>

</body>

</html>