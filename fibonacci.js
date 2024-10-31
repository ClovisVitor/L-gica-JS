let readline = require("readline-sync");

let n = readline.question("Digite o numero de termos da sequencia: ");
let anterior = 0;
let atual = 1;


console.log(`${anterior} `);
for (let i = 2; i <= n; i++) {
    console.log(`${atual} `);
    let proximo = anterior + atual;
    anterior = atual; 
    atual = proximo;
}