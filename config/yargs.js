

const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default:  false,
    describe: 'muestra  la tabala en consola'

})
 .option('h', {
    alias: 'hasta',
    type: 'number',
    default:  10,
    describe: 'limita el numero por el que se multiplica la base'

})
.check(( argv, options) => {
    if(  isNaN(argv.b) ){
        throw 'la base tiene  que ser  un numero'
    }
    return true;
})
.argv;

module.exports = argv;