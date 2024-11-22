import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/AgregarProducto.module.css";

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

  return (
    <div className={styles.container}>
      {/* Botón Volver */}
      <button className={styles.volver} onClick={() => navigate(-1)}>
        Volver
      </button>

      {/* Título Principal */}
      <h1 className={styles.titulo}>Panel de Administración</h1>

      {/* Subtítulo */}
      <h2 className={styles.subtitulo}>AGREGAR PRODUCTO NUEVO</h2>

      {/* Formulario */}
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label>Nombre *</label>
          <input
            type="text"
            value={producto.nombre}
            onChange={(e) => handleChange("nombre", e.target.value)}
            placeholder="Escribe el nombre del producto"
          />
        </div>

        <div className={styles["form-group"]}>
          <label>Inventario *</label>
          <input
            type="number"
            value={producto.inventario}
            onChange={(e) => handleChange("inventario", e.target.value)}
            placeholder="0"
          />
        </div>

        <div className={styles["form-group"]}>
          <label>Descripción *</label>
          <textarea
            value={producto.descripcion}
            onChange={(e) => handleChange("descripcion", e.target.value)}
            placeholder="Describe el producto"
          />
        </div>

        <div className={styles["form-group"]}>
          <label>Categoría *</label>
          <select
            value={producto.categoriaId}
            onChange={(e) => handleChange("categoriaId", e.target.value)}
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

        <div className={styles["form-group"]}>
          <label>Temática *</label>
          <select
            value={producto.tematica}
            onChange={(e) => handleChange("tematica", e.target.value)}
          >
            <option value="" disabled>
              Sin Temática
            </option>
            <option value="Navidad">Navidad</option>
            <option value="Cumpleaños">Cumpleaños</option>
          </select>
        </div>

        <div className={styles["form-group"]}>
          <label>Características</label>
          <div className={styles.caracteristicas}>
            {["Plata", "Garantía", "Lavavajilla", "Cerámica"].map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  value={item}
                  onChange={(e) =>
                    handleChange(
                      "caracteristicas",
                      producto.caracteristicas.includes(item)
                        ? producto.caracteristicas.filter((i) => i !== item)
                        : [...producto.caracteristicas, item]
                    )
                  }
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div className={styles["form-group"]}>
          <label>Subir Imágenes *</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>

        <div className={styles["form-group"]}>
          <label>Precio *</label>
          <input
            type="number"
            value={producto.precioAlquiler}
            onChange={(e) => handleChange("precioAlquiler", e.target.value)}
            placeholder="Colocar el precio"
          />
        </div>

        <button type="submit" className={styles["agregar-boton"]}>
          AGREGAR PRODUCTO
        </button>
      </form>
    </div>
  );
}

export default AgregarProducto;
