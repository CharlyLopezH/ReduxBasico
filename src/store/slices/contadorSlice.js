//Tercer paso Crear los Slices que vamos a utilizar para manipular las "porciones" de estado que 
//queramos controlar
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

//Aquí vamos a encontrar las funciones declaradas en el store
export const contadorSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    //En los reducers se implementan las acciones/funciones que van a modificar o a mutar el estado.
    //Aquí se define lo que va a hacer la acción invocada por el dispatch (desde el view)
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {      
    state.value = state.value-state.value
    },

    //Ejemplo de acción que recibe estado y una acción con su respectivo valor para trabajar con él.
    incrementByAmount: (state,action) => {
        console.log(`action payload ${action.payload}`);
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,reset } = contadorSlice.actions
export default contadorSlice.reducer