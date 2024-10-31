let readline = require("readline-sync");

let nome, salario, comissao, salarioFinal;

nome = readline.question("Insira o nome do funcionario: ");
salario = parseFloat(readline.question("Insira o salario do funcionario: "));
comissao = parseFloat(readline.question("Insira o valor vendido por mes (R$): "));

comissao = comissao*0.15;
salarioFinal = salario + comissao;

console.log("Nome: " + nome);
console.log("Salário fixo: R$" + salario);
console.log("Salário final: R$" + salarioFinal);
console.log("Valor da comissao: R$" + comissao);