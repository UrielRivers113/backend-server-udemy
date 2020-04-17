//Requires
var express = require('express');
var mongoos = require('mongoose');


//Inicializar variables
var app = express();

//Conexión a la base de datos
mongoos.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
})

//Rutas
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'petición realizada correctamente'
    });
});

//Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server 3000: \x1b[32m%s\x1b[0m', 'online');
})