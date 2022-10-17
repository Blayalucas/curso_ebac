 
// Variavel Form 
    const form= document.getElementById("form-deposito");

//submissão do formulário e criando uma função Eventos e uma variavel
form.addEventListener('submit', function (e) {
    e.preventDefault();

// Variais campoa e campob com o comando Value  que  retorna um numero
    
    const campoa= document.getElementById("campoa").valueAsNumber;
    const campob= document.getElementById("campob").valueAsNumber;
 
 // if e Else

    if(campob > campoa){
        alert("Formulário Válido");
} else{
        alert("Formulário inválido!!! O campo B deve ser maior que o campo A");
}

});
