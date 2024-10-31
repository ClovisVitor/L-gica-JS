let readline = require('readline-sync');

let n1 = parseFloat(readline.question("Digite um numero: "));
let n2 = parseFloat(readline.question("Digite outro numero: "));
let op = readline.question("Qual operacao deseja (+, -, * ou /) ?");

switch (op) {
    case "+":
        console.log(`Resultado da soma é: ${n1+n2}`);
        break;
    case "-":
        console.log(`Resultado da subtracao é: ${n1-n2}`);
        break;
    case "*":
        console.log(`Resultado da multiplicação é: ${n1*n2}`);
        break;
    case "/":
        switch (n2){
            case 0:
                console.log("Impossível dividir por ZERO!");
                break;
            default:
                console.log(`Divisão = ${n1/n2}`);
                break;
        } 

    break;
    default:
        console.log("Operação Inválida!");
        break;

}

console.log()
console.log("Fim do Programa!")
console.log()
