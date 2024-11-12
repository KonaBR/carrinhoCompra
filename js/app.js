let totalGeral = 0;

function adicionar() {
    
    let produtoInput = document.getElementById('produto').value;
    let quantidadeInput = document.getElementById('quantidade');
    let produtoSelecionado = produtoInput.split('-')[0].trim();  
    let precoProduto = parseFloat(produtoInput.split('R$')[1].trim());  
    let quantidade = parseInt(quantidadeInput.value); 
    let precoTotal = quantidade * precoProduto; 

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${produtoSelecionado} <span class="texto-azul">R$${precoTotal}</span>
  </section>`;
    totalGeral = totalGeral + precoTotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`
    quantidadeInput.value = "";
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}