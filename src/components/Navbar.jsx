import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Acceso from '../views/Acceso';


export default function Navbar() {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/')
    }
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
                            <ul className="nav text">
                                <li className="nav-item">
                                    <Link to={'productos'}>
                                        <a className="nav-link active" aria-current="page" >Productos</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'favoritos'}>
                                        <a className="nav-link active" aria-current="page" >Favoritos</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'carrito'}>
                                        <a className="nav-link active" aria-current="page" >Productos</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-current="page" >Usuario</a>
                                </li>
                                <li className="nav-item">
                                    <Link to={'acceso'}>
                                    <a className="nav-link active" aria-current="page" >Iniciar sesion</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </nav >
        </>
    )
}
