import React from 'react'
import StylesHome from '../styles/Home.module.css'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar/SearchBar';
import {useProductosStates} from "../utils/Context"

const Home = () => {
    console.log('RENDERIZANDO HOME')
    const {state} = useProductosStates();
    const listaProductos =state.listaProductosAleatorios;  
    const listaCategorias =state.listaCategorias;  
    const listaRecomendaciones = listaProductos.slice(0, 3);

    return (
        <React.Fragment>
            <SearchBar />
            {
                state.mostrarBusqueda  && 
                (<section className={StylesHome.categorias}>
                    <h3 className={StylesHome.titulo}>Resultados de la busqueda</h3>
                    <div className={StylesHome.cardGrid}>
                        {listaRecomendaciones.map((producto) => (
                            <Card key={producto.id} dato={producto} esCategoria={false} productos={listaProductos}  esBusqueda={true}/>
                        ))}
                    </div>
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