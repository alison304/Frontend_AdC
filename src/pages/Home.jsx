import React from 'react'
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
    let listaProductosBusqueda =[];

    const validarBusqueda =  () => {
        if(state.tipo_Busqueda === 1){
            listaProductosBusqueda = state.listaProductosSoloDescripcion;
        }else if(state.tipo_Busqueda === 2){
            listaProductosBusqueda = state.listaProductosSoloFechas;
        }else{
            listaProductosBusqueda = state.listaProductosDescripcionFechas;
        }
        return listaProductosBusqueda;
    }
    
    listaProductosBusqueda = validarBusqueda();

    const onClose = (event) => {
        event.preventDefault();
        dispatch({type:"MOSTRAR_BUSQUEDA", payload:false});
    }

    return (
        <React.Fragment>
            <SearchBar />
            {
                (state.mostrarBusqueda) &&
                (<section className={StylesHome.busqueda}>
                    <button onClick={onClose} className={StylesHome.botonIconoCerrar}>
                        <CloseIcon className={StylesHome.iconoCerrar} />
                    </button>
                    {
                    listaProductosBusqueda.length === 0 ?
                    (<p className={StylesHome.tituloNoResultados}>Lo sentimos, no hay productos que coincidan con tu búsqueda.</p>): 
                    (
                    <>
                    <h3 className={StylesHome.tituloBusqueda}>Resultados de la busqueda</h3>
                    <div className={StylesHome.cardGrid}>
                        {listaProductosBusqueda.map((producto) => (
                            <Card key={producto.id} dato={producto} esCategoria={false} productos={listaProductos}  esBusqueda={true}/>
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
                        <Card key={categoria.id} dato={categoria} esCategoria={true} productos={listaProductos} esBusqueda={false}/>
                    ))}
                </div>
            </section>
            <section className={StylesHome.categorias}>
                <h3 className={StylesHome.titulo}>Recomendaciones</h3>
                <div className={StylesHome.cardGrid}>
                    {listaRecomendaciones.map((recomendacion) => (
                        <Card key={recomendacion.id} dato={recomendacion} esCategoria={false} productos={listaProductos[recomendacion.id]} esBusqueda={false}/>
                    ))}
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home