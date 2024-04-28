import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
                <div className="container-fluid text-center">
                    <div className="row w-100">
                        <div className='col-6'>

                            <a className="navbar-brand" onClick={handleHome} title='Enlace a la landing page'><img src="https://raw.githubusercontent.com/marrrx/Imagenes/main/logo.png" alt='Imagen que nos muestra el logo de la tienda' title='Logo de la tienda' style={{ width: 100, height: 100 }} /></a>
                        </div>

                        <div className='col-6 text-end'>
                            <button className="navbar-toggler" onClick={toggleMenu}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className='col-6 align-content-center'>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
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
                            </li>
                            <li className="nav-item">
                                <Link to={'carrito'} title='Enlace a Carrito'>
                                    <a className="nav-link active" aria-current="page" onClick={toggleMenu} title='Enlace a Carrito'>Carrito</a>
                                </Link>
                            </li>
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