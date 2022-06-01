import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { monsService } from "../Services/MonsService.js";
import {Pop} from "../Utils/pop.js";


function _draw(){
    let pokemons = ProxyState.pokemons;
    let template = '';
    pokemons.forEach(p => 
        template += `<li onclick="app.monsController.getActivePokemon('${p.name}')">${p.name} </li>`);
    
    document.getElementById('pokemons').innerHTML = template;
}

function _drawDex(){
    let pokemon= ProxyState.activePokemon;
    document.getElementById('dex').innerHTML = pokemon.DexTemplate;

}


export class MonsController{
    constructor(){
       console.log('MonsController load', ProxyState.pokemons);
        ProxyState.on('pokemons', _draw);
        ProxyState.on('activePokemon', _drawDex);
        _draw()
        this.getMons()
    }
    
    async getMons(){
        try{

            await monsService.getMons();
        } catch (error){
            console.error(error);
            Pop.toast(error.message, 'error' 
            );

        }
    }

    async getActivePokemon(id){
        try{
            await monsService.getPokemon(id);
        } catch (error){
            console.error(error);
            Pop.toast(error.message, 'error' 
            );

        }
    }
}