import axios from 'axios';

// Configuración de la URL base para las peticiones al backend
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // URL base del backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
