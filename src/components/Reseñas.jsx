import React, { useState } from 'react';

function Reseñas() {
    const [reseñas, setReseñas] = useState([]);
    const [nuevaReseña, setNuevaReseña] = useState({
        nombre: '',
        correo: '',
        comentario: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNuevaReseña(prevReseña => ({
            ...prevReseña,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Agregar la nueva reseña al estado de las reseñas
        setReseñas(prevReseñas => [...prevReseñas, nuevaReseña]);
        // Limpiar el estado de la nueva reseña
        setNuevaReseña({
            nombre: '',
            correo: '',
            comentario: ''
        });

    };

    return (
        <div style={{ padding:35 }}>
            <h3>Reseñas</h3>
            <hr/>
            <div className='row' >
                <div className='col'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Comentario</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reseñas.map((res, index) => (
                                <tr key={index}>
                                    <td>{res.nombre}</td>
                                    <td>{res.correo}</td>
                                    <td>{res.comentario}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='col' style={{ width: 400 }}>
                    <form onSubmit={handleSubmit} className='form-control p-3'>
                        <div className='row'>

                            <div className='col'>
                                <div className="mb-3 ">
                                    <label className="form-label">Nombre:</label>
                                    <input type="text" className="form-control" name="nombre" value={nuevaReseña.nombre} onChange={handleChange} />
                                </div>
                            </div>

                            <div className='col'>
                                <div className="mb-3 ">
                                    <label className="form-label">Correo:</label>
                                    <input type="email" className="form-control" name="correo" value={nuevaReseña.correo} onChange={handleChange} />
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Comentario:</label>
                            <textarea className="form-control" name="comentario" value={nuevaReseña.comentario} onChange={handleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary">Agregar Reseña</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Reseñas;
