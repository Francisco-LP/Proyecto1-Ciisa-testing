const cursoCtrl = {};

const Curso = require('../models/curso');




//ver todos los cursos
cursoCtrl.getCursos = async (req, res) => {
    const cursos = await Curso.find();
    res.json(cursos);
}


//crear curso
cursoCtrl.createCurso = async (req, res) => {
    const {nombre} = req.body;
    const newCurso = new Curso({
        nombre: nombre
    })
    await newCurso.save();
    console.log(newCurso);
    res.json({message: "Curso enviado..."})
}

//Editar curso
cursoCtrl.editCurso = async (req, res) => {
    const {nombre} = req.body;
    await Curso.findByIdAndUpdate(req.params.id,{
        nombre
    });
    console.log(req.params.id, req.body)
    res.json({message: "Curso editado"})
}


//Borrar curso
cursoCtrl.deleteCurso = async (req, res) => {
    await Curso.findByIdAndDelete(req.params.id);
    res.json({message: "Curso eliminado..."})
}


//ver curso
cursoCtrl.getCurso = async (req, res) => {
    const curso = await Curso.findById(req.params.id)
    console.log(curso)
    res.json({curso})
}

module.exports = cursoCtrl;

