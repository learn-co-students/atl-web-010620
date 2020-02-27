class Pokemon {
  constructor(id, species, nickname, trainer_id) {
    this.id = id
    this.species = species
    this.nickname = nickname
    this.trainer_id = trainer_id
    this.element = document.createElement('li')
  }

  // <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>

  renderListItem(){
    this.element.innerText = `${this.nickname} (${this.species})`

    const releaseBtn = document.createElement('button')
    releaseBtn.className = 'release'
    releaseBtn.dataset.pokemonId = this.id
    releaseBtn.innerText = 'Release'

    this.element.appendChild(releaseBtn)

    return this.element
  }
}
