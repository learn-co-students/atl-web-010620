const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded',function(e){
  // 1. Render Teams
    getTrainerData()
})

function getTrainerData(){
  fetch(TRAINERS_URL)
  .then(function(res){
    return res.json()
  })
  .then(function(trainers){
    trainers.forEach(function(trainer){
      rendersTrainerCard(trainer)
    })
  })
}

function rendersTrainerCard(trainer){

  const card = document.createElement('div')
  card.className = 'card'
  card.dataset.id = trainer.id

  const trainerName = document.createElement('p')
  trainerName.innerText = trainer.name

  const addPokemonBtn = document.createElement('button')
  addPokemonBtn.dataset.trainerId = trainer.id
  addPokemonBtn.innerText = 'Add Pokemon'
  addPokemonBtn.addEventListener('click',function(e){
    // 2. Add a pokemon
    createNewPokemon(e)
  })

  const pokemonList = document.createElement('ul')

  trainer.pokemons.forEach(function(pokemon){
    const pokemonlistItem = rendersPokemonListItem(pokemon)
    pokemonList.appendChild(pokemonlistItem)
  })

  card.appendChild(trainerName)
  card.appendChild(addPokemonBtn)
  card.appendChild(pokemonList)

  //  🤚🏻

  const mainContainer = document.querySelector('main')
  mainContainer.appendChild(card)
}

function createNewPokemon(e){
  const trainerId = e.target.dataset.trainerId

  fetch(POKEMONS_URL,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ trainer_id: trainerId })
  })
  .then(function(res){
    return res.json()
  })
  .then(function(newPokemon){
    const pokemonList = e.target.parentElement.querySelector('ul')
    const newPokemonListItem = rendersPokemonListItem(newPokemon)
    pokemonList.appendChild(newPokemonListItem)
  })
}

function rendersPokemonListItem(pokemon){
  const pokemonlistItem = document.createElement('li')
  pokemonlistItem.innerText = `${pokemon.nickname} (${pokemon.species})`

  const releaseBtn = document.createElement('button')
  releaseBtn.className = 'release'
  releaseBtn.dataset.pokemonId = pokemon.id
  releaseBtn.innerText = 'Release'
  releaseBtn.addEventListener('click',function(e){
    // 3. Release a pokemon
    deletesPokemon(e)
  })

  pokemonlistItem.appendChild(releaseBtn)
  return pokemonlistItem
}

function deletesPokemon(e){
  const pokemonId = e.target.dataset.pokemonId

  fetch(POKEMONS_URL+`/${pokemonId}`,{
    method: 'DELETE'
  })
  .then(function(res){
    return res.json()
  })
  .then(function(deletedPokemon){
    e.target.parentElement.remove()
  })
}
