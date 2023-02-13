let num1= 50, num2 =32;
let resultado;
resultado=num1/num2;
let myStyle = "background: #117911; color: #fcf6f6; font-family: sans-serif; padding: 5px; border: 1px solid #4e82e2; border-radius: 5px;";
let tituStyle = "background: #FF0000; color: #fcf8f6; font-family: sans-serif; padding: 10px; border: 10px solid #4e82e2; border-radius: 5px;";


console.log(`%c Resultado ${resultado}`, myStyle);

//Math.ceil(x)
//Devuelve el entero mayor o igual que un número.
console.log(`%c "Devuelve el numero mayor mas proximo a un numero dado" = ${Math.ceil(resultado)}`, myStyle);

//Math.floor(x)
//Devuelve el mayor entero menor que o igual a un número.
console.log(`%c "Devuelve el numero menor mas proximo a un numero dado" = ${Math.floor(resultado)}`, myStyle);

//Math.max([x[, y[, …]]])
//Devuelve el mayor de cero o más números.
console.log(`%c "Devuelve el numero mayor de los numeros dados" = ${Math.max(10, 5, 22)}`, myStyle);


//Math.min([x[, y[, …]]])
//Devuelve el más pequeño de cero o más números.
console.log(`%c "Devuelve el numero menor de los numeros dados" = ${Math.min(10, 5, 22)}`, myStyle);

//Math.pow(x, y)
//Las devoluciones de base a la potencia de exponente, que es, baseexponent.
console.log(`%c "Multiplica el pimer numero por la cantidad de veces del segundo" = ${Math.pow(5, 2)}`, myStyle);

//Math.random()
//Devuelve un número pseudo-aleatorio entre 0 y 1.
console.log(`%c "Devuelve un numero aleatorio" = ${Math.random()}`, myStyle);

//Math.round(x)
//Devuelve el valor de un número redondeado al número entero más cercano.
console.log(`%c "Redondea el numero dado" = ${Math.round(resultado)}`, myStyle);

//Math.sqrt(x)
//Devuelve la raíz cuadrada positiva de un número.
console.log(`%c "Raiz cuadrada" = ${Math.sqrt(resultado)}`, myStyle);

//Math.trunc(x)
//Devuelve la parte entera del número x, la eliminación de los dígitos fraccionarios.
console.log(`%c "Me muestra el numero sin decimales" = ${Math.trunc(resultado)}`, myStyle);

//5.68545.toFixed(x)
//Devuelve la cantidad de numeros decimales segun x
  console.log(`%c "Me muestras los primeros 2 numeros decimales" = ${resultado.toFixed(2)}`, myStyle);


console.log(`%c "Comparadores"`, tituStyle);
let edad=35;
//Comparadores

//Igualdad
console.log(`%c ${num1} == ${num2} ${num1==num2} `, myStyle);
//Diferente de
console.log(`%c ${num1} != ${num2} ${num1!=num2} `, myStyle);
//Identico
console.log(`%c ${num1} === ${num2} ${num1===num2} `, myStyle);
//No identico
console.log(`%c ${num1} !== ${num2} ${num1!==num2} `, myStyle);
//Mayor que
console.log(`%c ${num1} > ${num2} ${num1>num2} `, myStyle);
//Mayor igual que
console.log(`%c ${num1} >= ${num2} ${num1>=num2} `, myStyle);
//Menor que
console.log(`%c ${num1} < ${num2} ${num1<num2} `, myStyle);
//Menor igual que
console.log(`%c ${num1} <= ${num2} ${num1<=num2} `, myStyle);
