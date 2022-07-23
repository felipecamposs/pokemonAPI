const nomePokemon = document.querySelector('.nomePokemon');
const tipoPokemon = document.querySelector('.tipoPokemon');
const imagemPokemon = document.querySelector('.imagemPokemon');
const imagemAnimadaPokemon = document.querySelector('.imagemAnimadaPokemon');
const idPokemon = document.querySelector('.idPokemon');

const botao = document.querySelector("#botao");
const proximo = document.querySelector('#proximo');
const anterior = document.querySelector('#anterior');
var soma = 1;
var menos = 1;

let feijao = 1;

botao.addEventListener("click", function(e) {
    e.preventDefault();
    const texto = document.querySelector("#texto");
    const value = texto.value; 
    dadosPokemon(value);
});

proximo.addEventListener("click", function(e) {
    e.preventDefault();
    dadosPokemon(feijao + 1);
});

anterior.addEventListener("click", function(e) {
    e.preventDefault();
    dadosPokemon(feijao - 1);
});

async function buscaPokemon(pokemon) {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}


const dadosPokemon = async (pokemon) => {
    const data = await buscaPokemon(pokemon);
    nomePokemon.innerHTML = data.name;
    tipoPokemon.innerHTML = data['types']['0']['type']['name'];
    imagemPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny']
    imagemAnimadaPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    idPokemon.innerHTML = data['id']
    feijao = data.id;
}



