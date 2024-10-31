let readline = require("readline-sync");

let distancia = parseFloat(readline.question("Distancia (km): "));
let tempo = parseFloat(readline.question("Tempo (h): "));


function velocidade(d, t) {
    return d/t;
}

console.log(`Velocidade = ${velocidade(distancia, tempo)} km/h`)