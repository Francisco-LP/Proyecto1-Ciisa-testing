const {Schema, model} = require('mongoose');

const cursoSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
    }
 });

 module.exports = model('Curso', cursoSchema);
