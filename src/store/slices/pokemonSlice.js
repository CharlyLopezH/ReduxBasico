import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

//Aquí vamos a encontrar las funciones declaradas en el store
export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },

  reducers: {
    startLoadingPokemons: (state, /* action */ ) => {
      state.isLoading = true;
  },
    setPokemons: ( state, action ) => {
    state.isLoading = false;
    state.page = action.payload.page;
    state.pokemons = action.payload.pokemons;
  }
}
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer