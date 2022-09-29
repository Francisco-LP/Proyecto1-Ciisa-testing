//arranca el servidor
const app = require('./app');
require('./database');

const cors = require('cors');

app.use(cors({
    origin: 'https://localhost:3000'
}))

async function  main(){
    await app.listen(4000, () => console.log('serveridor funcionando'));
}

main();