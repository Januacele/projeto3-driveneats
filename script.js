fuction mobile(){
    const elemento = document.querySelector(".escolha-itens");
    if (innerWidth <== 600px){
        elemento.classList.add(mobile);
    }
}


let prato;   // guardar informação do prato escolhido
let valorprato; // guardar valor do prato escolhido


function selecionarprato(element){
    let estaSelecionado = document.querySelector(".selected-prato"); // verifica se tem prato selecionado
    if (estaSelecionado !== null){                                 // condição para q se houver prato selecionado remova o atual
        estaSelecionado.classList.remove("selected-prato");
    }
    element.classList.add("selected-prato");                  // por fim o element selecionado tem sua seleção
    // checkImg aparecer desaparecer
    let isCheckOn = document.querySelector(".checkOn");  //vai ver se tem alguém que foi selecionado
    if (isCheckOn !== null){                         // se tiver alguém selecionado remove a seleção e add o hidden nele
      isCheckOn.classList.remove("checkOn");
      isCheckOn.classList.add("hidden");
    }
    element.querySelector(".check").classList.add("checkOn"); // o element atual recebe a seleção e remove o hidden
    element.querySelector(".check").classList.remove("hidden");
    // checkImg aparecer desaparecer
    let isFrango = element.classList.contains("frango");
    let isMacarronada = element.classList.contains("macarronada");
    let isLasanha = element.classList.contains("lasanha");


    if (isFrango === true){
      prato = "Frango Yin Yang";
      valorprato = 14.90;
    } else if (isFish === true){
      prato = "Macarronada";
      valorprato = 16.90;
    } else if (isMeat === true){
      prato = "Lasanha";
      valorprato = 12.90;
    } else{
      prato = "Vazio";
      valorprato = 0;
    }
    if(prato && bebida && sobemesa){
      document.querySelector(".gray-button").classList.add("hidden");
      document.querySelector(".finish-order").classList.remove("hidden");
    }
}



function enviarPedido(){
    let nome = prompt("Qual o seu nome?");
    let endereco = prompt("Qual é o seu endereço?");
    let pagamento = prompt("Qual a forma de pagamento? (cartão, dinheiro ou pix)");
  
    let messagemWpp = "Olá, gostaria de fazer o pedido:" + "\n" + "- Prato: " + plate + "\n" + "- Bebida: " + drink + "\n" + "- Sobremesa: " + dessert + "\n" + "Cliente: " + name + "\n" + "Endereço: " + adress + "\n" + "Forma de pagamento: " + payment + "\n" + "Total: " + totalValue.toFixed(2) ;
  
    window.open("https://wa.me/5581995464901?text=" + encodeURIComponent(messageWpp));
  }
  
  function calloffOrder(){
    document.querySelector(".confirm-canva").classList.add("hidden");
  }