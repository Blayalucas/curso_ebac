const form = document.getElementById('form-atividade');

//submissão do formulário e criando uma função Eventos e uma variavel
form.addEventListener('submit', function (e) {
    e.preventDefault();

    
});

function linha() {
    const name = document.getElementById('nome-tarefa');
    document.getElementById('table').innerHTML = `<li id="target" style="cursor:pointer;" onclick="textDecoration()">${name.value}</li>`;
    event.preventDefault();
}
function textDecoration() {
    document.getElementById("target").style.textDecorationLine = 'line-through';
    event.preventDefault();
}