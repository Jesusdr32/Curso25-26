<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 03</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>

<body>
    <h1>Ejercicio 3 - Tabla de multiplicar</h1>
    <?php $a = 2 ?>
    <?php $b = 4 ?>
    <table class="table table-striped-columns table-dark">
        <tbody>
            <tr>
                <td></td>
                <?php
                for ($numero = $a; $numero <= $b; $numero++) {
                    echo "<td> {$numero} </td>";
                }
                ?>
            </tr>
            <?php
            for ($otroNumero = 0; $otroNumero <= 10; $otroNumero++) {
                echo "<tr><td> {$otroNumero} </td>";
                for ($numero = $a; $numero <= $b; $numero++) {
                    $producto = $numero * $otroNumero;
                    echo "<td> {$producto}";
                }
                echo "</tr>";
            }
            ?>
        </tbody>
    </table>
</body>

</html>