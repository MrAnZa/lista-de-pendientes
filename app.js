const argv = require('./conf/yargs').argv;
const porHacer = require('./to-do/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.description);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getlistado();
        for (let tarea of listado) {
            console.log('==========Por Hacer=========='.green);
            console.log(tarea.description);
            console.log('Estado: ', tarea.completado);
            console.log('============================='.green);
        }
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.description);
        console.log(borrado);
        break;

    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.description, argv.completado);
        console.log(actualizar);
        break;

    default:
        console.log('pirobo hp');
        break;
}