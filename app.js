const apiURL = "http://localhost:8080/produtos";

async function getProdutos() {
    const response = await fetch(apiURL);
    const data = await response.json(); 
    console.log(data);
}

function getProdutoById() {}

function postProduto() {}

function putProduto() {}

function deleteProduto() {}



