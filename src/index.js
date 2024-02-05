import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes'
import './styles/index.scss' //tentar tirar o index.scss

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)