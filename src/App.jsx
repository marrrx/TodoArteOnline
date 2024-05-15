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
import Productos from './views/Productos';
import Comunicate from './views/Comunicate';
import Preguntas from './views/Preguntas';
import Acceso from './views/Acceso';
import Registro from './views/Registro';
import AdminProductos from './views/AdminProductos';
import LoginAdmin from './views/LoginAdmin';
import AdminCategorias from './views/AdminCategorias';
import RegistroAdmin from './views/RegistroAdmin';
import AdminUsuarios from './views/AdminUsuariods';
import AdminPanel from './views/Dashboard';


function App() {

  const initialOptions = {
    "client-id": "AWBf_rJXUjqxMy7fR6dJ8qUE2ssbx6SYS98-4CzdfkRu6W3af2MS0XWDQ49zEWJqsD10I81n5E2JWbEx",
    currency: "MXN",
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
              <Route path='/perfil' element={<Perfil />} />
              <Route path='/productos' element={<Productos />} />
              <Route path='/comunicate' element={<Comunicate/>} />
              <Route path='/preguntas' element={<Preguntas/>}  />
              <Route path='/login' element={<Acceso/>} />
              <Route path='/registro' element={<Registro/>} />

            </Route>
            <Route path='/registrarse' element={<RegistroAdmin />} />
            <Route path='/admin' element={<LoginAdmin />} />
            <Route path='/admin/panel' element={<AdminPanel />} />
            <Route path='/admin/crud/productos' element={<AdminProductos />} />
            <Route path='/admin/crud/categorias' element={<AdminCategorias />} />
            <Route path='/admin/crud/usuarios' element={<AdminUsuarios />} />



          </Routes>
        </MyContextProvider>
      </PayPalScriptProvider>
    </HashRouter>
  )
}

export default App
