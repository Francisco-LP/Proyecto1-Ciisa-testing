const {Router} = require('express');
const {createAlumno, getAlumnos, getAlumno, deleteAlumno, editAlumno} = require('../controller/alumno.controller');
const router= Router();



router.route('/')
    .get(getAlumnos)
    .post(createAlumno)
router.route('/:id')
    .get(getAlumno)
    .put(editAlumno)
    .delete(deleteAlumno)


module.exports = router;
