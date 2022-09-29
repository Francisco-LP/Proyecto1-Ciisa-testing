const {Router} = require('express');
const router= Router();

const {getUsers, createUsers, deleteUsers} = require('../controller/user.controler');

router.route('/')
    .get(getUsers)
    .post(createUsers)
    
router.route('/:id')
    .delete(deleteUsers);

module.exports = router;