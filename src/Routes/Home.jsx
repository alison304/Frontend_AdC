import React from 'react'
import StylesHome from '../Styles/Home.module.css'
import Card from '../Components/Card'
import SearchBar from '../Components/SearchBar/SearchBar';

const Home = ({listaProductos,listaCategorias,listaRecomendaciones}) => {

    return (
        <React.Fragment>
            <SearchBar />
           <section className={StylesHome.categorias}>
           <h3 className={StylesHome.titulo}>Categorías</h3>
           <div className={StylesHome.cardGrid}>
           {listaCategorias.map((categoria)=>(
                <Card key={categoria.id} dato={categoria} esCategoria={true} producto={listaProductos[0]}/>
            ))}
            </div>
           </section>
           <section className={StylesHome.categorias}>
           <h3 className={StylesHome.titulo}>Recomendaciones</h3>
           <div className={StylesHome.cardGrid}>
           {listaRecomendaciones.map((recomendacion)=>(
                <Card key={recomendacion.id} dato={recomendacion} esCategoria={false} producto={listaProductos[recomendacion.id]}/>
            ))}
            </div>
           </section>
        </React.Fragment>
    )
}

export default Home