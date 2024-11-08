import React from "react";
import { useState } from "react";
import StylesAdmin from '../styles/Administrador.module.css'
import { useNavigate } from 'react-router-dom'

function AgregarProducto({ listaProductos, setListaProductos }) {
  const navigate = useNavigate();
  console.log(listaProductos);

  const volverAdministrador = () => {
    navigate('/admin');
  }

  const [producto, setProducto] = useState({
    id: 0,
    nombre: "",
    descripcion: "",
    precioAlquiler: 0.0,
    disponibilidad: 0,
    inventario: 0,
    fechaRegistro: "2024-10-25",
    categoria: { "idCategoria": 2 },
    imagenes: ""
  });

  const [mensajeForm, setMensajeForm] = useState("")

  const handleChangenombre = (event) => {
    setProducto({ ...producto, nombre: event.target.value })
  }

  const handleChangedescripcion = (event) => {
    setProducto({ ...producto, descripcion: event.target.value })
  }

  /* const handleChangeprecioAlquiler= (event)=>{
     setProducto({...producto, precioAlquiler: event.target.value})
   } 
 
   const handleChangeDisponibilidad= (event)=>{
     setProducto({...producto, disponibilidad: event.target.value})
   }
 
   const handleChangeInventario= (event)=>{
     setProducto({...producto, inventario: event.target.value})
   }*/
  const handleChangeImagenes = (event) => {
    // Maneja el cambio en el campo de imagen
    setProducto((prevData) => ({
      ...prevData,
      imagenes: event.target.value // Guarda el archivo de imagen en el estado
    }));

    //setProducto({...producto, imagenes: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(producto);
    console.log(listaProductos);

    if (producto.nombre.trim().length > 0) {

      const existe = listaProductos.some((item) => item.nombre === producto.nombre);
      console.log(existe)
      if (existe) {
        setMensajeForm(`ERROR: El nombre  ${producto.nombre} ya esta en uso`)
      } else {

        if (producto.nombre.trim().length > 0 && producto.descripcion.trim().length > 0 && producto.imagenes !== null) {
          // Agrega el nuevo objeto al array existente
          setListaProductos((prevItems) => [...prevItems, producto]);

          // Limpia el formulario
          setProducto({
            nombre: "",
            descripcion: "",
            precioAlquiler: 0.0,
            disponibilidad: 0,
            inventario: 0,
            imagenes: ""
          });
          setMensajeForm(`El producto se ha guardado correctamente`)

        } else {
          setMensajeForm("Por favor verifique su información nuevamente. Debe ingresar todos los datos")
        }
      }
    }
  }

  const botonMovil = () => {
    navigate('/');
  };

  return (
    <>
      <div className={StylesAdmin.registrarProducto}>
        <div className={StylesAdmin.titulo}>Panel de Administración</div>
        <a onClick={volverAdministrador} className={StylesAdmin.tituloVolver}>Volver</a>
        <div className={StylesAdmin.divTituloAgregar}>
          <span className={StylesAdmin.tituloAgregar}>AGREGAR PRODUCTO NUEVO</span>
        </div>
        <form onSubmit={handleSubmit} className={StylesAdmin.registrarProducto}>
          <div className={StylesAdmin.divTituloAgregar}>
            <label className={StylesAdmin.inputsFormulario}>Nombre *</label>
            <input className={StylesAdmin.inputsFormulario}
              type="text"
              value={producto.nombre}
              onChange={handleChangenombre}
              placeholder="Nombre del objeto"
            />
          </div>
          <div className={StylesAdmin.divTituloAgregar}>
            <label className={StylesAdmin.inputsFormulario}>Descripcion *</label>
            <input className={StylesAdmin.inputsFormulario}
              type="text"
              value={producto.descripcion}
              placeholder="Describe el producto del producto"
              onChange={handleChangedescripcion}
            />
          </div>
          <div className={StylesAdmin.divTituloAgregar}>
            <label className={StylesAdmin.inputsFormulario}>Sube la imagen *</label>
            <input className={StylesAdmin.inputsFormulario}
              type="text"
              value={producto.imagenes}
              placeholder="Sube la url de las imágenes"
              onChange={handleChangeImagenes}
            />
          </div>
          <button className={StylesAdmin.botoneRegistrar}>AGREGAR PRODUCTO</button>
        </form>

        {<p className={StylesAdmin.mensajeForm}>{mensajeForm}</p>}

      </div>
      <div className={StylesAdmin.mensajeMovil}>
        <div className={StylesAdmin.fraseMovil}>
          <span className={StylesAdmin.frase2Movil}>Atención</span>No es posible entrar al Panel de Administración desde este dispositivo.
        </div>
        <button onClick={botonMovil} className={StylesAdmin.botonMovil}>Volver a inicio</button>
      </div>
    </>
  );
}


export default AgregarProducto