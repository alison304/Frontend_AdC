import axios from "axios";
axios.defaults.headers.common['Content-Type'] = 'application/json';

const BASE_URL = "https://auradecristalapi-development.up.railway.app";

export const getUserList = () => {
    return axios.get(`${BASE_URL}/api/user/`);
}

export const getOneUser = (id) => {
    return axios.get(`${BASE_URL}/api/user/${id}`);
}

export const createUser = (name,lastName,email,password) => {
    return axios.post(`${BASE_URL}/api/auth/register`, 
        {
            "name": name,             
            "lastName": lastName,             
            "email": email, 
            "password": password
        }
    );
}

export const updateUser = (id, user) => {
    return axios.put(`${BASE_URL}/api/user/${id}`, user);
}

export const removeUser = (id) => {
    return axios.delete(`${BASE_URL}/api/user/${id}`);
}

export const login = (email, password) => {
    return axios.post(`${BASE_URL}/api/auth/login`, 
        {
            "email": email, 
            "password": password
        }
    )
}







/* Mantener sesion abierta y cerrar sesion */
export const isAuthenticated = () => {
    return !!localStorage.getItem('authToken');
};

export const logout = () => {
    localStorage.removeItem('authToken');
};