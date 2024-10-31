let readline = require("readline-sync");

let pergunta = "sim";
let contador = 0;

while (pergunta == "sim") {
    contador++;
    console.log(`Contador = ${contador}`);

    console.log();

    pergunta = readline.question("Deseja continuar (sim ou nao)? ");
}

console.log()
console.log("Fim do programa");