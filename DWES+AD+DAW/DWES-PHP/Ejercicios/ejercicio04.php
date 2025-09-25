<!DOCTYPE html>
<html lang="es">
<?php
$month = 9;
$year = 2025;
$firstDayOfMonth = DateTimeImmutable::createFromFormat("Y-m-d", "{$year}-{$month}-1");
$numberOfDaysInMonth = $firstDayOfMonth->format("t");
$startWeekDay = $firstDayOfMonth->format("w");
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 04</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>

<body>
    <h1>Ejercicio 4 - Calendario de <?= "{$month}/{$year}" ?></h1>
    <table class="table table-striped-columns table-dark">
        <thead>
            <tr>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miercoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
                <th>Sabado</th>
                <th>Domingo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <?php
                $currentDay = 1;
                $daysOfCurrentWeek = 0;

                while ($daysOfCurrentWeek < $startWeekDay - 1) {
                    echo "<td></td>";
                    $daysOfCurrentWeek++;
                }

                while ($currentDay <= $numberOfDaysInMonth) {
                    echo "<td>{$currentDay}</td>";
                    $currentDay++;
                    $daysOfCurrentWeek++;
                    if ($daysOfCurrentWeek >= 7) {
                        echo "</tr><tr>";
                        $daysOfCurrentWeek = 0;
                    }
                }
                if ($daysOfCurrentWeek > 0) {
                    while ($daysOfCurrentWeek++ < 7) {
                        echo "<td></td>";
                    }
                }
                ?>
            </tr>
        </tbody>
    </table>
</body>

</html>