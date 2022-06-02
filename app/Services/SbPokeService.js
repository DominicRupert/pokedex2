import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";

const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/dom/pokemon',
    timeout: 5000
})


class SbPokeService{
    async getBoxPokemon(){
        const res = await sandboxApi.get();
        console.log('getsBoxPokemon', res.data);
        ProxyState.sBoxPokemon = res.data.map((p) => new Pokemon(p));
    }

    async catchPokemon(){
        let pokemon = ProxyState.activePokemon
        const res = await sandboxApi.post('', pokemon)
        console.log('catchPokemon', res.data);
        ProxyState.sBoxPokemon = [...ProxyState.sBoxPokemon, new Pokemon(res.data)]
    }

    async releasePokemon(id){
        const res = await sandboxApi.delete(id)
        console.log('releasePokemon', res.data);
        ProxyState.sBoxPokemon = ProxyState.sBoxPokemon.filter(p => p.id !== id)
}

setActivePokemon(id){
    let pokemon = ProxyState.sBoxPokemon.find(p => p.id === id)
    ProxyState.activePokemon = pokemon

}

async getGameVersion(){
    const res = await sandboxApi.get('/game_indices')
    console.log('getGameVersion', res.data);
    ProxyState.gameVersion = res.data
}
async benchPokemon(id){
    let pokemon = ProxyState.sBoxPokemon.find(p => p.id === id)
    console.log(pokemon);
    pokemon.benched = !pokemon.benched
    const res = await sandboxApi.put(pokemon.id, pokemon)
    console.log('benchPokemon', res.data);
    ProxyState.sBoxPokemon = ProxyState.sBoxPokemon
    
}
}
export const sbPokeService = new SbPokeService();