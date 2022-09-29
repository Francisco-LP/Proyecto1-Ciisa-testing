//aca defino el servidor pero lo arranca index.js
const express = require('express');
const cors = require('cors');
const app = express();


//settings

//midelwares
app.use(cors());
app.use(express.json());

//routs

app.use('/user', require('./routes/user') );
app.use('/notes', require('./routes/notes'));
app.use('/cursos', require('./routes/cursos'));
app.use('/alumnos', require('./routes/alumnos'));
app.use('/profesores', require('./routes/profesores'));






module.exports = app;