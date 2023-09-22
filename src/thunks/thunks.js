import { pokemonApi } from '../api/pokemonApi';
import { setPokemons, startLoadingPokemons } from '../store/slices/pokemonSlice';

export const getPokemons  = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        console.log('entrando al get');
        dispatch( startLoadingPokemons() );
        // TODO: realizar petición http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        // const data = await resp.json();
        //Mejor usar AXIOS en lgar de fetch
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
        console.log(data.name);
        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
    }
}