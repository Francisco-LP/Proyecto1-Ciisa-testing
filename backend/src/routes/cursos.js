const {Router} = require('express');
const {getCursos, createCurso, deleteCurso,editCurso, getCurso } = require('../controller/curso.controller');

const router= Router();




router.route('/')
    .get(getCursos)
    .post(createCurso)
router.route('/:id')
    .get(getCurso)
    .put(editCurso)
    .delete(deleteCurso)

module.exports = router;