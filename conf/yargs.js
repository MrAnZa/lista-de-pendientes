const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la Tarea a realizar'
}
const argv = require('yargs').command('crear', 'crea una tarea por hacer', {
        description
    })
    .command('actualizar', 'Actualiza el estado de completado para la tarea', {
        description,
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Borra una tarea', {
        description
    }).help()
    .argv;

module.exports = { argv }