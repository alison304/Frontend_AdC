// src/services/user.service.js
import axios from 'axios';

// URL base de tu API
  // export const BASE_URL = 'https://auradecristalapi-development.up.railway.app';
export const BASE_URL = 'http://localhost:8080'

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

export const login = async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    
    localStorage.setItem('authToken', response.data.token);
    console.log('adasdasdasdsad')
    console.log('adasdasdasdsad')
    console.log(localStorage.getItem('authToken'))
    console.log('adasdasdasdsad')
    console.log('adasdasdasdsad')
    console.log('adasdasdasdsad')

  }

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
export const getUserByEmail1 = async (userEmail) => {
  try {
    const response = await api.get('/usuarios/buscar', {
      params: { email: userEmail },
    });
    const data = response.data;
    // Guardar información en localStorage
    localStorage.setItem('nombre', data.nombre);
    localStorage.setItem('apellido', data.apellido);
    localStorage.setItem('rol', data.rol);
    console.log(localStorage.getItem('nombre'));
    console.log(localStorage.getItem('apellido'));
    console.log(localStorage.getItem('rol'));
    return data;
  } catch (error) {
    console.error('Error fetching user by email:', error);
    throw error;
  }
  
};



export const getUserByEmail = async (userEmail) => {
  const token = localStorage.getItem('authToken'); // Obtener el token almacenado
  const options = {
    method: 'GET',
    url: 'http://localhost:8080/usuarios/buscar',
    headers: {
      Authorization: `Bearer ${token}`, // Usar el token obtenido
      'Content-Type': 'application/json'
    },
    params: { email: userEmail } // Usar 'params' en lugar de 'data'
  };

  try {
    const { data } = await axios.request(options);
    console.log(data);
    localStorage.setItem('authToken', data.token);
    localStorage.setItem('userEmail', data.email);
    localStorage.setItem('userName', data.nombre);
    localStorage.setItem('userLastName', data.apellido);
    localStorage.setItem('userRol', data.rol);
    console.table({
        Token: data.token,
        Email: data.email,
        Nombre: data.nombre,
        Apellido: data.apellido,
        Rol: data.rol
    });
  } catch (error) {
    console.error(error);
  }
};