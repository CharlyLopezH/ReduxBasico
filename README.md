# React + Vite

Este ejemplo de react fue realizado con yarn + vite

Sirve para documentar como hacer una app básica de react + redux

-- Previamente Instalar RTK en el proyecto (puede ser npm o yarn, "yarn add  @reduxjs/toolkit react-redux")
-- Primer paso, Crear el archivo store.js 
        import { configureStore } from "@reduxjs/toolkit";
        import counterReducer from '../store/slices/contadorSlice';
        export const store = configureStore({
        reducer: {
        }
          },
        )

--Segundo paso en el app principal proveer el store
    <Provider store={store}>
    <CounterApp />
    </Provider>
    </React.StrictMode>,        

--Tercer paso crear el archivo js con los slices de la porción de store que queremos controlar (en este caso counter nada más) 
   import { createSlice } from '@reduxjs/toolkit' (archivo contadorSlice.js)

--Cuarto Paso; agregar los reducers (implementados en el Slice) al store
   export const store = configureStore
    reducer: {
        
        //theCounter es la variable de estado proporcionada por el useSelector al view (CunterApp), y sus acciones en el slice respectivo
        theCounter: counterReducer        
    },

--Quinto paso, consumir desde el view por medio de los dispatch (y el useSelector)
onClick={()=>dispatch(increment())} 
