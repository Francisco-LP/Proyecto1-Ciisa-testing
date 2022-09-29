const {Schema, model} = require('mongoose');

const profesorSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
        required: true,
    },
    apellidop: String,
    apellidom: String,
});

module.exports = model('Profe', profesorSchema);