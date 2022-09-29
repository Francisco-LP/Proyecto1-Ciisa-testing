const {Router} = require('express');
const { getNotes, createNotes, editNotes, deleteNotes, getNote } = require('../controller/note.controller');

const router= Router();



router.route('/')
    .get(getNotes)
    .post(createNotes)
router.route('/:id')
    .get(getNote)
    .put(editNotes)
    .delete(deleteNotes)


module.exports = router;