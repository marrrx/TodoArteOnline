import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { useState } from 'react';
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Perfil from './views/Perfil';
import Home from './views/Home';
import Inicio from './views/Inicio';
import DetallesProducto from './components/DetallesProducto';
import Cookies from './components/Cookies';
import { MyContextProvider } from './Context';
import Carrito from './components/Carrito';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


function App() {

  const initialOptions = {
    "client-id": "AY97TliVi9ZKSKkAurA27VgTscwzc2WDEGU8jUce0v-P5tToi0xOO8pWuCw8LM68JOoBVvRirqJPT0mn",
    currency: "USD",
    intent: "capture",
  };

  return (
    <HashRouter>
      <PayPalScriptProvider options={initialOptions}>
        <MyContextProvider>
          <Cookies />
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='' element={<Inicio />} />
              <Route path='/detalles-producto/:id' element={<DetallesProducto />} />
              <Route path='favoritos' element={"<Favoritos />"} />
              <Route path='/carrito' element={<Carrito />} />
            </Route>

            <Route path='/logearse' element={''} />
            <Route path='/registrarse' element={''} />
            <Route path='/perfil' element={<Perfil />} />
            <Route path='/admin' element={"<LoginAdmin />"} />
            <Route path='/dashboard' element={"<LoginAdmin />"} />

          </Routes>
        </MyContextProvider>
      </PayPalScriptProvider>
    </HashRouter>
  )
}

export default App
