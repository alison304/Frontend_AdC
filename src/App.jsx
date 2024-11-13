import './App.css'
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Administrador from "./pages/Administrador"
import Detail from './pages/Detail';
import Gallery from './pages/Gallery';
import { useState } from "react";
import AgregarProducto from './pages/AgregarProducto';
import RegisterForm from './components/RegisterForm/RegisterForm';
import ListaProductos from './pages/ListaProductos';
import AdministrarCaracteristicas from './pages/AdministrarCaracteristicas';
import Wip from './components/Wip/Wip';
function App() {
    console.log('RENDERIZANDO APP')


  const [listaProductos, setListaProductos] = useState([
    {
        id:1,
        nombre: "Vajilla Elegancia atemporal",
        descripcion: "Un set de vajilla de 16 piezas que combina diseño tradicional y funcionalidad moderna. Ideal para comidas cotidianas con un toque de sofisticación.",
        precioAlquiler: 120,
        disponibilidad: 1,
        fechaRegistro: "2024-10-25",
        categoria: { "idCategoria": 1 },
        imagenes: "../public/images/vajilla_elegante_atemporal.jpg"
    },
    {   id:2,
        nombre: "Vajilla Toques de Azur",
        descripcion: "Un set de 24 piezas de alta gama hecho para impresionar. Acabados exclusivos y materiales de primera calidad para quienes buscan lo mejor en sus eventos especiales.",
        precioAlquiler: 200,
        disponibilidad: 1,
        fechaRegistro: "2024-10-25",
        categoria: { "idCategoria": 1 },
        imagenes: "../public/images/vajilla_toques.png"
    },
    {   id:3,
        nombre: "Vajilla Serenidad Noble",
        descripcion: "Dale un toque mágico a tus cenas de Halloween con este set  espeluznante de 12 piezas. Ideal para crear atmósferas divertidas y únicas en cada comida",
        precioAlquiler: 100,
        disponibilidad: 1,
        fechaRegistro: "2024-10-25",
        categoria: { "idCategoria": 1 },
        imagenes:"../public/images/vajilla_serenidad.jpg"
    },
    {   id:4,
        nombre: "Elegancia en Cada Bocado",
        descripcion: "Perfecto para cenas especiales, este set aporta un toque de elegancia y sofisticación a cualquier mesa. Con acabados pulidos y diseño ergonómico, es ideal para realzar cada ocasión especial.",
        precioAlquiler: 200,
        disponibilidad: 1,
        fechaRegistro: "2024-10-25",
        categoria: { "idCategoria": 2 },
        imagenes:"../public/images/cubierto1.png"
    },
    {   id:5,
        nombre: "Set de Cubiertos de Distinción",
        descripcion: "Un set que celebra la armonía entre diseño moderno y funcionalidad. Cada pieza está meticulosamente elaborada para proporcionar equilibrio y comodidad. Perfecto para hogares con un toque contemporáneo.",
        precioAlquiler: 150,
        disponibilidad: 1,
        fechaRegistro: "2024-10-25",
        categoria: { "idCategoria": 2 },
        imagenes:"../public/images/cubierto2.png"
    },
    {   id:6,
        nombre: "Set Mesa de Lujo",
        descripcion: "Ideal para grandes reuniones y eventos, este set completo cuenta con piezas diseñadas para un uso duradero, sin perder el estilo. Desde cenas informales hasta celebraciones importantes, este set ofrece una experiencia completa",
        precioAlquiler: 250,
        disponibilidad: 1,
        fechaRegistro: "2024-10-25",
        categoria: { "idCategoria": 2 },
        imagenes:"../public/images/cubierto3.jpg"
    },
    {   id:7,
        nombre: "Set Distinción de Whisky",
        descripcion: "Perfecto para los amantes del whisky, este set incluye vasos robustos y decorativos que realzan el color y el sabor de la bebida. Ideal para quienes valoran un toque de elegancia clásica.",
        precioAlquiler: 200,
        disponibilidad: 1,
        fechaRegistro: "2024-10-25",
        categoria: { "idCategoria": 3 },
        imagenes:"../public/images/set_distincion.png"
    },
    {   id:8,
        nombre: "Set Fusión Exótica",
        descripcion: "Disfruta de margaritas como en un resort de lujo. Este set combina copas amplias y elegantes con un diseño que acentúa los sabores frescos y cítricos de esta bebida.",
        precioAlquiler: 250,
        disponibilidad: 1,
        fechaRegistro: "2024-10-25",
        categoria: { "idCategoria": 3 },
        imagenes:"../public/images/set_difusion.png"
    },
    {   id:9,
        nombre: "Set Esencia de Gin Tonic",
        descripcion: "Estas copas diseñadas para gin tonic cuentan con un amplio cuerpo y borde fino, lo que permite apreciar mejor los aromas y la efervescencia de la bebida. Perfectas para una experiencia de coctelería premium.",
        precioAlquiler: 100,
        disponibilidad: 1,
        fechaRegistro: "2024-10-25",
        categoria: { "idCategoria": 3 },
        imagenes:"../public/images/set_esencia.png"
    }
  ]); 

    console.log(listaProductos);

    return (
        <>
            <div>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='*' element={<h2>Error 404</h2>} />
                    <Route path='/admin' element={<Administrador/>} />
                    <Route path='/admin/agregarProducto' element={<AgregarProducto listaProductos={listaProductos} />} />
                    <Route path="/listaProductos/:id" element={<ListaProductos/>} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/wip" element={<Wip />} />
                    <Route path="/administrar-caracteristicas" element={<AdministrarCaracteristicas />} />
                </Routes>
                <Footer />
            </div>
        </>
    )
}

export default App