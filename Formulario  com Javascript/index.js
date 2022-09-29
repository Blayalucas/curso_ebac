 /* Função Validar */
function validar() {

// Criando variavel result 
let result = document.getElementById ("resultado")
result.innerHTML = "";

// pegando o valor do nome pelos id`s
var campoa = parseFloat (document.getElementById("campoa").value);
var campob = parseFloat (document.getElementById("campob ").value);

// Validar quando o Campo B for maior que o Campo A  com if /Else
if (campob>campoa) {
    result.innerHTML += "Formulário Valido";
}
else {
    result.innerHTML += "Formulário Invalido";
}
}

