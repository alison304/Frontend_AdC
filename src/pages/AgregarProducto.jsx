import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/AgregarProducto.module.css";

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
    imagenes: null,
  });

  const [mensajeForm, setMensajeForm] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setProducto({ ...producto, [field]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImagenes(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Producto agregado:", producto);
    console.log("Imágenes subidas:", imagenes);
    setMensajeForm("Producto agregado con éxito!");
  };

  const handleVolver = () => {
    navigate(-1);
  };

  return (
    <div>
      {/* Botón Volver */}
      <button className={styles["volver-boton"]} onClick={handleVolver}>
        ← Volver
      </button>

      <div className={styles["panel-administracion"]}>
        {/* Encabezado principal */}
        <h1>Panel de Control</h1>
        <h2>Agregar Producto Nuevo</h2>

        {/* Formulario de Agregar Producto */}
        <form onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className={styles["form-group"]}>
            <label>Nombre *</label>
            <input
              type="text"
              value={producto.nombre}
              onChange={(e) => handleChange("nombre", e.target.value)}
              placeholder="Nombre del producto"
            />
          </div>

          {/* Descripción */}
          <div className={styles["form-group"]}>
            <label>Descripción *</label>
            <input
              type="text"
              value={producto.descripcion}
              onChange={(e) => handleChange("descripcion", e.target.value)}
              placeholder="Describe el producto"
            />
          </div>

          {/* Categoría */}
          <div className={styles["form-group"]}>
            <label>Categoría *</label>
            <select
              value={producto.categoriaId}
              onChange={(e) => handleChange("categoriaId", parseInt(e.target.value))}
            >
              <option value="" disabled>
                Selecciona una categoría
              </option>
              {categorias &&
                categorias.map((cat) => (
                  <option key={cat.idCategoria} value={cat.idCategoria}>
                    {cat.nombreCategoria}
                  </option>
                ))}
            </select>
          </div>

          {/* Temática */}
          <div className={styles["form-group"]}>
            <label>Temática *</label>
            <div className={styles["radio-container"]}>
              {["Plata", "Oro", "Mármol", "Cerámica", "Añadir otro"].map((tematica) => (
                <label key={tematica} className={styles["radio-label"]}>
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
          <div className={styles["form-group"]}>
            <label>Características *</label>
            <select
              value={producto.caracteristicas}
              onChange={(e) => handleChange("caracteristicas", e.target.value)}
            >
              <option value="" disabled>
                Selecciona una característica
              </option>
              <option value="Material">Material</option>
              <option value="Garantía">Garantía</option>
              <option value="Peso">Peso</option>
            </select>
          </div>

          {/* Subir Imágenes */}
          <div className={styles["form-group"]}>
            <label>Subir Imágenes *</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
            {imagenes.length > 0 && (
              <div className={styles["preview-container"]}>
                {imagenes.map((img, index) => (
                  <p key={index}>{img.name}</p>
                ))}
              </div>
            )}
          </div>

          {/* Botón Agregar */}
          <button type="submit" className={styles["agregar-boton"]}>
            Agregar Producto
          </button>
        </form>
      </div>
    </div>
  );
}

export default AgregarProducto;
