// Instalar servidor express
const express = require ('express');
const path = require ('ruta');

app const = express ();

// Servir solo los archivos estáticos del directorio dist
app.use (express.static (__ dirname + '/dist/Formulario-Angular-Ejemplo'));

app.get ('/', function (req, res) {
    
res.sendFile (path.join (__ dirname + '/dist/Formulario-Angular-Ejemplo/index.html'));
});

// Inicie la aplicación escuchando en el puerto predeterminado de Heroku
app.listen (process.env.PORT || 8080);