export class Pokemon {
  constructor(pokeData) {
    this.id = pokeData.id;
    this.name = pokeData.name;
    this.species = pokeData.species;
    this.sprites =
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;

    this.url = pokeData.url;
    this.weight = pokeData.weight;
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
            <img src="${this.sprites}" alt="">
            <h4>weight: ${this.weight}</h4>
            </div>
            
            
            `;
  }
}
