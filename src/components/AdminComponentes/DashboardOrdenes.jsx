import React from 'react'
import ordenes from '/src/data/ordenes.json'


export default function DashboardOrdenes() {
    return (
        <>
            <div className="col">
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Últimas 10 ordenes</h5>
                        <hr />
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>ID</th>
                                    <th scope='col'>Cliente</th>
                                    <th scope='col'>Estado</th>
                                    <th scope='col'>Total</th>
                                    <th scope='col'>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ordenes.map(orden => (
                                    <tr key={orden.id}>
                                        <td>{orden.id}</td>
                                        <td>{orden.cliente}</td>
                                        <td>{orden.estado}</td>
                                        <td>${orden.total}</td>
                                        <td><button className='btn btn-warning'>Editar</button></td>
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
