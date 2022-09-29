const profeCtrl = {};

const Profe = require('../models/profesor')

profeCtrl.getProfesores = async (req, res) => {
    const profe = await Profe.find();
    res.json(profe);
}



profeCtrl.createProfesor = async (req, res) => {
    const {nombre, apellidop, apellidom} = req.body;
    const newProfe = new Profe({
        nombre: nombre,
        apellidop: apellidop,
        apellidom: apellidom,
    })
    await newProfe.save();
    console.log(newProfe);
    res.json({message: "enviado..."})
}

profeCtrl.editProfesor = async (req, res) => {
    const {nombre, apellidop, apellidom} = req.body;
    await Profe.findByIdAndUpdate(req.params.id,{
        nombre,
        apellidop,
        apellidom,
    });
    console.log(req.params.id, req.body)
    res.json({message: "editado"})
}



profeCtrl.deleteProfesor = async (req, res) => {
    await Profe.findByIdAndDelete(req.params.id);
    res.json({message: "eliminado..."})
}



profeCtrl.getProfesor = async (req, res) => {
    const profe = await Profe.findById(req.params.id)
    console.log(profe)
    res.json({profe})
}

module.exports = profeCtrl;