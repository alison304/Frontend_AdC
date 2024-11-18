import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import styles from '../Styles/AdministrarCategorias.module.css';

const categorias = [
    { id: 1, nombre: 'Material', icono: '📦' },
    { id: 2, nombre: 'Lavavajillas', icono: '🚿' },
    { id: 3, nombre: 'Dimensiones', icono: '📏' },
    { id: 4, nombre: 'Microondas', icono: '🍲' },
    { id: 5, nombre: 'Garantía', icono: '🛡️' },
    { id: 6, nombre: 'Peso', icono: '⚖️' },
];

const AdministrarCategorias = () => {
    return (
        <div className={styles['panel-administracion']}>
            <h1>Panel de Administración</h1>
            <h2>Listar Características</h2>
            <div className={styles['caracteristicas-lista']}>
                {categorias.map((caracteristica) => (
                    <div key={caracteristica.id} className={styles['caracteristica-item']}>
                        <span className={styles.icono}>{caracteristica.icono}</span>
                        <span className={styles.nombre}>{caracteristica.nombre}</span>
                        <button className={styles['editar-boton']}>
                            <FaEdit /> Editar
                        </button>
                        <button className={styles['eliminar-boton']}>
                            <FaTrash /> Eliminar
                        </button>
                    </div>
                ))}
            </div>
            <button className={styles['agregar-boton']}>Agregar Característica</button>
        </div>
    );
};

export default AdministrarCategorias;
