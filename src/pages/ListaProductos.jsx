import { useEffect, useState } from "react";
import axios from "axios";
import StylesAdmin from '../styles/ListaProductos.module.css';
import { useNavigate } from 'react-router-dom';
import { useProductosStates } from "../utils/Context";

const BASE_URL = "https://auradecristalapi-production.up.railway.app";

const ListaProductos = () => {
    const [id, setId] = useState('')
    const [nombre, setNombre] = useState("");
    const { state } = useProductosStates();
    const listaProductos = state.lista;
    const navigate = useNavigate();
    const [mostrarLista, setMostrarLista] = useState(true);

    const botonMovil = () => {
        navigate('/');
    };    

    return (
        <>
            <section className={StylesAdmin.seccionPrincipal}>
                <div className={StylesAdmin.titulo}>Listar Productos</div>
            </section>
            {mostrarLista && (
                <table>
                    <thead>
                        <tr>
                            {/* <th>ID</th> */}
                            <th className="tab-title">NOMBRE DE LOS PRODUCTOS EXISTENTES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaProductos.map((producto) => (
                            <tr key={producto.id}>
                                <td>{producto.nombre}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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

export default ListaProductos;
