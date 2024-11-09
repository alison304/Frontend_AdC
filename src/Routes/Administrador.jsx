import { useState } from "react";
import PropTypes from 'prop-types';
import StylesAdmin from '../Styles/Administrador.module.css';
import { useNavigate } from 'react-router-dom';

function Administrador({ listaProductos = [], listaCategorias = [] }) {
    const navigate = useNavigate();
    const [mostrarLista, setMostrarLista] = useState(false);
    const [productos, setProductos] = useState(listaProductos);
    const [categorias, setCategorias] = useState(listaCategorias);
    const [productoAEliminar, setProductoAEliminar] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);

    const listarProducto = () => {
        setMostrarLista(true);
    };

    const agregarProducto = () => {
        navigate('/admin/agregarProducto');
    };

    const botonMovil = () => {
        navigate('/');
    };

    const eliminarProducto = (id) => {
        const nuevosProductos = productos.filter(producto => producto.id !== id);
        setProductos(nuevosProductos);
    };

    const cancelarEliminar = () => {
        setMostrarModal(false);
        setProductoAEliminar(null);
    };

    const handleDelete = (id) => {
        const confirmed = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
        if (confirmed) {
            eliminarProducto(id);
        }
    };

    const handleCategoriaChange = (id, nuevaCategoria) => {
        const productosActualizados = productos.map(producto => 
            producto.id === id ? { ...producto, categoria: nuevaCategoria } : producto
        );
        setProductos(productosActualizados);
    };

    return (
        <>
            <section className={StylesAdmin.seccionPrincipal}>
                <div className={StylesAdmin.titulo}>Panel de Administración</div>
                <div className={StylesAdmin.botones}>
                    <button onClick={listarProducto} className={StylesAdmin.botonesPrincipales}>LISTAR PRODUCTOS</button>
                    <button onClick={agregarProducto} className={StylesAdmin.botonesPrincipales}>AGREGAR PRODUCTO</button>
                </div>
            </section>
            {mostrarLista && (
                productos.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOMBRE</th>
                                <th>CATEGORÍA</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto) => (
                                <tr key={producto.id}>
                                    <td>{producto.id}</td>
                                    <td>{producto.nombre}</td>
                                    <td>
                                        <select
                                            value={producto.categoria || ""}
                                            onChange={(e) => handleCategoriaChange(producto.id, e.target.value)}
                                        >
                                            <option value="">Selecciona una categoría</option>
                                            {categorias && categorias.map((categoria) => (
                                                <option key={categoria.id} value={categoria.nombre}>
                                                    {categoria.nombre}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td>
                                        <div className="cambios-estados">
                                            <button className={StylesAdmin.botonesEditar}>Editar</button>
                                            <button onClick={() => handleDelete(producto.id)} className={StylesAdmin.botonesEliminar}>Eliminar</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No hay productos para mostrar.</p>
                )
            )}
            <div className={StylesAdmin.mensajeMovil}>
                <div className={StylesAdmin.fraseMovil}>
                    <span className={StylesAdmin.frase2Movil}>Atención</span>No es posible entrar al Panel de Administración desde este dispositivo.
                </div>
                <button onClick={botonMovil} className={StylesAdmin.botonMovil}>Volver a inicio</button>
            </div>

            {mostrarModal && (
            <div className="modal-overlay">
                <div className="modal">
                    <p>¿Estás seguro de que deseas eliminar este producto?</p>
                    <div className="modal-buttons">
                        <button onClick={cancelarEliminar} className="cancel-button">Cancelar</button>
                        <button onClick={() => eliminarProducto(productoAEliminar)} className="delete-button">Eliminar</button>
                    </div>
                </div>
            </div>
            )}
        </>
    );
}

Administrador.propTypes = {
    listaProductos: PropTypes.array,
    listaCategorias: PropTypes.array,
};

Administrador.defaultProps = {
    listaProductos: [],
    listaCategorias: []
};

export default Administrador;
