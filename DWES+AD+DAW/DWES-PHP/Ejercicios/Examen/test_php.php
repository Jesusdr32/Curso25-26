<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Test PHP Interactivo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f6f8fa;
            padding: 20px;
        }

        h1 {
            text-align: center;
            color: #333;
        }

        form {
            background: #fff;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            max-width: 800px;
            margin: 0 auto;
        }

        .pregunta {
            margin-bottom: 20px;
        }

        .pregunta h3 {
            margin-bottom: 8px;
        }

        input[type="submit"] {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: #0056b3;
        }

        .resultado {
            background: #e9ffe9;
            border: 1px solid #b2f5b2;
            padding: 15px;
            margin-top: 20px;
            border-radius: 8px;
        }
    </style>
</head>

<body>

    <h1>Test Interactivo de PHP</h1>

    <form method="post">
        <?php
        $preguntas = [
            1 => ["¿Cuál de las siguientes no es un tipo de dato escalar en PHP?", ["string", "integer", "array", "float"], "c"],
            2 => ["¿Qué variable superglobal contiene los datos enviados mediante el método GET?", ["\$_POST", "\$_REQUEST", "\$_GET", "\$_SERVER"], "c"],
            3 => ["¿Cuál de los siguientes operadores se utiliza para concatenar cadenas en PHP?", ["+", ".", "&", "->"], "b"],
            4 => ["¿Qué instrucción se usa para incluir el contenido de un archivo solo una vez?", ["include", "require", "include_once", "require_all"], "c"],
            5 => ["¿Qué devuelve la función isset()?", ["Devuelve true si una variable existe y no es null", "Devuelve el valor de la variable", "Devuelve el tipo de dato", "Devuelve false siempre"], "a"],
            6 => ["¿Cuál es la forma correcta de declarar una función en PHP?", ["def miFuncion() {}", "function miFuncion() {}", "func miFuncion() {}", "declare miFuncion() {}"], "b"],
            7 => ["¿Qué superglobal se utiliza para acceder a las variables de sesión?", ["\$_SESSION", "\$_COOKIE", "\$_SERVER", "\$GLOBALS"], "a"],
            8 => ["¿Qué función se utiliza para eliminar las etiquetas HTML de una cadena?", ["strip_tags()", "htmlspecialchars()", "trim()", "filter_input()"], "a"],
            9 => ["¿Qué estructura de control permite recorrer los elementos de un array asociativo fácilmente?", ["for", "foreach", "while", "switch"], "b"],
            10 => ["¿Qué hace la función session_start()?", ["Cierra la sesión actual", "Inicia una nueva sesión o reanuda una existente", "Elimina las cookies", "Guarda los datos de sesión en un archivo"], "b"],
            11 => ["¿Qué operador se utiliza para comprobar si dos variables tienen el mismo valor y tipo?", ["==", "=", "===", "=>"], "c"],
            12 => ["¿Cómo se accede a una variable global dentro de una función?", ["Usando \$GLOBALS['nombre']", "Usando global \$nombre", "Ambas son correctas", "Ninguna es correcta"], "c"],
            13 => ["¿Qué función se usa para leer una línea de un archivo abierto?", ["fread()", "fgets()", "file_get_contents()", "fopen()"], "b"],
            14 => ["¿Qué función permite redirigir al usuario a otra página usando una cabecera HTTP?", ["redirect()", "header('Location: ...')", "go_to()", "move()"], "b"],
            15 => ["¿Qué archivo de configuración define opciones como el límite de memoria y la zona horaria?", ["php_config.ini", "php.ini", "settings.php", "config.php"], "b"],
            16 => ["¿Qué filtro de PHP se usa para validar un correo electrónico?", ["FILTER_SANITIZE_EMAIL", "FILTER_VALIDATE_EMAIL", "FILTER_VALIDATE_STRING", "FILTER_CLEAN_EMAIL"], "b"],
            17 => ["¿Qué función convierte caracteres especiales en entidades HTML?", ["htmlspecialchars()", "htmlentities()", "strip_tags()", "encode_html()"], "a"],
            18 => ["¿Qué función se utiliza para establecer una cookie?", ["cookie_set()", "setcookie()", "session_cookie()", "add_cookie()"], "b"],
            19 => ["¿Cuál de los siguientes operadores incrementa una variable en una unidad?", ["++", "+=", "--", "**"], "a"],
            20 => ["¿Qué función se usa para incluir un archivo obligatorio que, si falta, detiene la ejecución del script?", ["include()", "require()", "include_once()", "require_once()"], "b"],
        ];

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $correctas = 0;
            foreach ($preguntas as $num => $p) {
                if (isset($_POST["p$num"]) && $_POST["p$num"] == $p[2]) {
                    $correctas++;
                }
            }
            $nota = round(($correctas / count($preguntas)) * 10, 2);
            echo "<div class='resultado'><strong>Has acertado $correctas de " . count($preguntas) . " preguntas.</strong><br>";
            echo "Tu nota: <strong>$nota / 10</strong></div><hr>";
        }

        foreach ($preguntas as $num => $p) {
            echo "<div class='pregunta'><h3>$num. {$p[0]}</h3>";
            $opciones = ['a', 'b', 'c', 'd'];
            foreach ($p[1] as $i => $texto) {
                echo "<label><input type='radio' name='p$num' value='{$opciones[$i]}'> {$texto}</label><br>";
            }
            echo "</div>";
        }
        ?>
        <input type="submit" value="Enviar respuestas">
    </form>

</body>

</html>