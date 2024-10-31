let readline = require("readline-sync");

let pergunta;

do {
    
    console.clear();
    console.log("----------- Calculadora ------------");
    console.log();
    let n1 = parseFloat(readline.question("Informe um numero: "));
    let n2 = parseFloat(readline.question("Informe outro numero: "));
    let operacao = readline.question("Qual operacao (+ - * /)? ");
    
    switch (operacao) {
    
        case "+":
            console.log(`Soma = ${n1+n2}`);
            break;
        case "-":
            console.log(`Subtração = ${n1-n2}`);
            break;
        case "*":
            console.log(`Multiplicação = ${n1*n2}`);
            break;
        case "/":
            switch (n2){
                case 0:
                    console.log("Impossível dividir por ZERO!");
                    break;
                default:
                    console.log(`Divisão = ${(n1/n2).toFixed(2)}`);
                    break;
            }
    
            break;
        default:
            console.log("Operação inválida!");
            break;
    }


    pergunta = readline.question("Deseja continuar (s ou n)? ");
}while (pergunta == "s");

console.log();
console.log("Fim do programa");