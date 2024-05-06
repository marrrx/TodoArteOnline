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
                        <div className='col-6 d-flex justify-content-center align-items-center'>
                            <form className="d-flex justify-content-center">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                        <div className='col-1 d-flex justify-content-between align-items-center ms-5  '>
                            <div class="dropdown">
                                <button class="btn btn-secondary navbar-toggler" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                    </svg>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end" style={{ width: 600 }}>
                                    <Carrito />
                                </div>
                            </div>
                            <button className="navbar-toggler" onClick={toggleMenu}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>


                    </div>
                </div>



                <div style={{ position: 'relative' }}>
                    {menuOpen && (
                        <div style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh', // Abarca todo el viewport verticalmente
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 2
                        }} onClick={toggleMenu}></div>
                    )}
                    <div className={`navbar-collapse justify-content-end ${menuOpen ? 'show' : ''}`}
                        style={{
                            backgroundColor: menuOpen ? 'black' : 'transparent',
                            width: '200px',
                            height: '100vh',
                            position: 'fixed',
                            right: 0,
                            top: 0,
                            zIndex: 3, // Asegúrate de que el menú tenga un índice de apilamiento más alto
                            transition: 'background-color 0.3s ease' // Agregamos una transición suave al cambiar el color de fondo
                        }}>
                        {menuOpen && (
                            <ul className="nav flex-column text text-end" style={{ padding: '10px', margin: 0 }}>
                                <li className="nav-item" style={{ marginBottom: '10px' }}>
                                    <Link to={'productos'} title='Enlace a Productos'>
                                        <a className="nav-link active" onClick={toggleMenu} title='Enlace a productos' style={{ color: 'white' }}>
                                            <i className="fas fa-box-open" style={{ marginRight: '5px' }}></i> Productos
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item" style={{ marginBottom: '10px' }}>
                                    <Link to={'favoritos'} title='Enlace a Favoritos'>
                                        <a className="nav-link active" onClick={toggleMenu} title='Enlace a Favoritos' style={{ color: 'white' }}>
                                            <i className="fas fa-heart" style={{ marginRight: '5px' }}></i> Favoritos
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item" style={{ marginBottom: '10px' }} title='Enlace a Inicio de Sesión'>
                                    <Link to={'acceso'}>
                                        <a className="nav-link active" onClick={toggleMenu} title='Enlace a Inicio de Sesión' style={{ color: 'white' }}>
                                            <i className="fas fa-sign-in-alt" style={{ marginRight: '5px' }}></i> Iniciar sesión
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item" style={{ marginBottom: '10px' }} title='Enlace a Registro'>
                                    <Link to={'signin'}>
                                        <a className="nav-link active" onClick={toggleMenu} title='Enlace a Registro' style={{ color: 'white' }}>
                                            <i className="fas fa-user-plus" style={{ marginRight: '5px' }}></i> Registrarse
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}