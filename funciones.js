// calculadora de descuento
function calcularDescuento(precio, porcentaje){
    if (porcentaje <0 || porcentaje >100){
        console.log("El porcentaje es inválido"); 
        return null; 
    } else {
    let descuento = (100 - porcentaje)/100;

    let precioFinal = 0; 
    precioFinal = precio*descuento; 
    return precioFinal;
    }//else
}//funcion calcular descuento


function validarContraseña(contraseña){
    if (contraseña.length <8 || !/\d/.test(contraseña)){
        return false;
    } return true
}//funcion validar contraseña

function celsiusAFahrenheit(celsius){
    let fahrenheit = (celsius * 9/5) + 32; 

    return fahrenheit; 
}//funcion celsius a fahrenheit

function esMayorDeEdad(edad){
    if (edad < 18){
        return false
    } return true; 
}//function mayor de edad

function generarNombreCompleto(nombre, apellido){
    let nombreCompleto = nombre + " " + apellido; 

    return nombreCompleto;
}//funcion nombre completo


module.exports.calcularDescuento = calcularDescuento; 
module.exports.validarContraseña = validarContraseña; 
module.exports.celsiusAFahrenheit = celsiusAFahrenheit; 
module.exports.esMayorDeEdad = esMayorDeEdad; 
module.exports.generarNombreCompleto = generarNombreCompleto; 