import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState } from 'react';
import usuarios from '../data/usuarios.json'; 


export default function Acceso() {
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
  
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Busca el usuario en el archivo JSON
        const usuarioEncontrado = usuarios.find(usuario => usuario.id == id && usuario.email == email );

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
        <div>
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">ID:</label><br />
                    <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="email">Correo electrónico:</label><br />
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                
                <div>
                    <input type="submit" value="Iniciar sesión" />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </form>
        </div>
        <Footer />
        </>);
}

