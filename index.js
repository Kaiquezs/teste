function verificarCheckboxes() {
    var checkboxes = document.querySelectorAll('input[name="produto"]:checked');
    if (checkboxes.length > 0) {
        return true;
    }
    return false;
}

    function salvarInformacoes() {
if (verificarCheckboxes()) {
alert('Acertou')


} else {
alert('Por favor, selecione pelo menos um produto.');
}}


document.addEventListener("DOMContentLoaded", () => {
// Seleciona todos os botões de adicionar pedido
const addToOrderButtons = document.querySelectorAll(".add-to-order-btn");

addToOrderButtons.forEach(button => {
button.addEventListener("click", () => {
alert("Item adicionado pedido!");


});
});
});

function toggleOptions(optionsId, icon) {
const optionsDiv = document.getElementById(optionsId);
optionsDiv.classList.toggle('hidden');
if (optionsDiv.classList.contains('hidden')) {
icon.setAttribute('aria-expanded', 'false');
} else {
icon.setAttribute('aria-expanded', 'true');
}
}

function setInfo(nome){
    localStorage.setItem('nome', nome);
}

function setPedido(pedido){
    localStorage.setItem('pedido', pedido);
}

function getPedido(){
    return localStorage.getItem('pedido');
}

function getInfo(){
    return localStorage.getItem('nome');
}

var salada = document.getElementById("saladaVerde");
var batataFrita = document.getElementById("batataFrita");
var petiscos = document.getElementById("petiscos");
var bolinhoBacalhau = document.getElementById("bolinhoBacalhau");
var feijoada = document.getElementById("feijoada");
var fileParmegiana = document.getElementById("fileParmegiana");
var moquecaPeixe = document.getElementById("moquecaPeixe");
var frangoAssadoComErvas = document.getElementById("frangoAssadoComErvas");
var lasanhaBolonhesa = document.getElementById("lasanhaBolonhesa");
var macarronada = document.getElementById("macarronada");
var escondidinhoCarneSeca = document.getElementById("escondidinhoCarneSeca");
var brigadeiro = document.getElementById("brigadeiro");
var petitGateau = document.getElementById("petitGateau");
var pudimLeite = document.getElementById("pudimLeite");
var mousseMaracuja = document.getElementById("mousseMaracuja");
var tortaMorango = document.getElementById("tortaMorango");
var boloChocolate = document.getElementById("boloChocolate");
var sucoLimao = document.getElementById("sucoLimao");
var sucoLaranja = document.getElementById("sucoLaranja");
var sucoMaracuja = document.getElementById("sucoMaracuja");
var sucoGoiaba = document.getElementById("sucoGoiaba");
var sucoManga = document.getElementById("sucoManga");
var cerveja = document.getElementById("cerveja");
var whisky = document.getElementById("whisky");
var agua = document.getElementById("agua");
var cafeExpresso = document.getElementById("cafeExpresso");
var valor = 0;

var confirmar = document.getElementById("confirmar");
var pedido = [];
var info = [];

localStorage.removeItem("pedido");

confirmar.onclick = function(valor){
    this.valor = 0;
    var verificar = localStorage.getItem("pedido");
    if(verificar !== null){
        for(n in pedido){
            pedido.splice(n);
        }
    }
    if(salada.checked){
        valor = 12;
        this.valor = valor;
        info = "salada";
        pedido.push("salada");
    }
    if(batataFrita.checked){
        valor = 10;
        this.valor += valor;
        info = "batata frita";
        pedido.push("batata frita");
    }
    if(petiscos.checked){
        valor = 52;
        this.valor += valor;
        info = "petiscos";
        pedido.push("petiscos");
    }
    if(bolinhoBacalhau.checked){
        valor = 12;
        this.valor += valor;
        info = "bolinho de bacalhau";
        pedido.push("bolinho de bacalhau");
    }
    if(feijoada.checked){
        valor = 35;
        this.valor += valor;
        info = "Feijoada";
        pedido.push("Feijoada");
    }
    if(fileParmegiana.checked){
        valor = 40;
        this.valor += valor;
        info = "Filé á parmegiana";
        pedido.push("Filé á parmegiana");
    }
    if(moquecaPeixe.checked){
        valor = 45;
        this.valor += valor;
        info = "Moqueca de peixe";
        pedido.push("Moqueca de peixe");
    }
    if(frangoAssadoComErvas.checked){
        valor = 30;
        this.valor += valor;
        info = "Frango assado com ervas";
        pedido.push("Frango assado com ervas");
    }
    if(lasanhaBolonhesa.checked){
        valor = 35;
        this.valor += valor;
        info = "Lasanha bolonhesa";
        pedido.push("Lasanha bolonhesa");
    }
    if(macarronada.checked){
        valor = 28;
        this.valor += valor;
        info = "Macarronada";
        pedido.push("Macarronada");
    }
    if(escondidinhoCarneSeca.checked){
        valor = 28;
        this.valor += valor;
        info = "Escondidinho de carne seca";
        pedido.push("Escodidinho de carne seca");
    }
    if(brigadeiro.checked){
        valor = 6;
        this.valor += valor;
        info = "Brigadeiro";
        pedido.push("Brigadeiro");
    }
    if(petitGateau.checked){
        valor = 18;
        this.valor += valor;
        info = "Petit Gateau";
        pedido.push("Petit Gateau");
    }
    if(pudimLeite.checked){
        valor = 12;
        this.valor += valor;
        info = "Pudim de leite";
        pedido.push("Pudim de leite");
    }
    if(mousseMaracuja.checked){
        valor = 10;
        this.valor += valor;
        info = "Mousse de maracujá";
        pedido.push("Mousse de maracujá");
    }
    if(tortaMorango.checked){
        valor = 15;
        this.valor += valor;
        info = "Torta de morango";
        pedido.push("Torta de morango");
    }
    if(boloChocolate.checked){
        valor = 10;
        this.valor += valor;
        info = "Bolo de chocolate";
        pedido.push("Bolo de chocolate");
    }
    if(sucoLimao.checked){
        valor = 5;
        this.valor += valor;
        info = "Suco de limão";
        pedido.push("Suco de limão");
    }
    if(sucoLaranja.checked){
        valor = 5;
        this.valor += valor;
        info = "Suco de laranja";
        pedido.push("Suco de laranja");
    }
    if(sucoMaracuja.checked){
        valor = 5;
        this.valor += valor;
        info = "Suco de maracujá";
        pedido.push("Suco de maracujá");
    }
    if(sucoGoiaba.checked){
        valor = 5;
        this.valor += valor;
        info = "Suco de goiaba";
        pedido.push("Suco de goiaba");
    }
    if(sucoManga.checked){
        valor = 5;
        this.valor += valor;
        info = "Suco de manga";
        pedido.push("Suco de manga");
    }
    if(cerveja.checked){
        valor = 10;
        this.valor += valor;
        info = "Cerveja";
        pedido.push("Cerveja");
    }
    if(whisky.checked){
        valor = 20;
        this.valor += valor;
        info = "Whisky";
        pedido.push("Whisky");
    }
    if(agua.checked){
        valor = 3;
        this.valor += valor;
        info = "Água";
        pedido.push("Água");
    }
    if(cafeExpresso.checked){
        valor = 3;
        this.valor += valor;
        info = "Café expresso";
        pedido.push("Café expresso");
    }
    localStorage.setItem('pedido', JSON.stringify(pedido));
    localStorage.setItem('total', JSON.stringify(this.valor));
}

window.addEventListener("beforeunload", function (event) {
    this.localStorage.removeItem("pedido");
    this.localStorage.removeItem("total");
});
