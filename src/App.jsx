import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import './App.css'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Index from '../Index';
import Dashboard from './views/Dashboard';
import Perfil from './views/Perfil';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/logearse' element={''} />
        <Route path='/registrarse' element={''} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/perfil' element={<Perfil />} />
      </Routes>
    </HashRouter>

  )
}

export default App
