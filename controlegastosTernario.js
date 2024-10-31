let readline = require("readline-sync");

let salario, ps, ali, dfix, dvar, esc, saldo;

salario = parseFloat(readline.question("Informe o salario da familia (R$): "));
ps = parseFloat(readline.question("Informe o valor do Plano de Saude (R$): "));
ali = parseFloat(readline.question("Informe o valor da alimentacao (R$): "));
dfix = parseFloat(readline.question("Informe o valor das despesas fixas (R$): "));
dvar = parseFloat(readline.question("Informe o valor das despesas variaveis (R$): "));
esc = parseFloat(readline.question("Informe o valor da escola dos filhos (R$): "));

saldo = salario - ps - ali - dfix - dvar - esc;

console.log();
console.log(`Plano de Saúde ${(ps/salario)*100}%`);
console.log(`Alimentação ${(ali/salario)*100}%`);
console.log(`Despesas Fixas ${(dfix/salario)*100}%`);
console.log(`Despesas Variáveis ${(dvar/salario)*100}%`);
console.log(`Escola dos Filhos ${(esc/salario)*100}%`);


console.log( saldo/salario >=0.20 ? 
    `Gastos dentro do Orçamento! \nSobrou: R$ ${saldo}` : 
    saldo < 0 ? `Gastos fora do Orçamento! \nFaltou: R$ ${saldo*(-1)}`:
    `Gastos fora do Orçamento! \nSobrou: R$ ${saldo}`);