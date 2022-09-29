const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/scn'

mongoose.connect(URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true
});

const conecction = mongoose.connection;

conecction.once('open', () =>{
    console.log('conectado a la base de  datos');
});