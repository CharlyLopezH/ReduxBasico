import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CounterApp from './CounterApp.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    {/* Segundo Paso, Proveer el store */}
    <Provider store={store}>
    <CounterApp />
    </Provider>
  </React.StrictMode>,
)
