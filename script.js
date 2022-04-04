function mobile(){
    const elemento = document.querySelector(".escolha-itens");
    if (innerWidth <== 600px){
        elemento.classList.add(mobile);
    }
}

let prato;   // guardar informação do prato escolhido
let valorprato; // guardar valor do prato escolhido

function selecionarprato(element){
    let isSelected = document.querySelector(".selected-prato"); // verifica se tem prato selecionado
    if (isSelected !== null){                                 // condição para q se houver prato selecionado remova o atual
        isSelected.classList.remove("selected-prato");
    } else{
        element.classList.add("selected-prato");  
    }
                    // por fim o element selecionado tem sua seleção
    // checkImg aparecer desaparecer
    let isCheckOn = document.querySelector(".checkOnprato");  //vai ver se tem alguém que foi selecionado
    if (isCheckOn !== null){                         // se tiver alguém selecionado remove a seleção e add o hidden nele
      isCheckOn.classList.remove("checkOnprato");
      isCheckOn.classList.add("escondido");
    }
    element.querySelector(".checkImg").classList.add("checkOnprato"); // o element atual recebe a seleção e remove o hidden
    element.querySelector(".checkImg").classList.remove("escondido");
    // checkImg aparecer desaparecer
    let isFrango = element.classList.contains("Frango");
    let isMacarronada = element.classList.contains("Macarronada");
    let isLasanha = element.classList.contains("Lasanha");
   

    if (isFrango === true){
      prato = "Frango Ying Yang";
      valorprato = 14.90;
    } else if (isMacarronada === true){
      prato = "Macarronada";
      valorprato = 16.90;
    } else if (isLasanha === true){
      prato = "Lasanha";
      valorprato = 12.90;
    }else{
      prato = "Vazio";
      valorprato = 0;
    }
    if(prato && sobremesa && bebida){
      document.querySelector(".gray-button").classList.add("escondido");
      document.querySelector(".finish-order").classList.remove("escondido");
    }
}

let bebida;   // guardar informação do prato escolhido
let valorbebida; // guardar valor do prato escolhido

function selecionarbebida(element){
    let isSelected = document.querySelector(".selected-bebida"); //alternativa para não selecionar a mesma div da primeira lista é usar o seletor hierárquico
    if (isSelected !== null){
        isSelected.classList.remove("selected-bebida");
    }
    element.classList.add("selected-bebida");
    // checkImg aparecer desaparecer
    let isCheckOn = document.querySelector(".checkOnbebida");  //vai ver se tem alguém que foi selecionado
    if (isCheckOn !== null){                         // se tiver alguém selecionado remove a seleção e add o hidden nele
      isCheckOn.classList.remove("checkOnbebida");
      isCheckOn.classList.add("escondido");
    }
    element.querySelector(".checkImg").classList.add("checkOnbebida"); // o element atual recebe a seleção e remove o hidden
    element.querySelector(".checkImg").classList.remove("escondido");
    // checkImg aparecer desaparecer
    let isCoca = element.classList.contains("Coca");
    let isGuarana = element.classList.contains("Guarana");
    let isFantinha = element.classList.contains("Fantinha");

    if (isCoca === true){
      bebida = "Coca";
      valorbebida = 5.90;
    } else if (isGuarana === true){
      bebida = "Guarana";
      valorbebida = 4.90;
    } else if (isFantinha === true){
      bebida = "Fantinha";
      valorbebida = 4.50;
    } else{
      bebida = "Vazio";
      valorbebida = 0;
    }
    if(prato && sobremesa && bebida){
      document.querySelector(".gray-button").classList.add("escondido");
      document.querySelector(".finish-order").classList.remove("escondido");
    }
}

let sobremesa; 
let valorsobremesa; 

function selecionarsobremesa(element){
    let isSelected = document.querySelector(".selected-sobremesa");
    if (isSelected !== null){
        isSelected.classList.remove("selected-sobremesa");
    }
    element.classList.add("selected-sobremesa");
    // checkImg aparecer desaparecer
    let isCheckOn = document.querySelector(".checkOnsobremesa");  //vai ver se tem alguém que foi selecionado
    if (isCheckOn !== null){                         // se tiver alguém selecionado remove a seleção e add o hidden nele
      isCheckOn.classList.remove("checkOnsobremesa");
      isCheckOn.classList.add("escondido");
    }
    element.querySelector(".checkImg").classList.add("checkOnsobremesa"); // o element atual recebe a seleção e remove o hidden
    element.querySelector(".checkImg").classList.remove("escondido");
    // checkImg aparecer desaparecer
    let isPudim = element.classList.contains("Pudim");
    let isTorta = element.classList.contains("Torta");
    let isBrownie = element.classList.contains("Brownie");

    if (isPudim === true){
      sobremesa = "Pudim";
      valorbremesa = 9.90;
    } else if (isTorta === true){
      sobremesa = "Torta";
      valorsobremesa = 5.10;
    } else if (isBrownie === true){
      sobremesa = "Brownie";
      valorsobremesa = 6.90;
    } else{
      sobremesa = "Vazio";
      valorsobremesa = 0;
    }
    if(prato && sobremesa && bebida){
      document.querySelector(".gray-button").classList.add("escondido");
      document.querySelector(".finish-order").classList.remove("escondido");
    }
}
let totalValue = 0;
function finishOrder(){
  totalValue = valuePlate + valueDrink + valueDessert; // somar a conta do pedido
  document.querySelector(".confirm-canva").classList.remove("hidden");

  document.querySelector(".plate-selected").innerHTML = plate;
  document.querySelector(".value-plate").innerHTML = valuePlate.toFixed(2);

  document.querySelector(".drink-selected").innerHTML = drink;
  document.querySelector(".value-drink").innerHTML = valueDrink.toFixed(2);

  document.querySelector(".dessert-selected").innerHTML = dessert;
  document.querySelector(".value-dessert").innerHTML = valueDessert.toFixed(2);

  document.querySelector(".totalValue").innerHTML = totalValue.toFixed(2);
}


