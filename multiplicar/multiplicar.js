const fs = require('fs');
const { number } = require('yargs');


const listarTabla = ( base, limite = 10) => {

    return new Promise( ( resolve, reject ) => {

        if( !Number( base ) && !Number( limite ) ){
            reject(`El valor introducido '${ base }' no es un Numero`);
            return;
        }

        for(let i = 0; i<= limite ; i++) {
            console.log(`${base} X ${ i } = ${base * i}\n`);
        }
    });

}


const crearArchivo = ( base, limite ) => {

    return new Promise( (resolve, reject) => {

        if( !Number( base ) ){
            reject(`El valor introducido '${ base }' no es un Numero`);
            return;
        }
        let data = '';

        for(let i = 0; i<= limite ; i++) {
            data += `${base} X ${ i } = ${base * i}\n`;
        }
        
        fs.writeFile(`tablas/tabla${ base }-${ limite }.txt`, data, (err) => {
        
            if(err) reject(err);
            else {
                resolve(`tabla-${ base }-${ limite }.txt`)
            }
            
        
        });
    });
}


module.exports = {
    crearArchivo,
    listarTabla
}



