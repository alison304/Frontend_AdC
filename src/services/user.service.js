// src/services/user.service.js
import axios from 'axios';

// URL base de tu API
 export const BASE_URL = 'https://auradecristalapi-development.up.railway.app';
 //export const BASE_URL = 'http://localhost:8080'

// Crear una instancia de Axios
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adjuntar el token en cada solicitud NO USAR NO USAR NO USAR NO USAR, mayormente no funcional.
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
export const getListUser = async () => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/usuarios/listar`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    }
  };

  try {
    const { data } = await axios.request(options);
    localStorage.setItem('userLista', data)

  } catch (error) {
    console.error(error);
  }
}



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
  return axios.post(`${BASE_URL}/auth/login`, 
      {
          "email": email, 
          "password": password
      }
  )
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
export const getUserByEmail = async (userEmail) => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/usuarios/buscar`,
    params: {email: userEmail},
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    }
  };

  try {
    const { data } = await axios.request(options);
    localStorage.setItem('userNombre', data.nombre)
    localStorage.setItem('userApellido', data.apellido)
    localStorage.setItem('userRol', data.rol)

  } catch (error) {
    console.error(error);
  }
}

