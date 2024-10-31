let readline = require("readline-sync");

let n = readline.question("Digite um numero primo: ");

let cont = 0;

for (i = 2; i < n; i++) {
    if (n % i == 0) {
        cont = cont + 1;
    }
}

if (cont == 0) {
    console.log(`O ${n} é primo!`);
}else{
    console.log(`O ${n} NÃO é primo!`);
}