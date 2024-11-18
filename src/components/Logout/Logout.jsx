import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from '../../services/user.service'; // Ajusta la ruta según sea necesario

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        logout(); // Llama a la función para cerrar sesión
        navigate('/'); // Redirige al usuario a la página de inicio
    }, [navigate]);

    return null; // No se muestra nada
};

export default Logout;
