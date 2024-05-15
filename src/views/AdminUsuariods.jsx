import { Modal } from 'bootstrap';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminUsuarios() {
    const [usuarios, setUsuarios] = useState([]);  // Local state for users
    const [isEditing, setIsEditing] = useState(false);
    const [currentUsuario, setCurrentUsuario] = useState(null);
    const modalRef = useRef();
    const nombreRef = useRef();
    const emailRef = useRef();
    const telefonoRef = useRef();
    const direccionRef = useRef();
    const contrasenaRef = useRef();

    useEffect(() => {
        import('../data/usuarios.json')
            .then(data => {
                setUsuarios(data.default);
            })
            .catch(error => {
                console.error('Error al cargar los datos:', error);
            });
    }, []);

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

    const handleEditarUsuario = () => {
        const nombre = nombreRef.current.value;
        const email = emailRef.current.value;
        const telefono = telefonoRef.current.value;
        const direccion = direccionRef.current.value;
        const contrasena = contrasenaRef.current.value;

        if (nombre.trim() !== '' && email.trim() !== '') {
            if (isEditing && currentUsuario) {
                const updatedUsuarios = usuarios.map(usuario =>
                    usuario.id === currentUsuario.id
                        ? { ...usuario, nombre, email, telefono, direccion, contrasena }
                        : usuario
                );
                setUsuarios(updatedUsuarios);
            } else {
                const newUsuario = {
                    id: usuarios.length + 1,
                    nombre,
                    email,
                    telefono,
                    direccion,
                    contrasena
                };
                setUsuarios([...usuarios, newUsuario]);
            }

            handleCloseModal();
        } else {
            alert('Por favor, ingrese un nombre y email.');
        }
    };

    const handleClickModal = (usuario = null) => {
        setIsEditing(usuario !== null);
        setCurrentUsuario(usuario);
        if (usuario) {
            nombreRef.current.value = usuario.nombre;
            emailRef.current.value = usuario.email;
            telefonoRef.current.value = usuario.telefono;
            direccionRef.current.value = usuario.direccion;
            contrasenaRef.current.value = usuario.contrasena;
        } else {
            nombreRef.current.value = '';
            emailRef.current.value = '';
            telefonoRef.current.value = '';
            direccionRef.current.value = '';
            contrasenaRef.current.value = '';
        }
        const modalElement = modalRef.current;
        const modalInstance = Modal.getInstance(modalElement);
        modalInstance.show();
    };

    const handleCloseModal = () => {
        setCurrentUsuario(null);
        const modalElement = modalRef.current;
        const modalInstance = Modal.getInstance(modalElement);
        modalInstance.hide();
    };

    const handleEliminarUsuario = (id) => {
        setUsuarios(usuarios.filter(usuario => usuario.id !== id));
    };

    const navigate = useNavigate();

    return (
        <>
            <div className='container justify-content-center p-xxl-5'>
                <div className='row'>
                    <div className='col'>
                        <button onClick={() => navigate('/admin/panel')}>
                            Regresar
                        </button>
                    </div>
                </div>
                <hr />

                <table className='table table-light'>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Email</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id} className='align-middle'>
                                <td>{usuario.id}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.telefono}</td>
                                <td>{usuario.direccion}</td>
                                <td className='align-middle'>
                                    <button className='btn btn-warning m-1' onClick={() => handleClickModal(usuario)}>
                                        Editar
                                    </button>
                                    <button className='btn btn-danger' onClick={() => handleEliminarUsuario(usuario.id)}>
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
                            <h5 className="modal-title" id="exampleModalLabel">{isEditing ? 'Editar Usuario' : 'Agregar Usuario'}</h5>
                            <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" className="form-control" placeholder="Nombre" id="nombre" ref={nombreRef} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" placeholder="Email" id="email" ref={emailRef} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telefono">Teléfono</label>
                                    <input type="text" className="form-control" placeholder="Teléfono" id="telefono" ref={telefonoRef} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="direccion">Dirección</label>
                                    <input type="text" className="form-control" placeholder="Dirección" id="direccion" ref={direccionRef} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contrasena">Contraseña</label>
                                    <input type="password" className="form-control" placeholder="Contraseña" id="contrasena" ref={contrasenaRef} />
                                </div>
                                <br />
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" onClick={handleEditarUsuario}>{isEditing ? 'Guardar cambios' : 'Agregar'}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
