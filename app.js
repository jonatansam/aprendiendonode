const { creartabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs')

 
console.clear();

//const base = 6;

creartabla( argv.b, argv.l, argv.h) 
    .then( nombretabla => console.log(nombretabla, 'creado') )
    .catch( err => console.log(err) );






