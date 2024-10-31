import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StylesListaProductos from '../Styles/ListaProductos.module.css';
import CardProductos from '../Components/CardProductos';
import { useParams } from 'react-router-dom';
import ConfirmDeletePopup from '../Components/ConfirmDeletePopup';

function ListaProductos() {
    const params = useParams();
    const [productos, setProductos] = useState([]);
    const [productosEliminados, setProductosEliminados] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [productoAEliminar, setProductoAEliminar] = useState(null);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await axios.get('http://localhost:5000/productos');
                setProductos(response.data);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };

        fetchProductos();

        const eliminadosGuardados = JSON.parse(localStorage.getItem('productosEliminados')) || [];
        setProductosEliminados(eliminadosGuardados);
    }, []);

    useEffect(() => {
        localStorage.setItem('productosEliminados', JSON.stringify(productosEliminados));
    }, [productosEliminados]);

    const productosFiltrados = productos.filter(
        (producto) => producto.categoria_id === parseInt(params.id) && !productosEliminados.includes(producto.id)
    );

    const abrirPopup = (id) => {
        setProductoAEliminar(id);
        setIsPopupOpen(true);
    };

    const eliminarProducto = () => {
        if (productoAEliminar !== null) {
            setProductosEliminados((prev) => [...prev, productoAEliminar]);
            setProductoAEliminar(null);
        }
        cerrarPopup();
    };

    const cerrarPopup = () => {
        setIsPopupOpen(false);
    };

    const obtenerTituloCategoria = () => {
        let titulo = 'Vajillas';
        if (params.id === '2') titulo = 'Cubiertos';
        else if (params.id === '3') titulo = 'Cristaleria';
        return titulo;
    };

    const titulo = obtenerTituloCategoria();

    return (
        <section className={StylesListaProductos.productos}>
            <h3 className={StylesListaProductos.titulo}>{titulo}</h3>
            <div className={StylesListaProductos.cardGrid}>
                {productosFiltrados.map((producto) => (
                    <CardProductos
                        key={producto.id}
                        producto={producto}
                        onDelete={() => abrirPopup(producto.id)} // Cambia aquí para abrir el popup
                    />
                ))}
            </div>
            <ConfirmDeletePopup 
                isOpen={isPopupOpen} 
                onClose={cerrarPopup} 
                onConfirm={eliminarProducto} 
            />
        </section>
    );
}

export default ListaProductos;