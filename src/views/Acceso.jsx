import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Acceso() {
const navigate = useNavigate();

    const handleSubmit = () => {
      navigate('/')
    };

    return (
        <div className="container mt-5">
            <h2>Iniciar sesión</h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Correo electrónico:</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña:</label>
                            <input type="password" className="form-control" id="password" required />
                        </div>

                        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </div>
    );
}



