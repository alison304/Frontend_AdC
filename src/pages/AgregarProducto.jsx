import React, { useState } from "react";
import StylesAdmin from '../styles/AgregarProducto.module.css';

function AgregarProducto({ listaProductos, setListaProductos, categorias }) {
  const [producto, setProducto] = useState({
    id: 0,
    nombre: "",
    descripcion: "",
    precioAlquiler: 0.0,
    disponibilidad: 0,
    inventario: 0,
    fechaRegistro: "2024-10-25",
    categoriaId: "",
    tematica: "",
    caracteristicas: "",
    imagenes: null
  });

  const [mensajeForm, setMensajeForm] = useState("");

  const handleChange = (field, value) => {
    setProducto({ ...producto, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica para agregar el producto
    console.log("Producto agregado:", producto);
    setMensajeForm("Producto agregado con éxito!");
  };

  return (
    <div className={StylesAdmin.registrarProducto}>
      <div className={StylesAdmin.titulo}>Panel de Administración</div>

      {/* Nombre */}
      <div className={StylesAdmin.divTituloAgregar}>
        <label className={StylesAdmin.inputsFormulario}>Nombre *</label>
        <input
          className={StylesAdmin.inputsFormulario}
          type="text"
          value={producto.nombre}
          onChange={(e) => handleChange("nombre", e.target.value)}
          placeholder="Nombre del objeto"
        />
      </div>

      {/* Descripción */}
      <div className={StylesAdmin.divTituloAgregar}>
        <label className={StylesAdmin.inputsFormulario}>Descripcion *</label>
        <input
          className={StylesAdmin.inputsFormulario}
          type="text"
          value={producto.descripcion}
          onChange={(e) => handleChange("descripcion", e.target.value)}
          placeholder="Describe el producto"
        />
      </div>

      {/* Categoría */}
      <div className={StylesAdmin.divTituloAgregar}>
        <label className={StylesAdmin.inputsFormulario}>Categoría *</label>
        <select
          className={StylesAdmin.inputsFormulario}
          value={producto.categoriaId}
          onChange={(e) => handleChange("categoriaId", parseInt(e.target.value))}
        >
          <option value="" disabled>Selecciona una categoría</option>
          {categorias && categorias.map((cat) => (
            <option key={cat.idCategoria} value={cat.idCategoria}>
              {cat.nombreCategoria}
            </option>
          ))}
        </select>
      </div>

      {/* Temática con Radio Buttons */}
      <div className={StylesAdmin.divTituloAgregar}>
        <label className={StylesAdmin.inputsFormulario}>Temática *</label>
        <div className={StylesAdmin.radioContainer}>
          {["Plata", "Oro", "Mármol", "Cerámica", "Añadir otro"].map((tematica) => (
            <label key={tematica} className={StylesAdmin.radioLabel}>
              <input
                type="radio"
                name="tematica"
                value={tematica}
                checked={producto.tematica === tematica}
                onChange={() => handleChange("tematica", tematica)}
              />
              {tematica}
            </label>
          ))}
        </div>
      </div>

      {/* Características */}
      <div className={StylesAdmin.divTituloAgregar}>
        <label className={StylesAdmin.inputsFormulario}>Características *</label>
        <select
          className={StylesAdmin.inputsFormulario}
          value={producto.caracteristicas}
          onChange={(e) => handleChange("caracteristicas", e.target.value)}
        >
          <option value="" disabled>Selecciona una característica</option>
          <option value="plata">Plata</option>
          <option value="oro">Oro</option>
          <option value="marmol">Mármol</option>
          <option value="ceramica">Cerámica</option>
          <option value="otro">Añadir otro</option>
        </select>
      </div>

      {/* Precio e Imagen en la misma línea */}
      <div className={StylesAdmin.divRow}>
        <div className={StylesAdmin.halfWidth}>
          <label className={StylesAdmin.inputsFormulario}>Precio *</label>
          <input
            className={StylesAdmin.inputsFormulario}
            type="number"
            value={producto.precioAlquiler}
            onChange={(e) => handleChange("precioAlquiler", parseFloat(e.target.value))}
            placeholder="Precio de alquiler"
          />
        </div>
        <div className={StylesAdmin.halfWidth}>
          <label className={StylesAdmin.inputsFormulario}>Sube imágenes *</label>
          <input
            className={StylesAdmin.inputsFormulario}
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => handleChange("imagenes", e.target.files[0])}
          />
        </div>
      </div>

      {/* Mensaje de confirmación */}
      {mensajeForm && <p className={StylesAdmin.mensajeForm}>{mensajeForm}</p>}

      {/* Botón de Agregar Producto */}
      <button className={StylesAdmin.botoneRegistrar} onClick={handleSubmit}>
        Agregar Producto
      </button>
    </div>
  );
}

export default AgregarProducto;
