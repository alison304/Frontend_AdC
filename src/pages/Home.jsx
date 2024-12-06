import {useEffect} from 'react'
import StylesHome from '../styles/Home.module.css'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar/SearchBar';
import {useProductosStates} from "../utils/Context"
import CloseIcon from '@mui/icons-material/Close';

const Home = () => {
    console.log('RENDERIZANDO HOME')
    const {state, dispatch} = useProductosStates();
    const listaProductos =state.listaProductosAleatorios;  
    const listaCategorias =state.listaCategorias;  
    const listaRecomendaciones = listaProductos.slice(0, 3);

    const onClose = (event) => {
        event.preventDefault();
        dispatch({type:"MOSTRAR_BUSQUEDA", payload:false});
    }

        console.log('state.mostrarBusqueda',state.mostrarBusqueda)
    return (
        <>
            <SearchBar />
            {
                (state.mostrarBusqueda && state.productosBusqueda) &&
                (<section className={StylesHome.busqueda}>
                    <button onClick={onClose} className={StylesHome.botonIconoCerrar}>
                        <CloseIcon className={StylesHome.iconoCerrar} />
                    </button>
                    { 
                    state.productosBusqueda.length === 0 ?
                    (<p className={StylesHome.tituloNoResultados}>Lo sentimos, no hay productos que coincidan con tu búsqueda.</p>): 
                    (
                    <>
                    <h3 className={StylesHome.tituloBusqueda}>Resultados de la busqueda</h3>
                    <div className={StylesHome.cardGrid}>
                        {state.productosBusqueda.map((producto) => (
                            <Card key={producto.idProducto} dato={producto} esCategoria={false} productos={listaProductos}  esBusqueda={true}/>
                        ))}
                    </div> 
                    </>)
                    }                   
                </section>
                )
            }
            <section className={StylesHome.categorias}>
                <h3 className={StylesHome.titulo}>Categorías</h3>
                <div className={StylesHome.cardGrid}>
                    {listaCategorias.map((categoria) => (
                        <Card key={categoria.idCategoria} dato={categoria} esCategoria={true} productos={listaProductos} esBusqueda={false}/>
                    ))}
                </div>
            </section>
            <section className={StylesHome.categorias}>
                <h3 className={StylesHome.titulo}>Recomendaciones</h3>
                <div className={StylesHome.cardGrid}>
                    {listaRecomendaciones.map((recomendacion) => (
                        <Card key={recomendacion.idProducto} dato={recomendacion} esCategoria={false} productos={listaProductos[recomendacion.id]} esBusqueda={false}/>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home