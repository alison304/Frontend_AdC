import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
        // Redirige al usuario a la página de login si no está autenticado
        return <Navigate to="/login" replace />;
    }

    // Si está autenticado, muestra el contenido protegido
    return children;
};

export default ProtectedRoute;
