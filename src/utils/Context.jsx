import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";
import {BASE_URL} from '../services/user.service'

const productosStates= createContext();
const fechaInicial = JSON.parse(sessionStorage.getItem("fechaInicial")) || null;
const fechaFinal = JSON.parse(sessionStorage.getItem("fechaFinal")) || null;

const initialState = {
  lista:[],
  listaCategorias:[],
  listaProductosAleatorios:[],
  fechaInicial:fechaInicial,
  fechaFinal:fechaFinal,
  mostrarBusqueda:false
}


const Context = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,initialState)
  const urlListarProductos=`${BASE_URL}/productos/listar`;
  const urlListarProductosAleatorios=`${BASE_URL}/productos/aleatorios`;
  const urlListarCategorias=`${BASE_URL}/categorias/listar`;

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

  //fechas
  useEffect(() => {
    sessionStorage.setItem("fechaInicial", JSON.stringify(state.fechaInicial));
    sessionStorage.setItem("fechaFinal", JSON.stringify(state.fechaFinal));
  }, [state.fechaInicial, state.fechaFinal]);


  return (
    <productosStates.Provider value={{ state, dispatch }}> 
      {children}
    </productosStates.Provider>
  );
};

export default Context;

export const useProductosStates = () => useContext(productosStates);
