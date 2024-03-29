import React from 'react'
import usuarios from '/src/data/usuarios.json'


export default function DashboardUsers() {
    return (
        <>
            <div className="col-7">
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Últimos usuarios registrados</h5>
                        <hr />
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>ID</th>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Telefono</th>
                                    <th scope='col'>Dirección</th>
                                    <th scope='col'>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map(usuario => (
                                    <tr key={usuario.id}>
                                        <td>{usuario.id}</td>
                                        <td>{usuario.nombre}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.telefono}</td>
                                        <td>{usuario.direccion}</td>
                                        <td><button className='btn btn-danger'>Borrar</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
        </>
    )
}
