import React, { useEffect, useState } from 'react';

export default function Perfil() {
    const [usuarios, setUsuarios] = useState({});
    const [editando, setEditando] = useState(false);


    useEffect(() => {
        import('../data/usuarios.json')
            .then(data => {
                setUsuarios(data.default[0]);
            })
            .catch(error => {
                console.error('Error al cargar los datos:', error);
            });
    }, []);

    const handleEdit = () => {
        setEditando(!editando);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuarios(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    return (
        <>
            <div className='container'>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', marginTop: '25px' }}>
                    <div className='mb-4'>
                        <img src="https://raw.githubusercontent.com/marrrx/Imagenes/main/images/10.jpeg" alt="Usuario" style={{ borderRadius: '50%', width: '250px', height: '250px' }} />
                    </div>
                    <button className='btn btn-warning mb-4' onClick={handleEdit}>{editando ? 'Guardar' : 'Editar'}</button>
                    <div style={{ marginBottom: '20px', backgroundColor: 'lightgrey', width: '100%', padding: '20px' }}>
                        <h2>Nombre del usuario:</h2>
                        <input
                            name="nombre"
                            value={usuarios.nombre || ''}
                            disabled={!editando}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div style={{ marginBottom: '20px', backgroundColor: 'lightgrey', width: '100%', padding: '20px' }}>
                        <h2>Email:</h2>
                        <input
                            name="email"
                            value={usuarios.email || ''}
                            disabled={!editando}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div style={{ marginBottom: '20px', backgroundColor: 'lightgrey', width: '100%', padding: '20px' }}>
                        <h2>Dirección:</h2>
                        <input
                            name="direccion"
                            value={usuarios.direccion || ''}
                            disabled={!editando}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div style={{ marginBottom: '20px', backgroundColor: 'lightgrey', width: '100%', padding: '20px' }}>
                        <h2>Telefono:</h2>
                        <input
                            name="telefono"
                            value={usuarios.telefono || ''}
                            disabled={!editando}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div style={{ marginBottom: '30px', backgroundColor: 'lightgrey', width: '100%', padding: '20px' }}>
                        <h2>Contraseña:</h2>
                        <input
                            name="contraseña"
                            value={usuarios.contraseña || ''}
                            disabled={!editando}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
