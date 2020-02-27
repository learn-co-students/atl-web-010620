const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded',function(){
  getData()
})

function getData(){
  fetch(TRAINERS_URL)
  .then(function(res){
    return res.json()
  })
  .then(function(trainers){
    trainers.forEach(function(trainer){
      const mainContainer = document.querySelector('main')

      const trainerObj = new Trainer(trainer.id,trainer.name,trainer.pokemons)
      const trainerCard = trainerObj.renderCard()

      mainContainer.appendChild(trainerCard)
    })
  })
}
