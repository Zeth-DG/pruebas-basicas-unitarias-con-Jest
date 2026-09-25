# Pruebas unitarias básicas con Jest

Este proyecto contiene varias funciones sencillas de JavaScript y sus pruebas unitarias básicas utilizando Jest.

El objetivo del ejercicio es comprobar que cada función produzca el resultado esperado con datos normales, valores límite y entradas inválidas.

## Funciones incluidas

| Función | Propósito |
|---|---|
| `calcularDescuento` | Calcula el precio final de un producto después de aplicar un descuento. |
| `validarContraseña` | Comprueba que una contraseña tenga al menos 8 caracteres y contenga un número. |
| `celsiusAFahrenheit` | Convierte una temperatura de grados Celsius a grados Fahrenheit. |
| `esMayorDeEdad` | Determina si una persona tiene 18 años o más. |
| `generarNombreCompleto` | Une un nombre y un apellido en un solo texto. |

## ¿Qué validan las pruebas?

Las pruebas unitarias verifican el comportamiento de una función de forma independiente. Para cada caso se proporciona una entrada y se compara el resultado real con el resultado esperado mediante Jest.

En este ejercicio, las pruebas validan:

- Resultados correctos con valores normales.
- Valores mínimos y máximos permitidos.
- Valores negativos y fuera de rango.
- Cadenas vacías.
- Contraseñas válidas e inválidas.
- Conversión de temperaturas positivas y negativas.
- El límite de mayoría de edad, especialmente los 17 y 18 años.
- La unión correcta de nombres y apellidos.

La estructura general de cada prueba es:

```js
test("descripción del caso", () => {
    expect(resultadoReal).toBe(resultadoEsperado);
});
```

Por ejemplo:

```js
test("0°C es equivalente a 32 Fahrenheit", () => {
    expect(funciones.celsiusAFahrenheit(0)).toBe(32);
});
```

Esta prueba ejecuta la función con `0` grados Celsius y comprueba que el resultado sea `32`.

## Estructura del proyecto

```text
.
├── .gitignore
├── funciones.js
├── funciones.test.js
├── package.json
├── README.md
└── Resultados_test.txt

```

### `funciones.js`

Contiene las funciones que se desean probar. Al final del archivo se exportan mediante `module.exports` para que puedan utilizarse desde el archivo de pruebas.

### `funciones.test.js`

Contiene los casos de prueba escritos para probarse con Jest. El archivo importa las funciones utilizando:

```js
const funciones = require("./funciones.js");
```

## Casos de prueba

### `calcularDescuento`

Esta función recibe un precio y un porcentaje de descuento. Si el porcentaje está entre `0` y `100`, calcula el precio final. Si está fuera de ese rango, devuelve `null`.

| Entrada | Resultado esperado | Qué se verifica |
|---|---:|---|
| `calcularDescuento(100, 10)` | `90` | Descuento normal del 10%. |
| `calcularDescuento(250, 100)` | `0` | Descuento máximo del 100%. |
| `calcularDescuento(100, 0)` | `100` | Producto sin descuento. |
| `calcularDescuento(99.99, 15)` | `84.99149999999999` | Descuento aplicado a un precio decimal. |
| `calcularDescuento(100, -1)` | `null` | Porcentaje menor que 0. |
| `calcularDescuento(100, 101)` | `null` | Porcentaje mayor que 100. |

La función también muestra el mensaje `"El porcentaje es inválido"` cuando recibe un porcentaje fuera del rango permitido.

## `validarContraseña`

Esta función devuelve `true` cuando la contraseña tiene al menos 8 caracteres y contiene por lo menos un número. En cualquier otro caso devuelve `false`.

| Entrada | Resultado esperado | Qué se verifica |
|---|---:|---|
| `"abc"` | `false` | Contraseña corta y sin números. |
| `"abcdefgh"` | `false` | Longitud suficiente, pero sin números. |
| `"abc12345"` | `true` | Longitud suficiente y contiene un número. |
| `"12345678"` | `true` | Ocho números. |
| `"abc123"` | `false` | Contiene números, pero es demasiado corta. |
| `"abcdefg1"` | `true` | Tiene exactamente 8 caracteres y un número al final. |
| `"1abcdefg1"` | `true` | Contiene números al inicio y al final. |
| `""` | `false` | Contraseña vacía. |

