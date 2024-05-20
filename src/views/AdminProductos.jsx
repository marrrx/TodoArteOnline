import React, { useEffect, useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'bootstrap';
import { MyContext } from '../Context';

export default function AdminProductos() {
    const { categorias, setCategorias } = useContext(MyContext);

    const [productos, setProductos] = useState([]);
    const [modalInstance, setModalInstance] = useState(null);
    const modalRef = useRef();
    const [idProductos, setIdProductos] = useState(0);
    const [idImagenes, setIdImagenes] = useState(0);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        import('../data/productos.json')
            .then(data => {
                setProductos(data.default);
                setIdProductos(data.default.length);
            })
            .catch(error => {
                console.error('Error al cargar los datos:', error);
            });
    }, []);

    useEffect(() => {
        const modalElement = modalRef.current;
        const modal = new Modal(modalElement, {
            backdrop: 'static',
            keyboard: false
        });

        setModalInstance(modal);

        return () => {
            if (modalInstance) {
                modalInstance.dispose();
                document.body.style.overflow = 'auto';
            }
        };
    }, []);

    const handleClickModal = (product = null) => {
        setIsEditing(product !== null);
        setCurrentProduct(product);
        console.log(product)
        if (modalInstance) {
            modalInstance.show();
        }
    };

    const handleCloseModal = () => {
        setCurrentProduct(null);
        if (modalInstance) {
            modalInstance.hide();
            document.body.style.overflow = 'auto';
        }
    };

    const handleAgregarProducto = () => {
        const nombreProducto = document.getElementById('nombreProducto').value;
        const precioProducto = document.getElementById('precioProducto').value;
        const descripcionProducto = document.getElementById('descripcionProducto').value;
        const descripcionProductoCorta = document.getElementById('descripcionProductoCorta').value;
        const autor = document.getElementById('autor').value;
        const categoriaProducto = document.getElementById('categoriaProducto').value;
        const imagenInput = document.getElementById('imagenInput');

        if (nombreProducto.trim() !== '' && categoriaProducto !== '' && precioProducto !== '' && imagenInput.files.length > 0) {
            const nuevoProducto = {
                id: isEditing ? currentProduct.id : idProductos + 1,
                nombre: nombreProducto.trim(),
                precio: parseFloat(precioProducto),
                descripcion: descripcionProducto.trim(),
                descripcionCorta: descripcionProductoCorta.trim(),
                autor: autor.trim(),
                categoría: categoriaProducto,
                imagen: URL.createObjectURL(imagenInput.files[0])
            };

            if (isEditing) {
                setProductos(productos.map(product => product.id === currentProduct.id ? nuevoProducto : product));
            } else {
                setProductos([...productos, nuevoProducto]);
                setIdProductos(idProductos + 1);
                setIdImagenes(idImagenes + 1);
            }

            handleCloseModal();
        } else {
            alert('Por favor, complete todos los campos requeridos.');
        }
    };

    const handleEliminarProducto = (id) => {
        setProductos(productos.filter(product => product.id !== id));
    };

    const navigate = useNavigate();

    return (
        <>
            <div className='container justify-content-center p-xxl-5 '>
                <div className='row'>
                    <div className='col'>
                        <button onClick={() => navigate('/admin/panel')}>
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
                            <th scope="col">Descripcion</th>
                            <th scope="col">Descripcion corta</th>
                            <th scope="col">Autor</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Imagen</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((product) => (
                            <tr key={product.id} className='align-middle'>
                                <td>{product.id}</td>
                                <td>{product.nombre}</td>
                                <td style={{ width: 300 }}>{product.descripcion}</td>
                                <td style={{ width: 300 }}>{product.descripcionCorta}</td>
                                <td>{product.autor}</td>
                                <td>{product.categoría}</td>
                                <td>${product.precio}</td>
                                <td><img src={product.imagen} alt={product.nombre} style={{ width: 150, height: 150 }} /></td>
                                <td className='align-middle'>
                                    <button className='btn btn-warning m-1' onClick={() => handleClickModal(product)}>
                                        Editar
                                    </button>
                                    <button className='btn btn-danger' onClick={() => handleEliminarProducto(product.id)}>
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
                            <h5 className="modal-title" id="exampleModalLabel">{isEditing ? 'Editar pintura' : 'Agregar pintura'}</h5>
                            <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="nombreProducto">Nombre</label>
                                    <input type="text" className="form-control" placeholder="Nombre del Producto" id="nombreProducto" defaultValue={currentProduct ? currentProduct.nombre : ''} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="precioProducto">Precio</label>
                                    <input type="number" className="form-control" placeholder="Precio" id="precioProducto" defaultValue={currentProduct ? currentProduct.precio : ''} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="descripcionProducto">Descripción</label>
                                    <textarea className="form-control" id="descripcionProducto" rows="3" defaultValue={currentProduct ? currentProduct.descripcion : ''} required></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="descripcionProductoCorta">Descripción corta</label>
                                    <textarea className="form-control" id="descripcionProductoCorta" rows="2" defaultValue={currentProduct ? currentProduct.descripcionCorta : ''} required></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="autor">Autor</label>
                                    <textarea className="form-control" id="autor" defaultValue={currentProduct ? currentProduct.autor : ''} required></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="categoriaProducto">Selecciona la categoría</label>
                                    <select className="form-control" id="categoriaProducto" defaultValue={currentProduct ? currentProduct.categoría : ''} required>
                                        {categorias.map((categoria) => (
                                            <option value={categoria.nombre} key={categoria.id}>{categoria.nombre}</option>
                                        ))}
                                    </select>
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="imagenInput">Elige una imagen:</label>
                                    <input type="file" className="form-control-file" id="imagenInput" accept="image/*" required={!isEditing} />
                                </div>
                                <br />
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" onClick={handleAgregarProducto}>{isEditing ? 'Guardar cambios' : 'Agregar'}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
