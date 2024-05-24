import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Carrito from './Carrito';
import ListaDeseos from './ListaDeseos';
import { MyContext } from '../Context';

export default function Navbar() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const { setSearchGlobal } = useContext(MyContext);

    const handleHome = () => {
        navigate('/');
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleSearchChange = (e) => {
        setSearchGlobal(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        closeMenu();
        navigate('productos');
    };

    return (
        <header className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'black' }}>
            <div className="container">
                <a onClick={handleHome} className="navbar-brand" title="Enlace a la landing page" style={{ color: 'white', cursor: 'pointer' }}>
                    <img src="https://raw.githubusercontent.com/marrrx/Imagenes/main/logo.png" alt="Logo de la tienda" style={{ height: 100, width: 100, marginRight: 20 }} />
                </a>

                <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarHeader">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="perfil" className="nav-link" style={{ color: 'white' }} title="Perfil" onClick={closeMenu}>Perfil</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="productos" className="nav-link" style={{ color: 'white' }} title="Productos" onClick={closeMenu}>Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="login" className="nav-link" style={{ color: 'white' }} title="Iniciar Sesión" onClick={closeMenu}>Iniciar Sesión</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="registro" className="nav-link" style={{ color: 'white' }} title="Regístrate" onClick={closeMenu}>Regístrate</Link>
                        </li>
                    </ul>
                    <form className="d-flex ms-auto" onSubmit={handleSearchSubmit}>
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" onChange={handleSearchChange} />
                        <button className="btn btn-primary" type="submit">Buscar</button>
                    </form>
                    <br />
                    <div className="dropdown ms-3">
                        <button className="btn btn-secondary" style={{backgroundColor: 'black'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.920 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                            </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" style={{ width: 600 }}>
                            <ListaDeseos />
                        </div>
                    </div>
                    <br />
                    <div className="dropdown ms-3">
                        <button className="btn btn-secondary" style={{backgroundColor: 'black'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" style={{  width: 600 }}>
                            <Carrito />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`overlay ${menuOpen ? 'show' : ''}`} onClick={closeMenu}></div>
            <style jsx>{`
                .overlay {
                    display: ${menuOpen ? 'block' : 'none'};
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 999;
                }
                .navbar-collapse {
                    z-index: 1000;
                }

                @media (max-width: 768px) {
                    .navbar-toggler {
                        display: block; 
                    }
                }
            `}</style>
        </header>
    );
}