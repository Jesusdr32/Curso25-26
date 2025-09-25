<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 06</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>

<body>
    <h1>Ejercicio 6 - Tabla de multiplicar</h1>
    <?php
    $min = $_POST['min'] ?? '';
    $max = $_POST['max'] ?? '';
    if (filter_var($min, FILTER_VALIDATE_INT) && filter_var($max, FILTER_VALIDATE_INT)) {
        echo '<p>Primer valor: ' . $_POST['min'] . '</p>';
        echo '<p>Segundo valor: ' . $_POST['max'] . '</p>';
        if ($_POST['min'] > $_POST['max']) {
            echo '<p>Cambiamos de orden los valores ya que están en el orden contrario</p>';
            $min = $_POST['max'];
            $max = $_POST['min'];
        } elseif ($_POST['min'] == $_POST['max']) {
            echo '<p>Los valores son iguales, vamos a restarle uno para tener el valor mínimo y le vamos a sumar uno para tener el valor máximo</p>';
            $min = $_POST['min'] - 1;
            $max = $_POST['max'] + 1;
        } else {
            $min = $_POST['min'];
            $max = $_POST['max'];
        }
    ?>
        <table class="table table-striped-columns table-dark">
            <tbody>
                <tr>
                    <td></td>
                    <?php

                    for ($numero = $min; $numero <= $max; $numero++) {
                        echo "<td> {$numero} </td>";
                    }
                    ?>
                </tr>
            <?php
            for ($otroNumero = 0; $otroNumero <= 10; $otroNumero++) {
                echo "<tr><td> {$otroNumero} </td>";
                for ($numero = $min; $numero <= $max; $numero++) {
                    $producto = $numero * $otroNumero;
                    echo "<td> {$producto}";
                }
                echo "</tr>";
            }
        } else {
            echo '<p>Los parametros indicados son o bien algún caracter distinto a un número entero o están vacios</p>';
            echo '<p>Primer valor definido como ' . $min . '</p>';
            echo '<p>Segundo valor definido como ' . $max . '</p>';
        }
            ?>
            </tbody>
        </table>
</body>

</html>