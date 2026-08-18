let listaFilmes = [];

const inputFilme = document.getElementById('inputFilme');
const addFilme = document.getElementById('addFilme');
const escolheFilme = document.getElementById('escolheFilme');
const filme = document.getElementById('filme');

//Adiciona filme à lista 
inputFilme.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addFilme.click();
    }
});

addFilme.addEventListener("click", function() {
    listaFilmes.push(inputFilme.value);
    console.log(listaFilmes);
});

//Escolhe filme aleatorio
escolherFilme.addEventListener("click", function() {
    const randomFilme = listaFilmes[Math.floor(Math.random() * listaFilmes.length)];
    document.getElementById('titulo').textContent = randomFilme;
});