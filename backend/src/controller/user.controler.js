const userCtrl = {};
const User = require('../models/user');



userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
}

userCtrl.createUsers = async (req, res) => {

    const {username} =  req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json('Usuario creado');
};

userCtrl.deleteUsers = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json('borrando...');
};

module.exports = userCtrl;