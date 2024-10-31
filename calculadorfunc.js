let readline = require('readline-sync');

let n1 = parseFloat(readline.question("Digite um numero: "));
let n2 = parseFloat(readline.question("Digite outro numero: "));
let op = readline.question("Qual operacao deseja (+, -, * ou /) ?");

function soma(n1, n2){
    return n1+n2;
}
function sub(n1, n2){
    return n1-n2;
}
function mult(n1, n2){
    return n1*n2;
}
function div(n1, n2){
    if (n2 == 0) {
        return "Impossível dividir por ZERO!";
    } else {
        return n1/n2;
    }
}

console.clear();
if (op == "+"){
    console.log(`Soma = ${soma(n1, n2)}`);
} else if (op == "-") {
    console.log(`Subtração = ${sub(n1, n2)}`);
} else if (op == "*") {
    console.log(`Multiplicação = ${mult(n1, n2)}`);
} else if (op == "/") {
    console.log(`Divisão = ${div(n1, n2)}`);
} else {
    console.log("Operação Inválida!");
}
