import { useState, useEffect } from 'react';
import Administrador from '../Routes/Administrador';

function ComponentePadre() {
    const [listaCategorias, setListaCategorias] = useState([]);
    const [listaProductos, setListaProductos] = useState([
        { id: 1, nombre: "Producto 1" },
        { id: 2, nombre: "Producto 2" }
    ]);

    useEffect(() => {
        // Simulación de llamada a API para obtener categorías
        async function fetchCategorias() {
            // Ejemplo de datos. Reemplaza esta parte con tu API real.
            const categoriasEjemplo = [
                { id: 1, nombre: "Electrónica" },
                { id: 2, nombre: "Ropa" },
                { id: 3, nombre: "Hogar" }
            ];
            // Simula el tiempo de espera de una API real
            setTimeout(() => {
                setListaCategorias(categoriasEjemplo);
            }, 1000);
        }

        fetchCategorias();
    }, []);
}

export default ComponentePadre;
