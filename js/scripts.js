const nomePokemon = document.querySelector('.nomePokemon');
const tipoPokemon = document.querySelector('.tipoPokemon');
const imagemPokemon = document.querySelector('.imagemPokemon');
const imagemAnimadaPokemon = document.querySelector('.imagemAnimadaPokemon')
const idPokemon = document.querySelector('.idPokemon')

const buscaPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    const data = await APIResponse.json();
    console.log(data);
    return data;
}


const dadosPokemon = async (pokemon) => {
    const data = await buscaPokemon(pokemon);
    nomePokemon.innerHTML = data.name;
    tipoPokemon.innerHTML = data['types']['0']['type']['name'];
    imagemPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny']
    imagemAnimadaPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    idPokemon.innerHTML = data['id']
}

dadosPokemon('mewtwo');