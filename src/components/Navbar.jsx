import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Carrito from './Carrito';

export default function Navbar() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleHome = () => {
        navigate('/');
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="navbar" style={{ backgroundColor: 'black', height: 150 }} data-bs-theme='dark'>
                <div className="text-center w-100 ">
                    <div className="row align-items-center">
                        <div className='col-3  justify-content-start align-items-center'>
                            <a className="navbar-brand" onClick={handleHome} title='Enlace a la landing page'>
                                <img src="https://raw.githubusercontent.com/marrrx/Imagenes/main/logo.png" alt='Imagen que nos muestra el logo de la tienda' title='Logo de la tienda' style={{ width: 100, height: 100 }} />
                            </a>
                        </div>
                        <div className='col-7 d-flex justify-content-center align-items-center'>
                            <form className="d-flex justify-content-center">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                        <div className='col-1  justify-content-between align-items-center'>
                            <div class="dropdown">
                                <button class="btn btn-secondary navbar-toggler" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                    </svg>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end" style={{width:600}}>
                                    <Carrito />
                                </div>

                            </div>
                        </div>
                        <div className='col-1  justify-content-end align-items-center'>
                            <button className="navbar-toggler" onClick={toggleMenu}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>



                <div className={`navbar-collapse justify-content-end ${menuOpen ? 'show' : ''}`} style={{ backgroundColor: menuOpen ? 'black' : 'transparent', width: '200px', height: 'calc(100vh - 150px)', position: 'fixed', top: '150px', right: 0, zIndex: 1 }}>
                    {menuOpen && (
                        <ul className="nav flex-column text text-end">
                            <li className="nav-item">
                                <Link to={'productos'} title='Enlace a Productos'>
                                    <a className="nav-link active" aria-current="page" onClick={toggleMenu} title='Enlace a productos'>Productos</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'favoritos'} title='Enlace a Favoritos'>
                                    <a className="nav-link active" aria-current="page" onClick={toggleMenu} title='Enlace a Favoritos'>Favoritos</a>
                                </Link>
                            </li>+
                            <li className="nav-item" title='Enlace a Inicio de Sesión'>
                                <Link to={'acceso'}>
                                    <a className="nav-link active" aria-current="page" onClick={toggleMenu} title='Enlace a Inicio de Sesión'>Iniciar sesión</a>
                                </Link>
                            </li>
                            <li className="nav-item" title='Enlace a Registro'>
                                <Link to={'signin'}>
                                    <a className="nav-link active" aria-current="page" onClick={toggleMenu} title='Enlace a Registro'>Registrarse</a>
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </>
    );
}