import { Modal } from 'bootstrap';
import React, { useState, useRef, useEffect, useContext } from 'react';
import { MyContext } from '../Context';
import { useNavigate } from 'react-router-dom';

export default function AdminCategorias() {
    const { categorias, setCategorias } = useContext(MyContext);
    const [idCategorias, setIdCategorias] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [currentCategoria, setCurrentCategoria] = useState(null);
    const modalRef = useRef();
    const nombreCategoriaRef = useRef();

    useEffect(() => {
        const modalElement = modalRef.current;
        const modalInstance = new Modal(modalElement, {
            backdrop: 'static',
            keyboard: false
        });

        return () => {
            modalInstance.dispose();
        };
    }, []);

    const handleAgregarCategoria = () => {
        const nombreCategoria = nombreCategoriaRef.current.value;
        if (nombreCategoria.trim() !== '') {
            if (isEditing && currentCategoria) {
                // Editar categoría existente
                const updatedCategorias = categorias.map(categoria =>
                    categoria.id === currentCategoria.id
                        ? { ...categoria, nombre: nombreCategoria }
                        : categoria
                );
                setCategorias(updatedCategorias);
            } else {
                // Agregar nueva categoría
                const nuevaCategoria = {
                    id: idCategorias + 1,
                    nombre: nombreCategoria
                };
                setCategorias([...categorias, nuevaCategoria]);
                setIdCategorias(idCategorias + 1);
            }
            nombreCategoriaRef.current.value = '';
            handleCloseModal();
        } else {
            alert('Por favor, ingrese un nombre de categoría.');
        }
    };

    const handleClickModal = (categoria = null) => {
        setIsEditing(categoria !== null);
        setCurrentCategoria(categoria);
        if (categoria) {
            nombreCategoriaRef.current.value = categoria.nombre;
        } else {
            nombreCategoriaRef.current.value = '';
        }
        const modalElement = modalRef.current;
        const modalInstance = Modal.getInstance(modalElement);
        modalInstance.show();
    };

    const handleCloseModal = () => {
        setCurrentCategoria(null);
        const modalElement = modalRef.current;
        const modalInstance = Modal.getInstance(modalElement);
        modalInstance.hide();
    };

    const handleEliminarCategoria = (id) => {
        setCategorias(categorias.filter(categoria => categoria.id !== id));
    };
    const navigate = useNavigate();

    return (
        <>
            <div className='container justify-content-center p-xxl-5'>
                <div className='row'>
                    <div className='col'>
                        <button onClick={() => navigate('/admin/dashboard')}>
                            Regresar
                        </button>
                    </div>
                </div>
                <hr />

                <div className='m-3'>
                    <button onClick={() => handleClickModal()} className='btn btn-success'>
                        ➕
                    </button>
                </div>

                <table className='table table-light'>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorias.map((categoria) => (
                            <tr key={categoria.id} className='align-middle'>
                                <td>{categoria.id}</td>
                                <td>{categoria.nombre}</td>
                                <td className='align-middle'>
                                    <button className='btn btn-warning m-1' onClick={() => handleClickModal(categoria)}>
                                        Editar
                                    </button>
                                    <button className='btn btn-danger' onClick={() => handleEliminarCategoria(categoria.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={modalRef}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{isEditing ? 'Editar Categoría' : 'Agregar Categoría'}</h5>
                            <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="nombreCategoria">Nombre</label>
                                    <input type="text" className="form-control" placeholder="Nombre de la Categoría" id="nombreCategoria" ref={nombreCategoriaRef} required />
                                </div>
                                <br />
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" onClick={handleAgregarCategoria}>{isEditing ? 'Guardar cambios' : 'Agregar'}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
