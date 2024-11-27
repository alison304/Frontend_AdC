import axios from "axios";

const BASE_URL_PRODUCTO = "https://auradecristalapi-development.up.railway.app";

// Obtener lista de productos
export const getListProducts = () => {
  const token = localStorage.getItem('authToken');
  return axios.get(`${BASE_URL_PRODUCTO}/productos/listar`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
};

// Obtener un solo producto
export const getOneProduct = (id) => {
  const token = localStorage.getItem('authToken');
  return axios.get(`${BASE_URL_PRODUCTO}/productos/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
};

// Crear un nuevo producto
export const createProduct = async (nombre, descripcion, precioAlquiler, disponibilidad, inventario, categoriaId, tematicaId, imagenes, caracteristicaIds) => {
  const token = localStorage.getItem('authToken'); // Obtén el token dinámicamente

  if (!token) {
    console.error("Error: No se encontró un token de autenticación.");
    throw new Error("No se encontró un token de autenticación.");
  }

  try {
    const response = await axios.post(
      `${BASE_URL_PRODUCTO}/productos/registrar`,
      {
        "nombre": nombre,
        "descripcion": descripcion,
        "precio_alquiler": precioAlquiler,
        "disponibilidad": disponibilidad,
        "inventario": inventario,
        "categoria_id": categoriaId,
        "tematica_id": tematicaId,
        "imagenes": imagenes,
        "caracteristicaIds": caracteristicaIds,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    console.log("Producto registrado con éxito:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al registrar producto:", error.response?.data || error.message);
    throw error;
  }
};

// Actualizar un producto existente
export const updateProduct = (id, nombre, descripcion, precioAlquiler, disponibilidad, inventario, categoriaId, tematicaId, imagenes, caracteristicaIds) => {
  const token = localStorage.getItem('authToken');
  return axios.put(`${BASE_URL_PRODUCTO}/productos/actualizar/${id}`, 
    {
      "nombre": nombre,
      "descripcion": descripcion,
      "precio_alquiler": precioAlquiler,
      "disponibilidad": disponibilidad,
      "inventario": inventario,
      "categoria_id": categoriaId,
      "tematica_id": tematicaId,
      "imagenes": imagenes,
      "caracteristicaIds": caracteristicaIds,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );
};

// Eliminar un producto
export const removeProduct = (id) => {
  const token = localStorage.getItem('authToken');
  return axios.delete(`${BASE_URL_PRODUCTO}/productos/eliminar/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
};

export default {
  getListProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  removeProduct,
};