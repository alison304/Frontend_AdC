import React, { useState, useRef } from "react";
import StylesAdmin from '../Styles/Administrador.module.css';
import { useNavigate } from 'react-router-dom';

function AgregarProducto({ listaProductos, setListaProductos }) {
  const navigate = useNavigate();
  const fileInputRef = useRef(null); // Referencia para el campo de archivo

  const volverAdministrador = () => {
    navigate('/admin');
  };

  const [producto, setProducto] = useState({
    id: 0,
    nombre: "",
    descripcion: "",
    precioAlquiler: 0.0,
    disponibilidad: 0,
    inventario: 0,
    fechaRegistro: "2024-10-25",
    categoria: { "idCategoria": 2 },
    imagenes: null
  });

  const [mensajeForm, setMensajeForm] = useState("");

  const handleChangenombre = (event) => {
    setProducto({ ...producto, nombre: event.target.value });
  };

  const handleChangedescripcion = (event) => {
    setProducto({ ...producto, descripcion: event.target.value });
  };

  const handleChangeImagenes = (event) => {
    setProducto((prevData) => ({
      ...prevData,
      imagenes: event.target.files[0] // Guarda el archivo de imagen en el estado
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (producto.nombre.trim().length > 0) {
      const existe = listaProductos.some((item) => item.nombre === producto.nombre);

      if (existe) {
        setMensajeForm(`ERROR: El nombre ${producto.nombre} ya está en uso`);
      } else {
        if (producto.nombre.trim().length > 0 && producto.descripcion.trim().length > 0 && producto.imagenes !== null) {
          
          // Usa FormData para enviar los datos, incluidos el archivo de imagen
          const formData = new FormData();
          formData.append("nombre", producto.nombre);
          formData.append("descripcion", producto.descripcion);
          formData.append("precioAlquiler", producto.precioAlquiler);
          formData.append("disponibilidad", producto.disponibilidad);
          formData.append("inventario", producto.inventario);
          formData.append("fechaRegistro", producto.fechaRegistro);
          formData.append("categoria", JSON.stringify(producto.categoria));
          formData.append("imagenes", producto.imagenes);

          // Aquí podrías hacer una solicitud POST con formData al backend
          // Ejemplo:
          // axios.post('TU_ENDPOINT', formData)
          //   .then(response => console.log(response))
          //   .catch(error => console.error(error));

          // Agrega el producto al estado local
          setListaProductos((prevItems) => [...prevItems, producto]);

          // Limpia el formulario y el campo de archivo
          setProducto({
            id: 0,
            nombre: "",
            descripcion: "",
            precioAlquiler: 0.0,
            disponibilidad: 0,
            inventario: 0,
            fechaRegistro: "2024-10-25",
            categoria: { "idCategoria": 2 },
            imagenes: null
          });
          fileInputRef.current.value = ""; // Limpia el campo de archivo
          setMensajeForm(`El producto se ha guardado correctamente`);
        } else {
          setMensajeForm("Por favor verifique su información nuevamente. Debe ingresar todos los datos");
        }
      }
    }
  };

  return (
    <div className={StylesAdmin.registrarProducto}>
      <div className={StylesAdmin.titulo}>Panel de Administración</div>
      <a onClick={volverAdministrador} className={StylesAdmin.tituloVolver}>Volver</a>
      <div className={StylesAdmin.divTituloAgregar}>
        <span className={StylesAdmin.tituloAgregar}>AGREGAR PRODUCTO NUEVO</span>
      </div>
      <form onSubmit={handleSubmit} className={StylesAdmin.registrarProducto}>
        <div className={StylesAdmin.divTituloAgregar}>
          <label className={StylesAdmin.inputsFormulario}>Nombre *</label>
          <input
            className={StylesAdmin.inputsFormulario}
            type="text"
            value={producto.nombre}
            onChange={handleChangenombre}
            placeholder="Nombre del objeto"
          />
        </div>
        <div className={StylesAdmin.divTituloAgregar}>
          <label className={StylesAdmin.inputsFormulario}>Descripcion *</label>
          <input
            className={StylesAdmin.inputsFormulario}
            type="text"
            value={producto.descripcion}
            placeholder="Describe el producto"
            onChange={handleChangedescripcion}
          />
        </div>
        <div className={StylesAdmin.divTituloAgregar}>
          <label className={StylesAdmin.inputsFormulario}>Sube imágenes *</label>
          <input
            className={StylesAdmin.inputsFormulario}
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChangeImagenes}
            ref={fileInputRef} // Asigna la referencia al campo de archivo
          />
        </div>
        <button className={StylesAdmin.botoneRegistrar}>AGREGAR PRODUCTO</button>
      </form>

      {mensajeForm && <p className={StylesAdmin.mensajeForm}>{mensajeForm}</p>}
    </div>
  );
}

export default AgregarProducto;
