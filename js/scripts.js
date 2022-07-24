const nomePokemon = document.querySelector('.nomePokemon');
const fotoPokemon = document.querySelector('.fotoPokemon');
const fotoShinyPokemon = document.querySelector('.fotoShinyPokemon');
const idPokemon = document.querySelector('.idPokemon');
const tipoPokemon1 = document.querySelector('.tipoPokemon1');
const tipoPokemon2 = document.querySelector('.tipoPokemon2');
const imagemAnimadaPokemon = document.querySelector('.imagemAnimadaPokemon');
const imagemAnimadaShinyPokemon = document.querySelector('.imagemAnimadaShinyPokemon');

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
    idPokemon.innerHTML = data['id'];
    nomePokemon.innerHTML = data.name;
    fotoPokemon.src = data['sprites']['other']['dream_world']['front_default'];
    tipoPokemon1.innerHTML = data['types']['0']['type']['name'];
    tipoPokemon2.innerHTML = data['types']['1']['type']['name'];
    imagemAnimadaPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    imagemAnimadaShinyPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny'];
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
