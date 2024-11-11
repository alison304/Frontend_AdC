import { useState } from "react";
import StylesAdmin from '../styles/Administrador.module.css';
import { useNavigate } from 'react-router-dom';
import { useProductosStates } from "../utils/Context";
import Swal from 'sweetalert2';

function Administrador() {
    console.log('RENDERIZANDO ADMIN');
    
    // Obtener el estado y el dispatch desde el contexto
    const { state, dispatch } = useProductosStates();
    const listaProductos = state.lista || [];
    const categorias = state.categorias || [];  // Default vacío para evitar error si no está definido
    
    console.log("Lista de productos:", listaProductos);
    console.log("Lista de categorías:", categorias);

    const navigate = useNavigate();
    const [mostrarLista, setMostrarLista] = useState(false);

    const listarProducto = () => {
        console.log('Mostrando lista de productos');
        setMostrarLista(true);
    };

    const agregarProducto = () => {
        navigate('/admin/agregarProducto');
    };

    const botonMovil = () => {
        navigate('/');
    };

    const eliminarProducto = (id) => {
        Swal.fire({
            title: "Aura de Cristal",
            text: "Deseas eliminar este producto?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(`Producto con ID ${id} eliminado`);
                // Aquí iría la lógica para eliminar el producto
            }
        });
    };

    const asignarCategoria = (productoId, categoriaId) => {
        console.log(`Asignando categoría ${categoriaId} a producto ${productoId}`);
        dispatch({
            type: "ASIGNAR_CATEGORIA",
            payload: { id: productoId, categoriaId }
        });
        Swal.fire("Éxito", "La categoría ha sido asignada al producto", "success");
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
                            <th>CATEGORÍA</th>
                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaProductos.map((producto) => (
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>
                                    <select
                                        value={producto.categoriaId || ""}
                                        onChange={(e) => asignarCategoria(producto.id, e.target.value)}
                                        className={StylesAdmin.selectorCategoria}
                                    >
                                        <option value="">Seleccione una categoría</option>
                                        {categorias.map((categoria) => (
                                            <option key={categoria.id} value={categoria.id}>
                                                {categoria.nombre}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                                <td>
                                    <div className="cambios-estados">
                                        <button className={StylesAdmin.botonesEditar}>Editar</button>
                                        <button onClick={() => eliminarProducto(producto.id)} className={StylesAdmin.botonesEliminar}>Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <div className={StylesAdmin.mensajeMovil}>
                <div className={StylesAdmin.fraseMovil}>
                    <span className={StylesAdmin.frase2Movil}>Atención</span> No es posible entrar al Panel de Administración desde este dispositivo.
                </div>
                <button onClick={botonMovil} className={StylesAdmin.botonMovil}>Volver a inicio</button>
            </div>
        </>
    );
}

export default Administrador;
