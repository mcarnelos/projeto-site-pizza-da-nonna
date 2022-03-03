function fazerPedido(){
    console.log("Fazendo pedido...");

    let inputNome = document.getElementById("nome");
    let inputTelefone = document.getElementById("telefone");
    let inputEndereco = document.getElementById("endereco");
    let selectPagamento = document.getElementById("pagamento");
    let selectPizza = document.getElementById("pizza");
    let resumoPedido = document.getElementById("resumoPedido");

    let nome = inputNome.value;
    let telefone = inputTelefone.value;
    let endereco = inputEndereco.value;
    let pagamento = selectPagamento.value;
    let pizza = selectPizza.value;

    resumoPedido.innerHTML = `<p>
                                 <strong>Resumo do Pedido</strong> </br></br>
                                 <strong>Nome do cliente:</strong> ${nome} </br></br> 
                                 <strong>Telefone:</strong> ${telefone} </br></br> 
                                 <strong>Endereço:</strong> ${endereco} </br></br> 
                                 <strong>Forma de Pagamento:</strong> ${pagamento}</br></br> 
                                 <strong>Pedido:</strong> ${pizza}
                              </p>`

}