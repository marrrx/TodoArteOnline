import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Perfil from './views/Perfil';
import Inicio from './views/Inicio';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />

      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
