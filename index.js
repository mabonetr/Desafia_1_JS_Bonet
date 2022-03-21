//desafio entregable 1
//Establecer cupo de crédito

let nombre = prompt("Nombre:")
let edad = parseInt(prompt("Edad:"))
let sueldoMensual = parseInt(prompt("Ingresar sueldo mensual (CLP)"))
let cupoSolicitado = 0

function funcionCupo(edad,sueldo) {

    if (edad > 18) {
        if (sueldo > 300000 && sueldo < 500000 ){
            return cupoSolicitado = 150000
        }
        if (sueldo > 500000 && sueldo < 700000 ){
            return cupoSolicitado = 300000
        }
        if (sueldo > 700000 && sueldo < 1000000 ){
            return cupoSolicitado = 500000
        }
        if (sueldo > 1000000 && sueldo < 2000000 ){
            return cupoSolicitado = 1200000
        }
        if (sueldo > 2000000){
            return cupoSolicitado = 1500000
        }
        else {
            alert ('No clasificas')
        }

    }
    else {
        alert ('No cumples con la edad minima')
    }

}

alert (nombre +' tu cupo es: '+ funcionCupo(edad,sueldoMensual))

