import React from "react";
import StylesHome from '../Styles/Home.module.css'

const Card = ({categoria}) => {
  console.log(categoria)
  const {id, nombre,imagen} = categoria;

  return (
    <div className={StylesHome.card}>
        <h3 className={StylesHome.nombreCategorias} >{nombre}</h3>
        <img src={imagen} className={StylesHome.cardImg}/> 
       {/* <Link to={"/detail/" + id}>
        </Link>*/}
    </div>

    
  );
};

export default Card;
