import { ProxyState } from "../AppState.js";
import { sbPokeService } from "../Services/SbPokeService.js";
import { Pop } from "../Utils/pop.js";

function _drawSbPoke() {
  let pokemons = ProxyState.sBoxPokemon;
  let template = "";
  let pokeCount = 0;
  pokemons.forEach((p) => {
    template += p.MyPokeTemplate;
    if (p.benched) {
      pokeCount++;
    }
  });
  document.getElementById("sbox-mon").innerHTML = template;
}

export class SbPokeController {
  constructor() {
    console.log("loaded sbox controller");
    ProxyState.on("sBoxPokemon", _drawSbPoke);
    this.getBoxPokemon();
  }

  async getBoxPokemon() {
    try {
      await sbPokeService.getBoxPokemon();
    } catch (error) {
      console.error(error);
      Pop.toast(error.message, "error");
    }
  }

  async catchPokemon() {
    try {
      console.log("caughtPokemon");
      await sbPokeService.catchPokemon();
    } catch (error) {
      console.error(error);
      Pop.toast(error.message, "error");
    }
  }

  async releasePokemon(id) {
    try {
      await sbPokeService.releasePokemon(id);
    } catch (error) {
      console.error(error);
      Pop.toast(error.message, "error");
    }
  }

  setActivePokemon(id) {
    sbPokeService.setActivePokemon(id);
  }


getGameVersion(){
    document.getElementById("game-version").innerHTML = ProxyState.pokemons[0].game_indices[0].version.name;
}
  
  async benchPokemon(id) {
    try {
      await sbPokeService.benchPokemon(id);
    } catch (error) {
      console.error(error);
      Pop.toast(error.message, "error");
    }
  }
}
