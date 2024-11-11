import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axios'; // Importamos la configuración de axios
import StylesListaProductos from '../styles/ListaProductos.module.css';
import CardProductos from '../components/CardProductos';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Button } from '@mui/material';

function ListaProductos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  // Obtener productos desde el backend usando Axios
  useEffect(() => {
    axiosInstance.get('/productos')  // Llamada a la API que configuraste en axios.js
      .then((response) => {
        setProductos(response.data); // Guardamos los productos recibidos
        setLoading(false);
      })
      .catch((error) => {
        console.error("Hubo un error al obtener los productos", error);
        setLoading(false);
      });
  }, []);

  // Filtrar productos según la categoría
  const productosFiltrados = productos.filter(producto => producto.categoria === params.categoria);

  const onBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ padding: '2.3rem' }}>
      <Button
        style={{
          backgroundColor: '#d1b362',
          float: 'right',
          border: 'none',
          color: 'white',
          padding: '5px 15px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '5px',
          transition: 'background-color 0.3s',
          marginRight: '25px',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#f2ca4e')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#d1b362')}
        className='back' onClick={onBack}><RiArrowGoBackFill />
        Volver
      </Button>
      <section className={StylesListaProductos.productos}>
        <h3 className={StylesListaProductos.titulo}>
          {params.categoria === 'vajillas' ? 'Vajillas' : params.categoria === 'cubiertos' ? 'Cubiertos' : 'Cristalería'}
        </h3>
        <div className={StylesListaProductos.cardGrid}>
          {loading ? (
            <p>Cargando productos...</p>
          ) : (
            productosFiltrados.map((producto) => (
              <CardProductos key={producto.id} producto={producto} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default ListaProductos;
