# Movie Randomizer

Um projeto simples para ajudar a decidir qual filme assistir. Você adiciona os títulos que quer ver a uma lista, e o app sorteia um deles aleatoriamente, exibindo pôster, sinopse, ano e gêneros usando dados da API do TMDB.

Projeto criado como parte dos meus estudos no roadmap Full Stack.

![lista_filmes](images\lista_filmes.png)
![filme_aleatorio](images\filme_aleatorio.png)

## Funcionalidades

- Buscar filmes pelo título usando a API do [TMDB](https://www.themoviedb.org/)
- Adicionar filmes a uma lista pessoal
- Sortear aleatoriamente um filme da lista
- Exibir pôster, título, ano e sinopse do filme sorteado
- Modo de edição para remover filmes da lista

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- [TMDB API](https://developer.themoviedb.org/docs)
- Font Awesome (ícones)

## Como rodar o projeto

1. Clone este repositório
2. Crie uma chave de API gratuita no [TMDB](https://www.themoviedb.org/documentation/api)
3. Insira sua chave na variável `API_KEY` no arquivo `main.js`
4. Abra o arquivo `index.html` no navegador

## Próximas features

- [ ] Persistência da lista de filmes por meio de banco de dados
- [ ] Opção de remover itens da lista de filmes
- [ ] Separação em duas páginas (lista de filmes / roleta de sorteio)
- [ ] Exibição dos gêneros de cada filme na lista
- [ ] Filtro por gênero(s) na hora de sortear um filme