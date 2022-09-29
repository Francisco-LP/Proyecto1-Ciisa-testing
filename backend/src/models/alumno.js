const { Schema, model} = require('mongoose');


const alumnoSchema = new Schema({
    nombre: String,
    apellidop: String,
    
});


module.exports = model('Alumno', alumnoSchema);
