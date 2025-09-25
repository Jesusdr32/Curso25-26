<!DOCTYPE html>
<html lang="es">
<?php
$tipoMasas = ['F' => 'fina', 'G' => 'gruesa', 'Q' => 'borde relleno de queso', 'SG' => 'sin gluten'];
$tamanios = ['S' => 'pequeña', 'M' => 'mediana', 'L' => 'grande', 'XL' => 'gigante'];
$pizzaBases = ['M' => 'margarita', 'BBQ' => 'barbacoa', '4Q' => 'cuatro quesos'];
$ingredientesAdicionales = ['IA-PI' => 'pimiento', 'IA-CE' => 'cebolla', 'IA-CP' => 'carne picada', 'IA-PL' => 'pollo', 'IA-BE' => 'berenjena', 'IA-XQ' => 'extra queso', 'IA-BBQ' => 'salsa barbacoa'];
$metodoPago = ['T' => 'tarjeta bancaria', 'B' => 'bizum', 'P' => 'paypal'];

$nombre = filter_input(INPUT_POST, 'nombre', FILTER_SANITIZE_SPECIAL_CHARS) ?? '';
$apellidos = filter_input(INPUT_POST, 'apellidos', FILTER_SANITIZE_SPECIAL_CHARS) ?? '';
$direccion = filter_input(INPUT_POST, 'direccion', FILTER_SANITIZE_SPECIAL_CHARS) ?? '';
$telefono = filter_input(INPUT_POST, 'telefono', FILTER_SANITIZE_SPECIAL_CHARS) ?? '';
$observaciones = filter_input(INPUT_POST, 'observaciones', FILTER_SANITIZE_SPECIAL_CHARS) ?? '';
$masa = $_POST['masa'];
$size = $_POST['size'];
$pizza_base = $_POST['pizza_base'] ?? '';
$ingredientes_adicionales = $_POST['ingredientes'] ?? [];
$pago = $_POST['pago'] ?? '';
$errores = [];

if (!array_key_exists($masa, $tipoMasas))
    array_push($errores, "La masa seleccionada no es correcta o no está seleccionada");

if (!array_key_exists($size, $tamanios))
    array_push($errores, "El tamaño seleccionado no es correcto o no está seleccionado");

if (!array_key_exists($pizza_base, $pizzaBases))
    array_push($errores, "La base de la pizza seleccionada no es correcta o no está seleccionada");

if (!array_key_exists($pago, $metodoPago))
    array_push($errores, "El método de pago seleccionado no es correcto o no hay ninguno seleccionado");

if (!preg_match("/[0-9]{9}/", $telefono))
    array_push($errores, "El número de telefono no está bien escrito");

if (empty($nombre))
    array_push($errores, "El nombre no está rellenado");

if (empty($apellidos))
    array_push($errores, "El apellido no está rellenado");

if (empty($direccion))
    array_push($errores, "La dirección no está rellenada");

foreach ($ingredientes_adicionales as $ingrediente) {
    if (!array_key_exists($ingrediente, $ingredientesAdicionales))
        array_push($errores, "El ingrediente {$ingrediente} está mal seleccionado");
}

if (!empty($errores)) {
    if (count($errores) > 1)
        echo "<p>El formulario ha sido mal rellenado por los siguientes motivos:</p>";
    elseif (count($errores) == 1)
        echo "<p>El formulario ha sido mal rellenado por el siguiente motivo</p>";
    echo "<ul>";
    foreach ($errores as $error) {

        echo "<li>{$error}</li>";
    }
    echo "</ul>";
} else {
    echo "<p>El formulario ha sido rellenado correctamente</p>";
    echo "<h1>Datos del pedido:</h1>";
    echo "<h2>Datos personales del cliente:</h2>";
    echo "<p><strong>Nombre</strong>: " . $nombre . ". <strong>Apellidos</strong>: " . $apellidos . "</p>";
    echo "<p><strong>Dirección</strong>: " . $direccion . "</p>";
    echo "<p><strong>Teléfono de contacto</strong>: " . $telefono . "</p>";
    if (!empty($observaciones)) {
        echo "<p><strong>Observaciones del cliente</strong>: " . $observaciones . "</p>";
    } else {
        echo "<p>No hay ninguna observacion por parte del cliente</p>";
    }
    echo "<p><strong>Método de pago</strong>: " . $metodoPago[$pago] . "</p>";
    echo "<h2>Datos de la pizza del pedido:</h2>";
    echo "<p>La masa de pizza seleccionada es " . $tipoMasas[$masa] . "</p>";
    echo "<p>El tamaño de la pizza seleccionada es " . $tamanios[$size] . "</p>";
    echo "<p>La base de la pizza seleccionada es " . $pizzaBases[$pizza_base] . "</p>";
    if (!empty($ingredientes_adicionales)) {
        echo "<p>Los ingredientes seleccionados son:</p>";
        echo "<ul>";
        foreach ($ingredientes_adicionales as $ingrediente) {
            echo "<li>" . $ingredientesAdicionales[$ingrediente] . "</li>";
        }
        echo "</ul>";
    } else {
        echo "<p>No hay ningún ingrediente adicional seleccionado";
    }
}
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 09</title>
</head>

<body>

</body>

</html>