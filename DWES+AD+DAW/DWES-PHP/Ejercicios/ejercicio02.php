<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 02</title>
    <style>
        thead,
        tbody,
        tr,
        th,
        td {
            border: 1px black solid;
            border-collapse: collapse;
        }
    </style>
</head>

<body>
    <h1>Ejercicio 2 - Tabla de multiplicar como tabla de una sola columna</h1>
    <?= $numero = 1 ?>
    <table>
        <thead>
            <tr>
                <th>Generado con echo en un for</th>
            </tr>
        </thead>
        <tbody>
            <?php
            for ($otroNumero = 0; $otroNumero <= 10; $otroNumero++) {
                $producto = $numero * $otroNumero;
                echo "<tr><td>{$numero} * {$otroNumero} = {$producto}</td></tr>";
            }
            ?>
        </tbody>
    </table>
</body>

</html>