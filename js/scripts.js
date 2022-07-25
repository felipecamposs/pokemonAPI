const nomePokemon = document.querySelector('.nomePokemon');
const fotoPokemon = document.querySelector('.fotoPokemon');
const fotoShinyPokemon = document.querySelector('.fotoShinyPokemon');
const idPokemon = document.querySelector('.idPokemon');
const tipoPokemon1 = document.querySelector('.tipoPokemon1');
const tipoPokemon2 = document.querySelector('.tipoPokemon2');
const altura = document.querySelector('.altura');
const peso = document.querySelector('.peso');
const move1 = document.querySelector('.move1');
const move2 = document.querySelector('.move2');
const move3 = document.querySelector('.move3');
const move4 = document.querySelector('.move4');


const form = document.querySelector('.form');
const inputPesquisa = document.querySelector('.inputPesquisa');
const botaoProximo = document.querySelector('.botaoProximo');
const botaoAnterior = document.querySelector('.botaoAnterior');

const buscaPokemon = async (pokemon) => {
    const respostaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await respostaAPI.json();
    return data;
}

const dadosPokemon = async (pokemon) => {
    const data = await buscaPokemon(pokemon);
    nomePokemon.innerHTML = data.name;
    fotoPokemon.src = data['sprites']['other']['official-artwork']['front_default'];
    tipoPokemon1.innerHTML = data['types']['0']['type']['name'];
    tipoPokemon2.innerHTML = data['types']['1']['type']['name'];
    altura.innerHTML = data.height;
    peso.innerHTML = data.weight;
    move1.innerHTML = data['moves']['0']['move']['name'];
    move2.innerHTML = data['moves']['1']['move']['name'];
    move3.innerHTML = data['moves']['2']['move']['name'];
    move4.innerHTML = data['moves']['3']['move']['name'];
    feijao = data.id;
}

let feijao = 1;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    dadosPokemon(inputPesquisa.value);
    inputPesquisa.value = '';
});

botaoProximo.addEventListener('click', function(e) {
    e.preventDefault();
    dadosPokemon(feijao + 1);
})

botaoAnterior.addEventListener('click', function(e) {
    e.preventDefault();
    dadosPokemon(feijao - 1);
})
