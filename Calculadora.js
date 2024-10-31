let readline = require('readline-sync');

let n1 = parseFloat(readline.question("Digite um numero: "));
let n2 = parseFloat(readline.question("Digite outro numero: "));
let op = readline.question("Qual operacao deseja (+, -, * ou /) ?");
let resultado;

if (op == "+"){
    resultado = n1+n2;
    console.log(`Resultado = ${resultado}`);
} else if  (op == "-") {
    resultado = n1-n2;
    console.log(`Resultado = ${resultado}`);
} else if (op == "*") {
    resultado = n1*n2;
    console.log(`Resultado = ${resultado}`);
} else if (op == "/") {
    if (n2 != 0) { 
        resultado = n1/n2;
        console.log(`Resultado = ${resultado}`);
    } else {
        console.log("Impossivel dividir por zero!");
    }
    
} else {
    console.log("Operação inválida!");
}


console.log()
console.log("Fim do Programa")