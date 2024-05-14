import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function LoginAdmin() {
const navigate = useNavigate();

    const handleSubmit = () => {
      navigate('/')
    };

    return (
        <div className="container mt-5">
            <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', backgroundColor: '#f9f9f9' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Iniciar sesión como administrador</h2>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Código de administrador</label>
                                <input type="email" className="form-control" id="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña:</label>
                                <input type="password" className="form-control" id="password" required />
                            </div>
                            <br></br>
                            <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                        </form>
                    </div>
                </div>
            </div>
            <br></br>
        </div>

        
    );
}
