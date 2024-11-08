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
import ListaProductos from './pages/ListaProductos';
import Wip from './components/Wip/Wip';


function App() {

    const [listaProductos, setListaProductos] = useState([
        {
            id: 1,
            nombre: "Vajilla Elegancia atemporal",
            descripcion: "Un set de vajilla de 16 piezas que combina diseño tradicional y funcionalidad moderna. Ideal para comidas cotidianas con un toque de sofisticación.",
            precioAlquiler: 120,
            disponibilidad: 1,
            fechaRegistro: "2024-10-25",
            categoria: { "idCategoria": 1 },
            imagenes: "../public/images/vajilla_elegante_atemporal.jpg"
        },
        {
            id: 2,
            nombre: "Vajilla Toques de Azur",
            descripcion: "Un set de 24 piezas de alta gama hecho para impresionar. Acabados exclusivos y materiales de primera calidad para quienes buscan lo mejor en sus eventos especiales.",
            precioAlquiler: 200,
            disponibilidad: 1,
            fechaRegistro: "2024-10-25",
            categoria: { "idCategoria": 1 },
            imagenes: "../public/images/vajilla_toques.png"
        },
        {
            id: 3,
            nombre: "Vajilla Serenidad Noble",
            descripcion: "Eleva el estilo de tu mesa con la vajilla de lujo Serenidad Noble. Ofrece combinaciones variadas para adaptarse a tus necesidades, ideal tanto para el uso diario como para realzar mesas de celebración.",
            precioAlquiler: 100,
            disponibilidad: 1,
            fechaRegistro: "2024-10-25",
            categoria: { "idCategoria": 1 },
            imagenes: "../public/images/vajilla_serenidad.jpg"
        },
        {
            id: 4,
            nombre: "Vajilla Hyra Premium",
            descripcion: "La vajilla de gres premium Hyra ofrece una experiencia de comedor elevada. Con platos y cuencos de varios tamaños, añade versatilidad a tu mesa, destacando un esmalte brillante y detalles delicados para impresionar a tus invitados con estilo.",
            precioAlquiler: 100,
            disponibilidad: 1,
            fechaRegistro: "2024-10-25",
            categoria: { "idCategoria": 1 },
            imagenes: "../public/images/vajilla_hyra.png"
        },
        {
            id: 5,
            nombre: "Vajilla Blanco Legacy",
            descripcion: "La vajilla Blanco Legacy añade elegancia instantánea a cualquier mesa. Cada pieza tiene borde dorado pintado a mano, ideal para ocasiones sociales. Su porcelana duradera la hace perfecta para el uso diario o para reuniones en casa o fuera.",
            precioAlquiler: 100,
            disponibilidad: 1,
            fechaRegistro: "2024-10-25",
            categoria: { "idCategoria": 1 },
            imagenes: "../public/images/vajilla_blanco.png"
        },
        {
            id: 6,
            nombre: "Vajilla Oxford Blue",
            descripcion: "Transforma tu mesa en lujo con el set Oxford azul. Perfecto para uso diario o celebraciones, ofrece combinaciones versátiles. Sus bordes dorados pintados a mano realzan cualquier ambiente de mes.",
            precioAlquiler: 100,
            disponibilidad: 1,
            fechaRegistro: "2024-10-25",
            categoria: { "idCategoria": 1 },
            imagenes: "../public/images/vajilla_oxford.png"
        },
        {
            id: 7,
            nombre: "Elegancia en Cada Bocado",
            descripcion: "Perfecto para cenas especiales, este set aporta un toque de elegancia y sofisticación a cualquier mesa. Con acabados pulidos y diseño ergonómico, es ideal para realzar cada ocasión especial.",
            precioAlquiler: 200,
            disponibilidad: 1,
            fechaRegistro: "2024-10-25",
            categoria: { "idCategoria": 2 },
            imagenes: "../public/images/cubierto1.png"
        },
        {
            id: 8,
            nombre: "Set de Cubiertos de Distinción",
            descripcion: "Un set que celebra la armonía entre diseño moderno y funcionalidad. Cada pieza está meticulosamente elaborada para proporcionar equilibrio y comodidad. Perfecto para hogares con un toque contemporáneo.",
            precioAlquiler: 150,
            disponibilidad: 1,
            fechaRegistro: "2024-10-25",
            categoria: { "idCategoria": 2 },
            imagenes: "../public/images/cubierto2.png"
        },
        {
            id: 9,
            nombre: "Set Mesa de Lujo",
            descripcion: "Ideal para grandes reuniones y eventos, este set completo cuenta con piezas diseñadas para un uso duradero, sin perder el estilo. Desde cenas informales hasta celebraciones importantes, este set ofrece una experiencia completa",
            precioAlquiler: 250,
            disponibilidad: 1,
            fechaRegistro: "2024-10-25",
            categoria: { "idCategoria": 2 },
            imagenes: "../public/images/cubierto3.jpg"
        },
        {
            id: 10,
            nombre: "Cubiertos Arte & Estilo",
            descripcion: "Inspirado en diseños clásicos, este set es ideal para quienes buscan calidad duradera y elegancia. Su acabado liso le da un toque distinguido, perfecto para cualquier ocasión.",
            precioAlquiler: 200,
            disponibilidad: 1,
            fechaRegistro: "2024-10-25",
            categoria: { "idCategoria": 2 },
            imagenes: "../public/images//cubierto4.png"
        },
        {
            id: 11,
            nombre: "Set Esencia Clásica",
            descripcion: "Diseñado para aquellos que valoran la elegancia y el refinamiento en sus mesas. Este set combina materiales de alta calidad con un diseño clásico, elevando cualquier experiencia gastronómica.",
            precioAlquiler: 250,
            disponibilidad: 1,
            fechaRegistro: "2024-10-25",
            categoria: { "idCategoria": 2 },
            imagenes: "../public/images/cubierto5.png"
        },
        {
            id: 12,
            nombre: "Set Brillo Eterno",
            descripcion: "Con un estilo atemporal, este set premium es ideal para cualquier mesa elegante. Su diseño fino y su acero inoxidable de primera calidad lo convierten en una excelente elección para los amantes de los detalles.",
            precioAlquiler: 150,
            disponibilidad: 1,
            fechaRegistro: "2024-10-25",
            categoria: { "idCategoria": 2 },
            imagenes: "../public/images/cubierto6.png"
        },
        {
            id: 13,
            nombre: "Set Distinción de Whisky",
            descripcion: "Perfecto para los amantes del whisky, este set incluye vasos robustos y decorativos que realzan el color y el sabor de la bebida. Ideal para quienes valoran un toque de elegancia clásica.",
            precioAlquiler: 200,
            disponibilidad: 1,
            fechaRegistro: "2024-10-25",
            categoria: { "idCategoria": 3 },
            imagenes: "../public/images/set_distincion.png"
        },
        {
            id: 14,
            nombre: "Set Fusión Exótica",
            descripcion: "Disfruta de margaritas como en un resort de lujo. Este set combina copas amplias y elegantes con un diseño que acentúa los sabores frescos y cítricos de esta bebida.",
            precioAlquiler: 250,
            disponibilidad: 1,
            fechaRegistro: "2024-10-25",
            categoria: { "idCategoria": 3 },
            imagenes: "../public/images/set_difusion.png"
        },
        {
            id: 15,
            nombre: "Set Esencia de Gin Tonic",
            descripcion: "Estas copas diseñadas para gin tonic cuentan con un amplio cuerpo y borde fino, lo que permite apreciar mejor los aromas y la efervescencia de la bebida. Perfectas para una experiencia de coctelería premium.",
            precioAlquiler: 100,
            disponibilidad: 1,
            fechaRegistro: "2024-10-25",
            categoria: { "idCategoria": 3 },
            imagenes: "../public/images/set_esencia.png"
        },
        {
            id: 16,
            nombre: "Set Estilo Martini",
            descripcion: "Un set que encarna la sofisticación de la coctelería clásica. Estas copas de martini, con forma triangular y un pie largo, son ideales para brindar con un toque de elegancia retro.",
            precioAlquiler: 150,
            disponibilidad: 1,
            fechaRegistro: "2024-10-25",
            categoria: { "idCategoria": 3 },
            imagenes: "../public/images/set_martini.png"
        },
        {
            id: 17,
            nombre: "Set Afición por la Cerveza",
            descripcion: "Este set incluye vasos diseñados para resaltar los aromas y sabores de distintas cervezas. Con un diseño ergonómico y base sólida, es ideal tanto para cervezas artesanales como comerciales.",
            precioAlquiler: 100,
            disponibilidad: 1,
            fechaRegistro: "2024-10-25",
            categoria: { "idCategoria": 3 },
            imagenes: "../public/images/set_aficion.png"
        },
        {
            id: 18,
            nombre: "Set Colección Clásica Coñac",
            descripcion: "Un set de copas estilo balón, ideal para los conocedores del coñac. Su diseño permite sostener la copa en la mano, calentando suavemente la bebida y potenciando sus aromas.",
            precioAlquiler: 300,
            disponibilidad: 1,
            fechaRegistro: "2024-10-25",
            categoria: { "idCategoria": 3 },
            imagenes: "../public/images/set_coleccion.png"
        }
    ]); // Array de objetos con datos iniciales

    console.log(listaProductos);

    const [listaCategorias, setlistaCategorias] = useState([
        {
            id: 1,
            nombre: "Vajilla",
            imagen: "../public/images/vajilla.jpg"
        },
        {
            id: 2,
            nombre: "Cubiertos",
            imagen: "../public/images/cubierto.jpg"
        },
        {
            id: 3,
            nombre: "Cristaleria",
            imagen: "../public/images/cristaleria.jpg"
        }
    ]); // Array de objetos con datos iniciales

    const [listaRecomendaciones, setlistaRecomendaciones] = useState([
        {
            id: 1,
            nombre: "Vajilla Elegancia Sublime",
            imagen: "../public/images/vajilla_elegante.jpg",
            piezas: 24,
            calificacion: 4.7
        },
        {
            id: 2,
            nombre: "Vajilla Lujo Refinado",
            imagen: "../public/images/vajilla_lujo.jpg",
            piezas: 28,
            calificacion: 4.8
        },
        {
            id: 3,
            nombre: "Vajilla Gracia Sutil",
            imagen: "../public/images/vajilla_gracia.png",
            piezas: 20,
            calificacion: 4.6
        },
        {
            id: 4,
            nombre: "Vajilla Esplendor Imperial",
            imagen: "../public/images/vajilla_esplendor.png",
            piezas: 16,
            calificacion: 4.5
        },
        {
            id: 5,
            nombre: "Vajilla Serenidad Noble",
            imagen: "../public/images/vajilla_serenidad.jpg",
            piezas: 25,
            calificacion: 4.7
        },
        {
            id: 6,
            nombre: "Vajilla Belleza Ancestral",
            imagen: "../public/images/vajilla_belleza.jpg",
            piezas: 28,
            calificacion: 4.8
        }
    ]); // Array de objetos con datos iniciales

    return (
        <>
            <div>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home listaProductos={listaProductos} listaCategorias={listaCategorias} listaRecomendaciones={listaRecomendaciones} />} />
                    <Route path='*' element={<h2>Error 404</h2>} />
                    <Route path='/admin' element={<Administrador listaProductos={listaProductos} />} />
                    <Route path='/admin/agregarProducto' element={<AgregarProducto listaProductos={listaProductos} setListaProductos={setListaProductos} />} />
                    <Route path="/listaProductos/:id" element={<ListaProductos listaProductos={listaProductos} />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/gallery/:id" element={<Gallery />} />
                    <Route path="/wip" element={<Wip />} />
                </Routes>
                <Footer />
            </div>
        </>
    )
}

export default App