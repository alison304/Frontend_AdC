import React, { useState } from "react";
import StylesAdmin from '../Styles/Administrador.module.css';

function AdministrarCaracteristicas({ listaProductos, setListaProductos, categorias }) {
  const [producto, setProducto] = useState({
    id: 0,
    nombre: "",
    descripcion: "",
    precioAlquiler: 0.0,
    disponibilidad: 0,
    inventario: 0,
    fechaRegistro: "2024-10-25",
    categoriaId: "", // Inicializa con un valor vacío
    imagenes: null
  });

  const [mensajeForm, setMensajeForm] = useState("");

  const handleChangenombre = (event) => {
    setProducto({ ...producto, nombre: event.target.value });
  };

  const handleChangedescripcion = (event) => {
    setProducto({ ...producto, descripcion: event.target.value });
  };

  const asignarCategoria = (productoId, categoriaId) => {
    setProducto((prevProducto) => ({
      ...prevProducto,
      categoriaId: parseInt(categoriaId)
    }));
  };

  return (
    <div className={StylesAdmin.registrarProducto}>
      <div className={StylesAdmin.titulo}>Panel de Administración</div>
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
          onChange={handleChangedescripcion}
          placeholder="Describe el producto"
        />
      </div>

      <div className={StylesAdmin.divTituloAgregar}>
        <label className={StylesAdmin.inputsFormulario}>Categoría *</label>
        <select
          className={StylesAdmin.inputsFormulario} // Usa la misma clase que los inputs para consistencia
          value={producto.categoriaId}
          onChange={(e) => asignarCategoria(producto.id, e.target.value)}
        >
          <option value="" disabled>Selecciona una categoría</option>
          {categorias && categorias.map((cat) => (
            <option key={cat.idCategoria} value={cat.idCategoria}>
              {cat.nombreCategoria}
            </option>
          ))}
        </select>
      </div>

      <div className={StylesAdmin.divTituloAgregar}>
        <label className={StylesAdmin.inputsFormulario}>Sube imágenes *</label>
        <input
          className={StylesAdmin.inputsFormulario}
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => setProducto({ ...producto, imagenes: e.target.files[0] })}
        />
      </div>
    </div>
  );
}

export default AdministrarCaracteristicas;
