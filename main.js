const API_KEY = TMDB_API_KEY(); //env.js
const URL = 'https://api.themoviedb.org/3/search/movie?query=';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

let listaFilmes = [];

const inputFilme = document.querySelector(".adicionar-filme input");
const printFilme = document.querySelector(".adicionar-filme button");
const escolherFilme = document.querySelector(".escolher-filme");
const poster = document.querySelector(".container-filme img");

//Chama API
async function mostrarFilme(filme) {
    const response = await fetch(URL + filme + `&api_key=${API_KEY}`);
    
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".container-filme").style.display = "none";
    } else {
        var data = await response.json();

        poster.src = IMG_URL + data.results[0].poster_path;
        document.querySelector(".titulo h1").innerHTML = data.results[0].title;
        document.querySelector(".titulo h2").innerHTML = data.results[0].release_date.slice(0, 4);

        document.getElementById("sinopse").innerHTML = data.results[0].overview;
        document.querySelector(".error").style.display = "none";
        document.querySelector(".container-filme").style.display = "flex";
    }
    
}

//Adiciona filme à lista 
inputFilme.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        printFilme.click();
    }
});

printFilme.addEventListener("click", function() {
    listaFilmes.push(inputFilme.value);
    console.log(listaFilmes);
    inputFilme.value = '';
});

//Escolher filme aleatório
escolherFilme.addEventListener("click", function() {
    mostrarFilme(listaFilmes[Math.floor(Math.random() * listaFilmes.length)]);
});