// src/services/user.service.js
import axios from 'axios';

// URL base de tu API
const BASE_URL = 'https://auradecristalapi-development.up.railway.app';

// Crear una instancia de Axios
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adjuntar el token en cada solicitud
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Funciones de la API

export const getListUser = () => {
  return api.get('/usuarios/listar');
};

export const getOneUser = (id) => {
  return api.get(`/api/user/${id}`);
};

export const createUser = (name, lastName, email, password) => {
  return api.post('/auth/register', {
    nombre: name,
    apellido: lastName,
    email: email,
    password: password,
  });
};

export const updateUser = (id, user) => {
  return api.put(`/api/user/${id}`, user);
};

export const removeUser = (id) => {
  return api.delete(`/api/user/${id}`);
};

export const login = (email, password) => {
  return api.post('/auth/login', { email, password });
};

/* Mantener sesión abierta y cerrar sesión */
export const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

export const logout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('nombre');
  localStorage.removeItem('apellido');
  localStorage.removeItem('rol');
};

/* Obtener usuario por email */
export const getUserByEmail = async (userEmail) => {
  try {
    const response = await api.get('/usuarios/buscar', {
      params: { email: userEmail },
    });
    const data = response.data;
    // Guardar información en localStorage
    localStorage.setItem('nombre', data.nombre);
    localStorage.setItem('apellido', data.apellido);
    localStorage.setItem('rol', data.rol);
    return data;
  } catch (error) {
    console.error('Error fetching user by email:', error);
    throw error;
  }
};
