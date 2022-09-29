const alumnoCtrl = {};

const Alumno = require('../models/alumno')

alumnoCtrl.getAlumnos = async (req, res) => {
    const alumno = await Alumno.find();
    res.json(alumno);
}



alumnoCtrl.createAlumno = async (req, res) => {
    const {nombre, apellidop, apellidom} = req.body;
    const newAlumno = new Alumno({
        nombre: nombre,
        apellidop: apellidop,
        apellidom: apellidom,
    })
    await newAlumno.save();
    console.log(newAlumno);
    res.json({message: "enviado..."})
}

alumnoCtrl.editAlumno = async (req, res) => {
    const {nombre, apellidop, apellidom} = req.body;
    await Alumno.findByIdAndUpdate(req.params.id,{
        nombre,
        apellidop,
        apellidom,
    });
    console.log(req.params.id, req.body)
    res.json({message: "editado"})
}



alumnoCtrl.deleteAlumno = async (req, res) => {
    await Alumno.findByIdAndDelete(req.params.id);
    res.json({message: "eliminado..."})
}



alumnoCtrl.getAlumno = async (req, res) => {
    const alumno = await Alumno.findById(req.params.id)
    console.log(alumno)
    res.json({alumno})
}

module.exports = alumnoCtrl;
