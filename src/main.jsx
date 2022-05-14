import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//biblioteca de componentes
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                 //icons

//cuida do display, disposição da interface
import "primeflex/primeflex.css";
 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
