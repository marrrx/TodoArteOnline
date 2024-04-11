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

function App() {

  return (  
    <HashRouter>
      <Cookies/>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='' element={<Inicio />} />
          <Route path='/detalles-producto/:id' element={<DetallesProducto />} />
          <Route path='favoritos' element={"<Favoritos />"} />
          <Route path='carrito' element={"<Carrito />"} />
        </Route>

        <Route path='/logearse' element={''} />
        <Route path='/registrarse' element={''} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/admin' element={"<LoginAdmin />"} />
        <Route path='/dashboard' element={"<LoginAdmin />"} />
        
      </Routes>
    </HashRouter>

  )
}

export default App
