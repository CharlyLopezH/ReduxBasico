//Primer paso, Crear el archivo store.js (despues de instalar el redux obviamente "yarn add  @reduxjs/toolkit react-redux")
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from '../store/slices/contadorSlice';
import pokemonReducer from '../store/slices/pokemonSlice';

export const store = configureStore({
    reducer: {
        //Cuarto Paso; agregar los reducers (implementados en el Slice) al store
        //contadorx es la variable de estado proporcionada por el useSelector al view (CunterApp), y sus acciones en el slice respectivo
        theCounter: counterReducer,
        //Pokemons se utiliza en el app respectivo mediante: useSelector( state => state.pokemons );
        pokemons: pokemonReducer 
    },
  })