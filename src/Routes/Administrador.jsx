import { useState } from "react";
import PropTypes from 'prop-types';
import StylesAdmin from '../Styles/Administrador.module.css';
import { useNavigate } from 'react-router-dom';

function Administrador({ listaProductos }) {
    const navigate = useNavigate();
    const [mostrarLista, setMostrarLista] = useState(false);
    const [productos, setProductos] = useState(listaProductos);
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);
    const [productIdToDelete, setProductIdToDelete] = useState(null);

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
        setProductos(productos.filter(producto => producto.id !== id));
        setShowConfirmPopup(false); // Oculta el popup después de eliminar
    };

    const handleDeleteClick = (id) => {
        setProductIdToDelete(id); // Guarda el id del producto a eliminar
        setShowConfirmPopup(true); // Muestra el popup de confirmación
    };

    const confirmDelete = () => {
        eliminarProducto(productIdToDelete); // Llama a eliminar con el id guardado
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
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOMBRE</th>
                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((producto) => (
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>
                                    <div className="cambios-estados">
                                        <button className={StylesAdmin.botonesEditar}>Editar</button>
                                        <button onClick={() => handleDeleteClick(producto.id)} className={StylesAdmin.botonesEliminar}>Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {showConfirmPopup && (
                <div className={StylesAdmin.confirmPopup}>
                    <p>¿Estás seguro de que quieres eliminar este producto?</p>
                    <button onClick={confirmDelete} className={StylesAdmin.confirmButton}>Confirmar</button>
                    <button onClick={() => setShowConfirmPopup(false)} className={StylesAdmin.cancelButton}>Cancelar</button>
                </div>
            )}

            <div className={StylesAdmin.mensajeMovil}>
                <div className={StylesAdmin.fraseMovil}>
                    <span className={StylesAdmin.frase2Movil}>Atención</span>No es posible entrar al Panel de Administración desde este dispositivo.
                </div>
                <button onClick={botonMovil} className={StylesAdmin.botonMovil}>Volver a inicio</button>
            </div>
        </>
    );
}

Administrador.propTypes = {
    listaProductos: PropTypes.array.isRequired,
};

export default Administrador;
