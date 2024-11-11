const buttonAlert = document.getElementById("btn-confirmar");
    if (buttonAlert) {
        buttonAlert.onclick = function() {
            alert("Seu pedido foi Confirmado!");
        };
    }

    var texto = document.getElementById("nome");
    var textoPedido = document.getElementById("pedido");
    var textoTotal = document.getElementById("total");
    var nome = localStorage.getItem('nome');
    const pedidos = JSON.parse(localStorage.getItem('pedido'))
    var total = JSON.parse(localStorage.getItem("total"));
    var array = [];

    textoPedido.innerHTML = "<strong>Pedido: </strong>"+pedidos;
    textoTotal.innerHTML = "<strong>Total a pagar: </strong>"+total;
    texto.innerHTML = "<strong>Nome</strong>: "+nome;

    window.addEventListener("beforeunload", function (event) {
        this.localStorage.removeItem("pedido");
        this.localStorage.removeItem("total");
        this.localStorage.removeItem("endereco");
        this.localStorage.removeItem("telefone");
    });
