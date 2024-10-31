let readline = require("readline-sync");

let pergunta;
let contador = 0;

do {
    contador++;
    console.log(`Contador = ${contador}`);

    console.log();

    pergunta = readline.question("Deseja continuar (sim ou nao)? ");

} while (pergunta == "sim");


console.log()
console.log("Fim do programa");