La función utiliza la expresión regular `/\d/` para comprobar si existe al menos un dígito.

## `celsiusAFahrenheit`

Esta función convierte una temperatura de Celsius a Fahrenheit mediante la fórmula:

```text
Fahrenheit = (Celsius × 9 / 5) + 32
```

| Entrada | Resultado esperado | Qué se verifica |
|---:|---:|---|
| `0` | `32` | Punto de congelación del agua. |
| `100` | `212` | Punto de ebullición del agua. |
| `-40` | `-40` | Valor igual en ambas escalas. |
| `10` | `50` | Conversión positiva. |
| `37` | `98.6` | Conversión con resultado decimal. |
| `-10` | `14` | Conversión de una temperatura negativa. |

## `esMayorDeEdad`

Esta función devuelve `true` si la edad es igual o mayor que 18. Devuelve `false` para edades menores.

| Entrada | Resultado esperado | Qué se verifica |
|---:|---:|---|
| `17` | `false` | Una persona de 17 años no es mayor de edad. |
| `18` | `true` | Se prueba el límite exacto. |
| `19` | `true` | Edad mayor que 18. |
| `0` | `false` | Edad menor de 18. |
| `-1` | `false` | Valor negativo. |
| `100` | `true` | Edad alta dentro de un caso válido. |

El caso de `18` es especialmente importante porque comprueba que la condición incluya exactamente la edad establecida como mayoría de edad.

## `generarNombreCompleto`

Esta función concatena un nombre y un apellido, colocando un espacio entre ambos.

| Entrada | Resultado esperado | Qué se verifica |
|---|---|---|
| `"Maiceno", "Ceratti"` | `"Maiceno Ceratti"` | Nombre completo normal. |
| `"Gustavo", "Sardinas"` | `"Gustavo Sardinas"` | Segundo nombre completo. |
| `"", "Sardinas"` | `" Sardinas"` | Nombre vacío. |
| `"Gustavo", ""` | `"Gustavo "` | Apellido vacío. |
| `"", ""` | `" "` | Ambos valores vacíos. |

Estos casos muestran el comportamiento actual de la función cuando uno o ambos valores están vacíos.

## Ejecución de las pruebas

Se debe agregar un script en `package.json`:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Para poder ejecutar las pruebas con:

```bash
npm test
```

## Resultados obtenidos

La ejecución reportada fue satisfactoria:

```text
Test Suites: 1 passed, 1 total
Tests:       31 passed, 31 total
```

Esto significa que:

- Se ejecutó una suite de pruebas.
- La suite terminó correctamente.
- Las 31 pruebas fueron aprobadas.
- No hubo pruebas fallidas.

Durante las pruebas de porcentajes inválidos también se muestra el mensaje:

```text
El porcentaje es inválido
```

Esto es esperado porque la función utiliza `console.log` para informar que el porcentaje está fuera del rango permitido.

## Observaciones técnicas

Aunque las 31 pruebas pasan correctamente, hay algunos aspectos que podrían mejorarse en una versión posterior:

- El resultado decimal de `calcularDescuento` depende de la representación de números de punto flotante de JavaScript. Para una aplicación de precios podría ser conveniente redondear a dos decimales.
- `esMayorDeEdad` no valida si la edad es realmente numérica. Una entrada como `"dieciocho"` podría generar un resultado no deseado.
- `validarContraseña` produciría un error si recibe `null` o `undefined`, porque esos valores no tienen la propiedad `.length`.
- `generarNombreCompleto` conserva los espacios recibidos y no elimina espacios innecesarios.
- El mensaje de `console.log` en `calcularDescuento` aparece durante las pruebas de porcentajes inválidos. Esto no hace que las pruebas fallen, pero en proyectos más grandes podría validarse con `jest.spyOn` o reemplazarse por una estrategia de manejo de errores.

## Conclusión

El ejercicio demuestra cómo utilizar Jest para comprobar funciones pequeñas de JavaScript mediante entradas específicas y resultados esperados. Las pruebas cubren casos normales, límites y valores inválidos para verificar que cada función se comporte de acuerdo con su propósito.

El resultado final fue de **31 pruebas aprobadas**, por lo que la implementación actual cumple con los casos definidos en el archivo `funciones.test.js`.