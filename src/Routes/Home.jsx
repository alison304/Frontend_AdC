import React from 'react'
import StylesHome from '../Styles/Home.module.css'
import Card from '../Components/Card'

const Home = ({listaCategorias}) => {
    
    return (
        <React.Fragment>
           <section className={StylesHome.categorias}>
           <h3 className={StylesHome.titulo}>Categorías</h3>
           <div className={StylesHome.cardGrid}>
           {listaCategorias.map((categoria)=>(
                <Card key={categoria.id} categoria={categoria}/>
            ))}
            </div>
           </section>
        </React.Fragment>
    )
}

export default Home