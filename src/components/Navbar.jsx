import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Carrito from './Carrito';
import ListaDeseos from './ListaDeseos';

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
                            <div className="dropdown">
                                <button className="btn btn-secondary navbar-toggler me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.920 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                    </svg>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end" style={{ width: 600 }}>
                                    <ListaDeseos />
                                </div>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary navbar-toggler me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
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
                            height: menuOpen ? '100vh' : 'auto', // Cambia la altura cuando esté abierto o cerrado
                            position: menuOpen ? 'fixed' : 'static', // Ajusta el posicionamiento
                            right: 0,
                            top: 0,
                            zIndex: 3, // Asegúrate de que el menú tenga un índice de apilamiento más alto
                            transition: 'background-color 0.3s ease' // Agregamos una transición suave al cambiar el color de fondo
                        }}>
                        {menuOpen && (
                            <ul className="nav flex-column text text-end" style={{ padding: '10px', margin: 0 }}>
                                <li className="nav-item" style={{ marginBottom: '10px' }}>
                                    <Link to={'perfil'} title='Enlace a Perfil'>
                                        <a className="nav-link active" onClick={toggleMenu} title='Enlace a perfil' style={{ color: 'white' }}>
                                            <i className="fas fa-box-open" style={{ marginRight: '5px' }}></i> Perfil
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item" style={{ marginBottom: '10px' }}>
                                    <Link to={'productos'} title='Enlace a Productos'>
                                        <a className="nav-link active" onClick={toggleMenu} title='Enlace a productos' style={{ color: 'white' }}>
                                            <i className="fas fa-box-open" style={{ marginRight: '5px' }}></i> Productos
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item" style={{ marginBottom: '10px' }}>
                                    <Link to={'login'} title='Enlace a Login'>
                                        <a className="nav-link active" onClick={toggleMenu} title='Enlace a login' style={{ color: 'white' }}>
                                            <i className="fas fa-box-open" style={{ marginRight: '5px' }}></i> Inicia sesión
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item" style={{ marginBottom: '10px' }}>
                                    <Link to={'registro'} title='Enlace a Registro'>
                                        <a className="nav-link active" onClick={toggleMenu} title='Enlace a registro' style={{ color: 'white' }}>
                                            <i className="fas fa-box-open" style={{ marginRight: '5px' }}></i> Regístrate
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
