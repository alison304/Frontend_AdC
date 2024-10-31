import React from 'react';
import Styles from '../Styles/ListaProductos.module.css';

function ConfirmDeletePopup({ isOpen, onConfirm, onClose }) {
    if (!isOpen) return null; // Si no está abierto, no renderiza nada.

    return (
        <div className={Styles.popup}>
            <div className={Styles.popupContent}>
                <h2>Confirmar Eliminación</h2>
                <p>¿Estás seguro de que deseas eliminar este producto?</p>
                <button onClick={onConfirm}>Sí, eliminar</button>
                <button onClick={onClose}>Cancelar</button>
            </div>
        </div>
    );
}

export default ConfirmDeletePopup;
