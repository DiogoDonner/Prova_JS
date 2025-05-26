let contatos = [];

function salvarContatosLocalStorage() {
  localStorage.setItem("lista_telefonica", JSON.stringify(contatos));
}

function carregarContatosDoLocalStorage() {
  const dados = localStorage.getItem("lista_telefonica");
  if (dados) {
    contatos = JSON.parse(dados);
    for (let contato of contatos) {
      adicionarContatoNaTabela(contato);
    }
  }
}

function adicionarContato() {
  const nome = document.getElementById("input_nome").value.trim();
  const telefone1 = document.getElementById("input_telefone1").value.trim();
  const telefone2 = document.getElementById("input_telefone2").value.trim();

  if (!nome || !telefone1) {
    alert("Por favor, preencha pelo menos o nome e o telefone principal.");
    return;
  }

  const contato = {
    nome: nome,
    telefone1: telefone1,
    telefone2: telefone2,
  };

  contatos.push(contato);
  salvarContatosLocalStorage();
  adicionarContatoNaTabela(contato);

  document.getElementById("input_nome").value = "";
  document.getElementById("input_telefone1").value = "";
  document.getElementById("input_telefone2").value = "";
}

function adicionarContatoNaTabela(contato) {
  const tabela = document.getElementById("tabela_contatos").querySelector("tbody");

  const linha = document.createElement("tr");

  const colunaNome = document.createElement("td");
  colunaNome.innerText = contato.nome;

  const colunaTelefone1 = document.createElement("td");
  colunaTelefone1.innerText = contato.telefone1;

  const colunaTelefone2 = document.createElement("td");
  colunaTelefone2.innerText = contato.telefone2 || "-";

  linha.appendChild(colunaNome);
  linha.appendChild(colunaTelefone1);
  linha.appendChild(colunaTelefone2);

  tabela.appendChild(linha);
}

function configurarEventos() {
  document.getElementById("botao_adicionar").addEventListener("click", adicionarContato);
  carregarContatosDoLocalStorage();
}

window.addEventListener("load", configurarEventos);