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
                        <div className='col-2'>
                            <a className="navbar-brand" onClick={handleHome}><img src="https://raw.githubusercontent.com/marrrx/Imagenes/main/logo.png" style={{ width: 100, height: 100 }} /></a>
                        </div>
                        <div className='col-6 align-content-center'>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                        <div className='col-3 align-content-center'>
                            <div className={`navbar-toggler ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>

                {menuOpen && (
                    <div className="menu-right">
                        <ul className="nav text">
                            <li className="nav-item">
                                <Link to={'productos'}>
                                    <a className="nav-link active" aria-current="page" onClick={toggleMenu}>Productos</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'favoritos'}>
                                    <a className="nav-link active" aria-current="page" onClick={toggleMenu}>Favoritos</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'carrito'}>
                                    <a className="nav-link active" aria-current="page" onClick={toggleMenu}>Carrito</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'acceso'}>
                                    <a className="nav-link active" aria-current="page" onClick={toggleMenu}>Iniciar sesión</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'signin'}>
                                        <a className="nav-link active" aria-current="page" onClick={toggleMenu}>Registrarse</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}
