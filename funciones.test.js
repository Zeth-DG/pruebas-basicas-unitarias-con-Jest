const funciones = require('./funciones.js'); 

// casos normales y límite 
//calculando descuentos
test(`si cuesta 100 y tiene un descuento del 10%, el precio final es 90`, ()=>{
    expect(funciones.calcularDescuento(100, 10)).toBe(90); 
})

test(`si cuesta 250 y tiene un descuento del 20%, el precio final es 200`, ()=>{
    expect(funciones.calcularDescuento(250, 20)).toBe(200); 
})

test(`si cuesta 100 y tiene un descuento del 0%, el precio final es 100`, ()=>{
    expect(funciones.calcularDescuento(100, 0)).toBe(100); 
})

test(`si cuesta 99.99 y tiene un descuento del 15%, el precio final es 84.9915`, ()=>{
    expect(funciones.calcularDescuento(99.99, 15)).toBe(84.99149999999999); 
})

test(`si cuesta 100 y tiene un descuento del -1%, dará null`, ()=>{
    expect(funciones.calcularDescuento(100, -1)).toBe(null); 
})

test(`si cuesta 100 y tiene un descuento del 101%, dará null`, ()=>{
    expect(funciones.calcularDescuento(100, 101)).toBe(null); 
})


//  validar contraseña
test(`la contraseña abc es corta, no es válida`, ()=>{
    expect(funciones.validarContraseña("abc")).toBe(false); 
})

test(`la contraseña abcdefgh no incluye números, no es válida`, ()=>{
    expect(funciones.validarContraseña("abcdefgh")).toBe(false); 
})

test(`la contraseña abc12345 es de al menos 8 caracteres e incluye números, por lo tanto es vlida`, ()=>{
    expect(funciones.validarContraseña("abc12345")).toBe(true); 
})

test(`la contraseña 12345678 es de al menos 8 caracteres e incluye números, por lo tanto es vlida`, ()=>{
    expect(funciones.validarContraseña("12345678")).toBe(true); 
})

test(`la contraseña abc123 NO cumple con la longitud mínima`, ()=>{
    expect(funciones.validarContraseña("abc123")).toBe(false); 
})

test(`la contraseña abcdefg1 cumple con la longitud mínima e incluye un número`, ()=>{
    expect(funciones.validarContraseña("abcdefg1")).toBe(true); 
})

test(`la contraseña abcdefg12 cumple con la longitud mínima e incluye un número`, ()=>{
    expect(funciones.validarContraseña("abcdefg12")).toBe(true); 
})

test(`si no se incluyen caracteres, la contraseña es inválida`, ()=>{
    expect(funciones.validarContraseña("")).toBe(false); 
})

// Celsius a Fahrenheit 
test(`0°C es equivalente a 32 Fahrenheit`, ()=>{
    expect(funciones.celsiusAFahrenheit(0)).toBe(32); 
})

test(`100°C es equivalente a 212 Fahrenheit`, ()=>{
    expect(funciones.celsiusAFahrenheit(100)).toBe(212); 
})

test(`-40°C es equivalente a -40 Fahrenheit`, ()=>{
    expect(funciones.celsiusAFahrenheit(-40)).toBe(-40); 
})

test(`10°C es equivalente a 50 Fahrenheit`, ()=>{
    expect(funciones.celsiusAFahrenheit(10)).toBe(50); 
})

test(`37°C es equivalente a 98.6 Fahrenheit`, ()=>{
    expect(funciones.celsiusAFahrenheit(37)).toBe(98.6); 
})

test(`-10°C es equivalente a 14 Fahrenheit`, ()=>{
    expect(funciones.celsiusAFahrenheit(-10)).toBe(14); 
})


// mayoría de edad
test(`17 años no es mayor de edad`, ()=>{
    expect(funciones.esMayorDeEdad(17)).toBe(false); 
})

test(`18 años ya es mayor de edad`, ()=>{
    expect(funciones.esMayorDeEdad(18)).toBe(true); 
})

test(`19 años es mayor de edad`, ()=>{
    expect(funciones.esMayorDeEdad(19)).toBe(true); 
})

test(`0 años no es mayor de edad`, ()=>{
    expect(funciones.esMayorDeEdad(0)).toBe(false); 
})

test(`-1 años no es válido`, ()=>{
    expect(funciones.esMayorDeEdad(-1)).toBe(false); 
})

test(`100 años es mayor de edad`, ()=>{
    expect(funciones.esMayorDeEdad(100)).toBe(true); 
})


// generar nombre completo 
test(`Maiceno Ceratti debe tener el formato correcto`, ()=>{
    expect(funciones.generarNombreCompleto("Maiceno", "Ceratti")).toBe("Maiceno Ceratti"); 
})

test(`Gustavo Sardinas debe tener el formato correcto`, ()=>{
    expect(funciones.generarNombreCompleto("Gustavo", "Sardinas")).toBe("Gustavo Sardinas"); 
})

test(`"" Sardinas no mostrara un nombre completo`, ()=>{
    expect(funciones.generarNombreCompleto("", "Sardinas")).toBe(" Sardinas"); 
})

test(`Gustavo "" no mostrara un nombre completo`, ()=>{
    expect(funciones.generarNombreCompleto("Gustavo", "")).toBe("Gustavo "); 
})

test(`si no se ingresa nada, no habrá nada que mostrar`, () => {
    expect(funciones.generarNombreCompleto("", "")).toBe(" "); 
})