<?php
//se cuadran los datos referentes para el acceso
$servername = "localhost";
$username = "root";
$password = "";
$database = "eiatec";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $nombre = $_POST['nombre'];
    $cedula = $_POST['cedula'];
    $cuenta = $_POST['cuenta'];
    $ubicacion = $_POST['ubicacion'];
    $area = $_POST['area'];
    $cargo = $_POST['cargo'];
    $dominio = $_POST['dominio'];
    $region = $_POST['region'];
    $oficina = $_POST['oficina'];

    // Consulta SQL para insertar los datos en la base de datos
    $sql = "INSERT INTO trabajadores (nombre, cedula, cuenta, ubicacion, area, cargo, dominio, region, oficina)
            VALUES ('$nombre', '$cedula', '$cuenta', '$ubicacion', '$area', '$cargo', '$dominio', '$region', '$oficina')";

    // Ejecutar la consulta
    if ($conn->query($sql) === TRUE) {
        echo "Los datos se han insertado correctamente en la base de datos."; 
    } else {
        echo "Error al insertar datos: " . $conn->error;
    }

    // Redirigir al mismo lugar desde donde se envió el formulario
    header("location:".$_SERVER['HTTP_REFERER']." ");
}
    
?>
