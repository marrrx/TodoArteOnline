import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { useState } from 'react';
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Perfil from './views/Perfil';
import Home from './views/Home';
import Inicio from './views/Inicio';
import Acceso from './views/Acceso';

function App() {




  return (
  
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='' element={<Inicio />} />
          <Route path='productos' element={"<Productos />"} />
          <Route path='favoritos' element={"<Favoritos />"} />
          <Route path='carrito' element={"<Carrito />"} />
        </Route>

        <Route path='/logearse' element={''} />
        <Route path='/registrarse' element={''} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/admin' element={"<LoginAdmin />"} />
        <Route path='/dashboard' element={"<LoginAdmin />"} />
        
        <Route path='/acceso' element={<Acceso/>}/>
        
      </Routes>
    </HashRouter>

  )
}

export default App
