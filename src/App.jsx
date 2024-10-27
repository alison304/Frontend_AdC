import './App.css'
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Routes/Home";
import Administrador from "./Routes/Administrador"
import { useState } from "react";
import AgregarProducto from './Routes/AgregarProducto';


function App() {
  const [listaProductos, setListaProductos] = useState([
    {
        id:1,
        nombre: "Plato de cerámica",
        descripcion: "Plato decorativo para eventos",
        precioAlquiler: 5.00,
        disponibilidad: 1,
        fechaRegistro: "2024-10-25",
        categoria: { "idCategoria": 1 },
        imagenenes:null
    },
    {   id:1,
        nombre: "Plato de cerámica",
        descripcion: "Plato decorativo para eventos",
        precioAlquiler: 5.00,
        disponibilidad: 1,
        fechaRegistro: "2024-10-25",
        categoria: { "idCategoria": 1 },
        imagenenes:null
    },
    {   id:1,
        nombre: "Plato de cerámica",
        descripcion: "Plato decorativo para eventos",
        precioAlquiler: 5.00,
        disponibilidad: 1,
        fechaRegistro: "2024-10-25",
        categoria: { "idCategoria": 1 },
        imagenenes:null
    }
  ]); // Array de objetos con datos iniciales

  console.log(listaProductos);
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<h2>Error 404</h2>}/>
            <Route path='/admin' element={<Administrador listaProductos={listaProductos}/>}/>/* Componente para agregar objetos */
            <Route path='/admin/agregarProducto' element={<AgregarProducto listaProductos={listaProductos} setListaProductos={setListaProductos}/>}/>
        </Routes>
       {/* <Footer/>*/}
      </div>      
    </>
  )
}

export default App
