let readline = require('readline-sync');

let salario , psaude , ali , dfix , dvar , esc , saldo

salario = parseFloat(readline.question("Digite o valor do Salario (R$): "));
psaude = parseFloat(readline.question("Digite o valor do Plano de Saude (R$): "));
ali = parseFloat(readline.question("Digite o valor da Alimentacao (R$): "));
dfix = parseFloat(readline.question("Digite o valor do Despesas Fixas(R$): "));
dvar = parseFloat(readline.question("Digite o valor do Despesas Variaveis(R$): "));
esc = parseFloat(readline.question("Digite o valor da Escola do Filho(R$): "));

saldo = salario-psaude-ali-dfix-dvar-esc

console.log()
console.log(`Plano de Saúde ${(psaude/salario)*100}%`);
console.log(`Alimentacao ${(ali/salario)*100}%`);
console.log(`Despesas fixas ${(dfix/salario)*100}%`);
console.log(`Despesas Variaveis ${(dvar/salario)*100}%`);
console.log(`Escola ${(esc/salario)*100}%`);


console.log()

 if (saldo/salario >= 0.20) {
    console.log(`Gastos Dentro do Orçamento! \nSobrou: R$ ${saldo}`);
 } else {
    if (saldo < 0) {
        console.log(`Gastos Fora do Orçamento! \nFaltou: R$ ${saldo}`)
    } else {
        console.log(`Gastos Fora do Orçamento! \nSobrou: R$ ${saldo}`)
    }
 }
 
 console.log()
 console.log("Fim do Programa!")
