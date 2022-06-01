import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";

const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/dom/pokemon',
    timeout: 5000
})


class SbPokeService{
    async getSboxPokemon(){
        const res = await sandboxApi.get();
        console.log('getSboxPokemon', res.data);
        ProxyState.SboxPokemon = res.data.results.map((p) => p);
    }
}