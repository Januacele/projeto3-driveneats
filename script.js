let prato = null;   
let valorprato = null; 
let bebida = null;   
let valorbebida = null; 
let sobremesa = null; 
let valorsobremesa = null;

let contadorProdutos = 0;

function selecionarprato(div, descricao, preco){
  desmarcarProduto('prato'); 

  //marcarProduto
  div.classList.add("selecionado");
  prato = descricao;
  valorprato = preco;
  contadorProdutos = contadorProdutos + 1;

  liberarParaFecharPedido();

}

function selecionarbebida(div, descricao, preco){
  desmarcarProduto('bebida'); 

  //marcarProduto
  div.classList.add("selecionado");
  bebida = descricao;
  valorbebida = preco;
  contadorProdutos = contadorProdutos + 1;

  liberarParaFecharPedido();

}

function selecionarsobremesa(div, descricao, preco){
  desmarcarProduto('sobremesa'); 

  //marcarProduto
  div.classList.add("selecionado");
  sobremesa = descricao;
  valorsobremesa = preco;
  contadorProdutos = contadorProdutos + 1;

  liberarParaFecharPedido();

}

function desmarcarProduto(produto){
  const produtoSelecionado = document.querySelector(`.${produto} .selecionado`);
  if (produtoSelecionado !== null){
    produtoSelecionado.classList.remove("selecionado");
    contadorProdutos = contadorProdutos - 1;
  }
}

function liberarParaFecharPedido(){
  const botao = document.querySelector("footer button");
  if(contadorProdutos === 3) {
    botao.disabled = false;
    botao.innerHTML = "Fechar pedido";
    botao.classList.add("liberado");
  } else {
    botao.disabled = true;
    botao.innerHTML = "Selecione os 3 itens para fechar o pedido";
    botao.classList.remove("liberado");
  }
}


function revisarPedido(){
  document.querySelector(".confirmacao").classList.remove("escondido");

  document.querySelector(".pratoEscolhido").innerHTML = prato;
  document.querySelector(".valorPrato").innerHTML = `R$ ${valorprato.toFixed(2)}`;
  document.querySelector(".bebidaEscolhida").innerHTML = bebida;
  document.querySelector(".valorBebida").innerHTML = `R$ ${valorbebida.toFixed(2)}`;
  document.querySelector(".sobremesaEscolhida").innerHTML = sobremesa;
  document.querySelector(".valorSobremesa").innerHTML = `R$ ${valorsobremesa.toFixed(2)}`;
  document.querySelector(".valorTotal").innerHTML = `R$ ${(valorprato + valorbebida + valorsobremesa).toFixed(2)}`;
}

function enviarPedido(){
  window.open(montarMensagemWhats(), '_blank').focus();

}

function montarMensagemWhats(){
  const numero = <></>;  // adcione um número aqui;
  const total = (pratoPreco + bebidaPreco + sobremesaPreco).toFixed(2);

  let mensagem = `Olá, gostaria de fazer o pedido:
  - Prato: ${prato}
  - Bebida: ${bebida}
  - Sobremesa: ${sobremesa}
  - Total: R$ ${total}
  `
  mensagem = encodeURIComponent(mensagem);
  return `https://wa.me/${numero}?text=${mensagem}`;
}

function cancelarPedido(){
  document.querySelector(".confirmacao").classList.add("escondido");
}

