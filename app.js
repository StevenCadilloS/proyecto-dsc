const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const axios = require('axios')

const app = express();
const PORT = 3000;

// Configuración para analizar el cuerpo de las solicitudes POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));



// Configuración de Multer para manejar la carga de archivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// Ruta para servir el formulario para subir una imagen
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para manejar la subida de la imagen
app.post('/upload', upload.single('image'), (req, res) => {
    if (req.file) {
        const imagePath = req.file.path;
        // Redirigir al usuario a la página de presentación con la ruta de la imagen como parámetro
        res.redirect(`/presentacion?image=${encodeURIComponent(imagePath)}`);
    } else {
        // Si no se adjuntó ningún archivo, redirigir al usuario de vuelta al formulario de carga
        res.redirect('/');
    }// Procesar la imagen y generar un número único
    // Redirigir al usuario a la página de presentación de la imagen
    //const imagePath = req.file.path;
    // Redirigir al usuario a la página de presentación con la ruta de la imagen como parámetro

});



// Ruta para servir la página de presentación de la imagen
app.get('/presentacion', (req, res) => {
    res.sendFile(path.join(__dirname, 'compra.html'));
});

// Ruta para manejar la compra y mostrar la página de compra exitosa
app.post('/comprar', (req, res) => {
    // Procesar la compra
    // Redirigir al usuario a la página de compra exitosa
    res.redirect('/exitoso');
});

// Ruta para servir la página de compra exitosa
app.get('/exitoso', (req, res) => {
    res.sendFile(path.join(__dirname, 'resultado.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});