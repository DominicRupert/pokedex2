import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
  timeout: 5000,
});
class MonsService {
  async getMons() {
    const res = await pokeApi.get();
    console.log("getMons", res.data);
    ProxyState.pokemons = res.data.results.map((p) => p);
  }
  async getPokemon(id) {
   
    const res = await pokeApi.get(id);
    console.log("getPokemon", res.data);
    ProxyState.activePokemon = new Pokemon(res.data);
  }
}
export const monsService = new MonsService();
