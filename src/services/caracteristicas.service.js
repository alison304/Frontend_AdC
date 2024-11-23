import axios from "axios";
axios.defaults.headers.common['Content-Type'] = 'application/json';

const BASE_URL = "https://auradecristalapi-development.up.railway.app";


export const getCaracteristica = (idProducto) => {
    return axios.get(`${BASE_URL}/productos/caracteristicas/${idProducto}`);
}