import axios from "axios";
axios.defaults.headers.common['Content-Type'] = 'application/json';

const BASE_URL = "https://auradecristalapi-development.up.railway.app";

export const getListUser = () => {
    return axios.get(`${BASE_URL}/api/user/`);
}

export const getOneUser = (id) => {
    return axios.get(`${BASE_URL}/api/user/${id}`);
}

export const createUser = (name,lastName,email,password) => {
    return axios.post(`${BASE_URL}/auth/register`, 
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
    return axios.post(`${BASE_URL}/auth/login`, 
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

const userEmail = localStorage.getItem('userEmail');
const authToken = localStorage.getItem('authToken');

console.log('Retrieved userEmail:', userEmail); // Verificar si se recuperó el userEmail
console.log('Retrieved authToken:', authToken); // Verificar si se recuperó el authToken







export const getUserBy1Email = () => {
    let data = '';
    
    let config = {
      method: 'GET',
      maxBodyLength: Infinity,
      url: 'http://auradecristalapi-development.up.railway.app/api/usuario/buscar/prueba7@p.co',
      headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJub21icmUiOiJPc2NhciIsImVtYWlsIjoicHJ1ZWJhN0BwLmNvIiwiYXBlbGxpZG8iOiJhbmRyZXMiLCJyb2wiOlt7ImF1dGhvcml0eSI6IlVTRVIifV0sInN1YiI6InBydWViYTdAcC5jbyIsImlhdCI6MTczMjA2ODEyMywiZXhwIjoxNzMyMTU0NTIzfQ.xKrk2Cdiek2CTrt61CrOnmABR2ntUf8uy0VQRXAl2vU'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    
};




export const getUserByEmail1 = () => {
    fetch('https://auradecristalapi-development.up.railway.app/api/usuario/buscar/prueba7@p.co', {
        method: 'OPTIONS',
        headers: {
          'Access-Control-Request-Method': 'GET',
          'Access-Control-Request-Headers': 'Authorization',
          'Origin': window.location.origin,
        }
      })
      .then(response => console.log('OPTIONS response:', response))
      .catch(error => console.error('Error during OPTIONS request:', error));
      (error => console.error('Error during request:', error));
    
  };
  


  