import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";

const productosStates= createContext();
const initialState = {
  lista:[],
  listaCategorias:[],
  listaProductosAleatorios:[]
}

const Context = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,initialState)
  const urlListarProductos="https://auradecristalapi-development.up.railway.app/productos/listar";
  const urlListarProductosAleatorios="https://auradecristalapi-development.up.railway.app/productos/aleatorios";
  const urlListarCategorias="https://auradecristalapi-development.up.railway.app/categorias/listar";

  //listar productos
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        //se obtiene la lista de productos aleatorios
        const resProductosAleatorios = await axios(urlListarProductosAleatorios);
        console.log(resProductosAleatorios.data);
        dispatch({ type: "GET_PRODUCTOS_ALEATORIOS", payload: resProductosAleatorios.data });
  
        // Luego de obtener los productos, obtenemos las categorías
        const resCategorias = await axios(urlListarCategorias);
        console.log(resCategorias.data);
        dispatch({ type: "GET_CATEGORIAS", payload: resCategorias.data });

        //se obtiene la lista de productos 
        const resProductos = await axios(urlListarProductos);
        console.log(resProductos.data);
        dispatch({ type: "GET_PRODUCTOS", payload: resProductos.data });
  
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
  
    obtenerProductos();
  }, [dispatch]);


  return (
    <productosStates.Provider value={{ state, dispatch }}> 
      {children}
    </productosStates.Provider>
  );
};

export default Context;

export const useProductosStates = () => useContext(productosStates);
