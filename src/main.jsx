import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// THC Component Library
import "@thcode-society/thc-library/dist/style.css";

// Local Global styling
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
