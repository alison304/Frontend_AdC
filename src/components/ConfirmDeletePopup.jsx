
import PropTypes from 'prop-types'; // Importa prop-types
import Styles from '../Styles/ListaProductos.module.css'; // Asegúrate de que esta ruta sea correcta

function ConfirmDeletePopup({ isOpen, onConfirm, onClose }) {
    if (!isOpen) return null; // No renderiza nada si el popup no está abierto

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

// Validación de las props con prop-types
ConfirmDeletePopup.propTypes = {
    isOpen: PropTypes.bool.isRequired, // 'isOpen' debe ser un booleano y es requerido
    onConfirm: PropTypes.func.isRequired, // 'onConfirm' debe ser una función y es requerido
    onClose: PropTypes.func.isRequired, // 'onClose' debe ser una función y es requerido
};

export default ConfirmDeletePopup;