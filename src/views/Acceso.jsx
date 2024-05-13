import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import usuarios from '../data/usuarios.json'; // Supongo que tienes un archivo JSON con datos de usuarios

export default function Acceso() {
    const [tipoUsuario, setTipoUsuario] = useState('usuario'); // Por defecto, inicia como usuario
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validaciones para correo electrónico
        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Por favor ingresa un correo electrónico válido.');
            return;
        }

        // Busca el usuario en el archivo JSON según el tipo de usuario y la contraseña
        const usuarioEncontrado = tipoUsuario === 'usuario' ?
            usuarios.find(usuario => usuario.email === email && usuario.password === password) :
            null; // Si es administrador, la búsqueda se hace de manera diferente

        if (!usuarioEncontrado) {
            setError('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
            return;
        }

        // Si el usuario es encontrado, puedes realizar alguna acción, como redirigir a una página de inicio de sesión exitosa
        console.log('Inicio de sesión exitoso:', usuarioEncontrado);
    };

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h2>Iniciar sesión</h2>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="form-group">
                            <label htmlFor="tipoUsuario">Selecciona el tipo de usuario:</label>
                            <select className="form-control" id="tipoUsuario" value={tipoUsuario} onChange={(e) => setTipoUsuario(e.target.value)}>
                                <option value="usuario">Usuario</option>
                                <option value="administrador">Administrador</option>
                            </select>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Correo electrónico:</label>
                                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña:</label>
                                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>

                            <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                            {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}



