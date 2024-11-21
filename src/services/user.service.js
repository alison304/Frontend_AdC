import axios from "axios";
axios.defaults.headers.common['Content-Type'] = 'application/json';

const BASE_URL = "https://auradecristalapi-development.up.railway.app";

export const getUserList = () => {
    return axios.get(`${BASE_URL}/api/user/`);
}

export const getOneUser = (id) => {
    return axios.get(`${BASE_URL}/api/user/${id}`);
}

export const createUser = (name, lastName, email, password) => {
    return axios.post(`${BASE_URL}/api/auth/register`,
        {
            "nombre": name,
            "apellido": lastName,
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

/* Mantener sesión abierta y cerrar sesión */
export const isAuthenticated = () => {
    return !!localStorage.getItem('authToken');
};

export const logout = () => {
    localStorage.removeItem('authToken');
};

export const getUserByEmail1 = () => {
    const userEmail = localStorage.getItem('userEmail');
    const authToken = localStorage.getItem('authToken');

    console.log('Retrieved userEmail:', userEmail); // Verificar si se recuperó el userEmail
    console.log('Retrieved authToken:', authToken); // Verificar si se recuperó el authToken

    if (!userEmail || !authToken) {
        return Promise.reject(new Error('User email or auth token not found in localStorage'));
    }

    // Codificar el email para la URL
    const encodedEmail = encodeURIComponent(userEmail);

    const config = {
        method: 'GET',
        maxBodyLength: Infinity,
        url: `${BASE_URL}/api/usuario/buscar/${encodedEmail}`,
        headers: {
            'Authorization': `Bearer ${authToken}`
        },
    };

    return axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
};
