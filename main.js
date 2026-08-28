const API_KEY = 'REMOVED'; //env.js
const URL = 'https://api.themoviedb.org/3/search/movie?language=pt&query=';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?language=pt&api_key=${API_KEY}`;

let listaFilmes = [];

const inputFilme = document.querySelector(".adicionar-filme input");
const printFilme = document.querySelector(".adicionar-filme button");
const escolherFilme = document.querySelector(".escolher-filme");
const poster = document.querySelector(".container-filme img");
const container = document.querySelector('.lista-filmes')
const posterLista = document.querySelector(".elemento-filme img");

//Generos
const options = {
    method: 'GET',
}
fetch(`https://api.themoviedb.org/3/genre/movie/list?language=pt&api_key=${API_KEY}`, options)
    .then(res => res.json())
    .catch(err => console.error(err));

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
async function adicionarFilme(filme) {
    const response = await fetch(URL + filme + `&api_key=${API_KEY}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
    } else {
        var data = await response.json();

        var posterLista = IMG_URL + data.results[0].poster_path;
        var titulo = data.results[0].title;
        var ano = data.results[0].release_date.slice(0, 4);

        const template = `
            <div class="elemento-filme">
                <img src="${posterLista}">
                <h1 id="titulo-filme">${titulo}</h1>
                <h2 id="ano">${ano}</h2>
            </div>
        `;

        container.insertAdjacentHTML('beforeend', template);
    }
}

inputFilme.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        printFilme.click();
    }
});

printFilme.addEventListener("click", function() {
    listaFilmes.push(inputFilme.value);
    console.log(listaFilmes);
    adicionarFilme(inputFilme.value);

    inputFilme.value = '';
});

//Escolher filme aleatório
escolherFilme.addEventListener("click", function() {
    mostrarFilme(listaFilmes[Math.floor(Math.random() * listaFilmes.length)]);
});