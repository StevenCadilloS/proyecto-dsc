document.getElementById('upload-form').addEventListener('submit', function (event) {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Obtener el archivo seleccionado
    var fileInput = document.getElementById('image-upload');
    var file = fileInput.files[0];

    // Validar si se seleccionó un archivo
    if (file) {
        // Aquí puedes agregar más validaciones, como el tamaño del archivo, el tipo de archivo, etc.

        // Simular el proceso de carga (aquí podrías enviar el archivo al servidor)
        setTimeout(function () {
            // Mostrar mensaje de éxito
            document.getElementById('success-message').style.display = 'block';
            // Limpiar el valor del campo de entrada de archivo
            fileInput.value = '';
        }, 2000); // Simula una carga de 2 segundos, reemplaza esto con tu lógica real de carga
    } else {
        // Si no se selecciona un archivo, mostrar un mensaje de error
        alert('Por favor, selecciona una imagen.');
    }
});