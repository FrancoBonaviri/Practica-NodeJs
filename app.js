
const { crearArchivo, listarTabla }  = require('./multiplicar/multiplicar');
const argv  = require('yargs')
                .command('listar', 'Imprime en consola la tabla de multiplicar', {
                    base: {
                        demand: true,
                        alias: 'b'
                    },
                    limite: {
                        alias: 'l',
                        default: 10
                    }
                })
                .command('crear', 'Crea un archivo con la tabla de multiplicar', {
                    base: {
                        demand: true,
                        alias: 'b'
                    },
                    limite: {
                        alias: 'l',
                        default: 10
                    }
                })
                .help()
                .argv;


let comando = argv._[0];

switch( comando ) {

    case 'listar':
        listarTabla( argv.base, argv.limite )
    break;


    case 'crear': 

        crearArchivo( argv.base, argv.limite )
        .then((result) => {
            console.log( `Archivo ${result} creado` );
        }).catch(e => console.log(e));

    break;


    default: 
        console.log("Comando incorrecto");
    break;
}

