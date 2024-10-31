let readline = require('readline-sync');

let local = parseInt(readline.question("Informe sua nota: "));

switch (local) {
    case 1:
        console.log("Avaliação péssima!")
        break;
    case 2:
        console.log("Avaliação ruim!")
        break;
    case 3:
        console.log("Avaliação mediana!")
        break;
    case 4:
        console.log("Avaliação boa!")
        break;
    case 5:
        console.log("você ótima!")
        break;
    case 6:
        console.log("você Excelente!")
        break;
    default:
    console.log("Avaliação Inválida!")

}

console.log()
console.log("Fim do Programa!")