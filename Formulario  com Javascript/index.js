 /* Função Validar */
function validar() {

// pegando o valor do nome pelos names
var nome = document.getElementById("nome-beneficiario");
var rg = document.getElementById("rg");
var cpf = document.getElementById("cpf");

// verificar se o nome está preenchido completamente
if (nome.value == "") {
    alert("Nome não informado");

// Deixa o input com o focus
    nome.focus();
// retorna a função e não olha as outras linhas
    return;
}

if (rg.value == "") {
    alert("Sobrenome não informado");
    rg.focus();
    return;
}
if (cpf.value == "") {
    alert("CPF não informado");
    cpf.focus();
    return;
}
alert("Formulário enviado!");
  // envia o formulário
  //formulario.submit ;
}

