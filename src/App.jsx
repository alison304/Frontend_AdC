import './Styles/App.css'
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Routes/Home";
import Administrador from "./Routes/Administrador"
import Detail from './Routes/Detail';
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

  const [listaCategorias, setlistaCategorias] = useState([
    {
        id:1,
        nombre: "Vajilla",
        imagen:"../public/images/vajilla.jpg"
    },
    {   id:2,
        nombre: "Cubiertos",
        imagen:"../public/images/cubierto.jpg"
    },
    {   id:3,
        nombre: "Cristaleria",
        imagen:"../public/images/cristaleria.jpg"
    }
  ]); // Array de objetos con datos iniciales

  const [listaRecomendaciones, setlistaRecomendaciones] = useState([
    {
        id:1,
        nombre: "Vajilla Elegancia Sublime",
        imagen:"../public/images/vajilla_elegante.jpg",
        piezas: 24,
        calificacion:4.7 
    },
    {   id:2,
        nombre: "Vajilla Lujo Refinado",
        imagen:"../public/images/vajilla_lujo.jpg",
        piezas: 28,
        calificacion:4.8 
    },
    {   id:3,
        nombre: "Vajilla Gracia Sutil",
        imagen:"../public/images/vajilla_gracia.png",
        piezas: 20,
        calificacion:4.6
    },
    {   id:4,
        nombre: "Vajilla Esplendor Imperial",
        imagen:"../public/images/vajilla_esplendor.png",
        piezas: 16,
        calificacion:4.5 
    },
    {   id:5,
        nombre: "Vajilla Serenidad Noble",
        imagen:"../public/images/vajilla_serenidad.jpg",
        piezas: 25,
        calificacion:4.7 
    },
    {   id:6,
        nombre: "Vajilla Belleza Ancestral",
        imagen:"../public/images/vajilla_belleza.jpg",
        piezas: 28,
        calificacion:4.8 
    }
  ]); // Array de objetos con datos iniciales

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home listaCategorias={listaCategorias} listaRecomendaciones={listaRecomendaciones}/>}/>
            <Route path='*' element={<h2>Error 404</h2>}/>
            <Route path='/admin' element={<Administrador listaProductos={listaProductos}/>}/>/* Componente para agregar objetos */
            <Route path='/admin/agregarProducto' element={<AgregarProducto listaProductos={listaProductos} setListaProductos={setListaProductos}/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
       {/* <Footer/>*/}
      </div>      
    </>
  )
}

export default App
