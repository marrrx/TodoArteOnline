import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginAdmin() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/admin/panel');
    };

    return (
        <div className="container p-5">
            <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', backgroundColor: '#f9f9f9', maxWidth: '400px', margin: 'auto' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Iniciar sesión como administrador</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" style={{ color: '#333' }}>Código de administrador:</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" style={{ color: '#333' }}>Contraseña:</label>
                        <input type="password" className="form-control" id="password" required />
                    </div>
                    <br />
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

