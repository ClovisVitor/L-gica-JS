let produtos = [
    { descricao: "Resma Ofício", valor: 11.5, quantidade: 10 },
    { descricao: "Lapis preto", valor: 0.5, quantidade: 3 },
    { descricao: "Transferidor plastico", valor: 1.2, quantidade: 4 },
  ];
  let total = 0;
  let index = 0;
  
  while (index < produtos.length) {
    let { valor, quantidade } = produtos[index];
    total = total + valor * quantidade;
    index++;
  }
  console.log(total);