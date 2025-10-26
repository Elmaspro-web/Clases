<?php

require_once '../Ejercicio_3_Comentado/Videojuegos2.php';

/* 2) Los campos se enviarán al mismo script
destino y se recibirán los valores de los
parámetros. */

/* 6) Modifica la validación del formulario para que
solo se admita un envío de tipo POST.
Investiga la variable superglobal $_SERVER["REQUEST_METHOD"]*/

if ($_SERVER["REQUEST_METHOD"] == "POST" && $_POST['escondido'] === 'enviado') {

        /* 3) Al obtenerlos, como cadena, deberás convertirlos
        al tipo de dato primitivo que
        corresponda: integer, float, boolean,
        string (si es fecha mantenlo como cadena) y
        genera un mensaje que indique si se han
        recibido o no todos los parámetros en el propio
        script destino. */

        if (empty($_POST['nombre']) ||
            empty($_POST['tipo']) ||
            empty($_POST['dificultad']) ||
            empty($_POST['horasMax']))
        {
            $mensaje = "Faltan campos obligatorios";
        }
        else if (!isset($_FILES['pdf_hobby']) || $_FILES['pdf_hobby']['error'] !== UPLOAD_ERR_OK)
        {
            $mensaje = "Falta el campo de archivo";
        }
        else
        {

            /* 7) Incluye un campo de tipo file para que puedas subir
            una fotografía del hobby. Solo podrá ser =2 MegaBytes,
            y tendrás que guardarla en un directorio específico. Debes
            validar que el archivo, además, solo sea un PDF, verificando
            a la vez que la extensión del archivo es '.pdf'; y que el tipo
            de archivo también. */

            $nombre = (string)$_POST['nombre'];
            $type = (string)$_POST['tipo'];
            $difficulty = (integer)$_POST['dificultad'];
            $horas = (integer)$_POST['horasMax'];
            $pdf = $_FILES['pdf_hobby'];

            $nombreArchivo = $pdf['name'];
            $tamanoArchivo = $pdf['size'];
            $tmpArchivo = $pdf['tmp_name'];
            $tipoArchivo = $pdf['type'];

            $directorioPDFs = 'PDFs/';
            $directorioAbsoluto = dirname(__FILE__) . '/' . $directorioPDFs;

            if ($tamanoArchivo >= 2 * 1024 * 1024)
            {
                $mensaje = "El archivo es demasiado grande";
            }
            elseif (strtolower(pathinfo($nombreArchivo, PATHINFO_EXTENSION)) !== 'pdf')
            {
                $mensaje = "El archivo no es .pdf";
            }
            elseif ($tipoArchivo !== 'application/pdf') {
                $mensaje = "El archivo no es un PDF válido";
            }
            else
            {

                /* 8) Modifica 8 y guarda solo el archivo si no existe
                previamente en el directorio de PDF.
                Usa la función file_exists(); Necesita un path absoluto,
                tendrás que construirlo con la variable mágica __FILE__
                y la función dirname. */

                if (!is_dir($directorioAbsoluto))
                {
                    mkdir($directorioAbsoluto, 0755, true);
                }

                $rutaFinal = $directorioAbsoluto . $nombreArchivo;

                /* 9) Modifica el script destino para que, al recibir los parámetros
                el script destino, los almacene en un objeto de tu clase Hobby. Agrega
                el atributo fotografía 'mágicamente', que almacenará el path de la imagen.
                La clase estará definida en un directorio aparte, realiza las inclusiones
                y llamadas respectivas. */

                $videojuego = new Videojuegos2($nombre, $type, $difficulty, $horas);
                $videojuego->__set('fotografía', $rutaFinal);
                $objSerializado = serialize($videojuego);

                if (file_exists($rutaFinal))
                {
                    $mensaje = "El archivo ya existe en el servidor. No se sobrescribirá.";

                    header("Location: formulario_hobby.php?objeto=" . urlencode($objSerializado) . "&mensajeMostrar=" . urlencode($mensaje));
                    exit;
                }
                else
                {
                    if (move_uploaded_file($tmpArchivo, $directorioPDFs . $nombreArchivo))
                    {
                        $mensaje = "Todos los campos están correctamente rellenados y el PDF se ha subido exitosamente. La ruta: " . $videojuego->__get('fotografía');

                        header("Location: formulario_hobby.php?objeto=" . urlencode($objSerializado) . "&mensajeMostrar=" . urlencode($mensaje));
                        exit;
                    }
                    else
                    {
                        $mensaje = "Error al guardar el archivo en el servidor";
                    }
                }
            }

        }

        /* 5) Modifica el formulario para que gestione
        la lógica en distintos scripts (origen y
        destino distintos). Deberá retornar igualmente
        al script origen con el mensaje establecido en 3). */

        /* Envío esta validación a traves de $_GET en el URL del header */

        /* urlencode es para convertir el mensaje en una version para el URL,
        en este caso le enviamos el contenido que reciba de $mensaje */

        header("Location: formulario_hobby.php?mensajeMostrar=" . urlencode($mensaje));
        exit;
}
