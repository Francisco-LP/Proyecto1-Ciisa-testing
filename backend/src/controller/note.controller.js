const noteCtrl = {};

const Note = require('../models/note')

noteCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}



noteCtrl.createNotes = async (req, res) => {
    const {nombre, apellidop} = req.body;
    const newNote = new Note({
        nombre: nombre,
        apellidop: apellidop
    })
    await newNote.save();
    console.log(newNote);
    res.json({message: "enviado..."})
}

noteCtrl.editNotes = async (req, res) => {
    const {nombre, apellidop} = req.body;
    await Note.findByIdAndUpdate(req.params.id,{
        nombre,
        apellidop
    });
    console.log(req.params.id, req.body)
    res.json({message: "editado"})
}



noteCtrl.deleteNotes = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: "eliminado..."})
}



noteCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id)
    console.log(note)
    res.json({note})
}

module.exports = noteCtrl;