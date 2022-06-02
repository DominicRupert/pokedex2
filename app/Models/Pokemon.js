export class Pokemon {
  constructor(pokeData) {
    this.id = pokeData.id;
    this.name = pokeData.name;
    this.species = pokeData.species;
    this.img =
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;

    this.url = pokeData.url;
    this.weight = pokeData.weight;
    this.benched = pokeData.benched || false;
    this.moves = pokeData.moves;
    this.stats = pokeData.stats
    this.game = pokeData.version;
    console.log("Pokemon", this.name);
  }

  static ListTemplate(pokemons) {
    return /*html*/ `
            <div class="col-12 d-flex flex-row">
            <h2>${pokemons.name}</h2>
            

            </div>
            
            
            `;
  }

  get DexTemplate() {
    return /*html*/ `
            <div class="col-12 d-flex flex-column text-center justify-content-center">
            <h3>${this.name.toUpperCase()}</h3> <h3>Pokedex number: ${this.id}</h3>
            <div class='col-12'>
            <img src="${this.img}" alt="">
            <button class="btn btn-danger" onclick="app.sbPokeController.catchPokemon()">Catch Pokemon</button>
            <h4>weight: ${this.weight}</h4>
            <div class='row' id="game-version">
         

            </div>
            </div>
            </div>
            
          
            
            
            `;
  }

  get MyPokeTemplate() {
    return /*html*/ `
      <div class="col-12 d-flex flex">
      <div class="row">
      <div class="col-2">
      <input type="checkbox" ${this.benched ? 'checked' : ''} onclick="app.SbPokeController.benchPokemon('${this.id}')">
      </div>
      <div class="col selectable" onclick="app.SbPokeController.setActivePokemon('${this.id}')">${this.name}</div>
      <div class="col-2 selectable text-danger" onclick="app.sbPokeController.releasePokemon('${this.id}')"><i class="mdi mdi-close"></i></div>
      `

}

get GameVersion(){
  return /*html*/ `
  <div class="col-12 d-flex flex"> 
  <button class="btn btn-primary"  onclick="app.sbPokeController.getGameVersion('${this.game}')">${this.name}</button>
  </div>
  `
}



}
