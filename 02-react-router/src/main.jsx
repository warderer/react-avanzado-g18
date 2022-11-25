import React from 'react'
import ReactDOM from 'react-dom/client'
/* Importar BrowserRouter para dotar a mi App de poder manejar rutas
Debe estar en un componente superior, para que este disponible en toda mi App.
*/
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Hago que BrowserRouter envuelva a mi App */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
