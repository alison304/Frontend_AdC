import React from 'react'
import StylesHome from '../Styles/Home.module.css'
import Card from '../Components/Card'

const Home = ({listaCategorias,listaRecomendaciones}) => {

// Copia del array original
let datosCategorias= [...listaCategorias];
let categoriasAleatorias = [];

let datosRecomendaciones= [...listaRecomendaciones];
let recomendacionesAleatorias = [];

function mostrarElementoAleatorioSinRepetir(datosRestantes) {
    if (datosRestantes.length === 0) {
        console.log("Ya se mostraron todos los elementos.");
        return;
    }

    // Elegir un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * datosRestantes.length);

    // Obtener y eliminar el elemento aleatorio
    const elementoAleatorio = datosRestantes.splice(indiceAleatorio, 1)[0];

    return elementoAleatorio;
}

//CATEGORIAS
for (let i = 0; i < listaCategorias.length; i++) {
    let categorias=mostrarElementoAleatorioSinRepetir(datosCategorias);
    categoriasAleatorias.push(categorias);
}

//RECOMENDACIONES
for (let i = 0; i < listaRecomendaciones.length; i++) {
    let recomendaciones=mostrarElementoAleatorioSinRepetir(datosRecomendaciones);
    recomendacionesAleatorias.push(recomendaciones);
}
    console.log(categoriasAleatorias)
    return (
        <React.Fragment>
           <section className={StylesHome.categorias}>
           <h3 className={StylesHome.titulo}>Categorías</h3>
           <div className={StylesHome.cardGrid}>
           {categoriasAleatorias.map((categoria)=>(
                <Card key={categoria.id} dato={categoria} esCategoria={true}/>
            ))}
            </div>
           </section>
           <section className={StylesHome.categorias}>
           <h3 className={StylesHome.titulo}>Recomendaciones</h3>
           <div className={StylesHome.cardGrid}>
           {recomendacionesAleatorias.map((recomendacion)=>(
                <Card key={recomendacion.id} dato={recomendacion} esCategoria={false}/>
            ))}
            </div>
           </section>
        </React.Fragment>
    )
}

export default Home