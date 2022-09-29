const {Router} = require('express');

const {deleteProfesor, getProfesor, getProfesores, editProfesor, createProfesor } = require('../controller/profesor.controller');

const router = Router();


router.route('/')
    .get(getProfesores)
    .post(createProfesor)
router.route('/:id')
    .get(getProfesor)
    .put(editProfesor)
    .delete(deleteProfesor)


module.exports = router;