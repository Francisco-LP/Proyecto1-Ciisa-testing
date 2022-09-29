const { Schema, model} = require('mongoose');


const noteSchema = new Schema({
    nombre: String,
    apellidop: String,
});


module.exports = model('Note', noteSchema);
