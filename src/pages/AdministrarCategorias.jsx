import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const caracteristicas = [
    { id: 1, nombre: 'Material', icono: '📦' },
    { id: 2, nombre: 'Lavavajillas', icono: '🚿' },
    { id: 3, nombre: 'Dimensiones', icono: '📏' },
    { id: 4, nombre: 'Microondas', icono: '🍲' },
    { id: 5, nombre: 'Garantía', icono: '🛡️' },
    { id: 6, nombre: 'Peso', icono: '⚖️' },
];

const AdministrarCategorias = () => {
    return (
        <div className="panel-administracion">
            <h1>Panel de Administración</h1>
            <h2>Listar Características</h2>
            <div className="caracteristicas-lista">
                {caracteristicas.map((caracteristica) => (
                    <div key={caracteristica.id} className="caracteristica-item">
                        <span className="icono">{caracteristica.icono}</span>
                        <span className="nombre">{caracteristica.nombre}</span>
                        <button className="editar-boton">
                            <FaEdit /> Editar
                        </button>
                        <button className="eliminar-boton">
                            <FaTrash /> Eliminar
                        </button>
                    </div>
                ))}
            </div>
            <button className="agregar-boton">Agregar Característica</button>
        </div>
    );
};

export default AdministrarCategorias;
