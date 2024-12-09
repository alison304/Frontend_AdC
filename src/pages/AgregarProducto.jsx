import { useState, useEffect } from "react";
import axios from "axios";
import productService from "../services/producto.service"; 
import styles from "../styles/AgregarProducto.module.css";
import { RiArrowGoBackFill } from "react-icons/ri"; // Importar el ícono

const BASE_URL = "https://auradecristalapi-production.up.railway.app";

const AgregarProducto = () => {
  const [product, setProduct] = useState({
    nombre: "",
    descripcion: "",
    precio_alquiler: 0,
    categoria_id: 0,
    tematica_id: 0,
    imagenes: [],
    caracteristicaIds: [],
  });

  const [categorias, setCategorias] = useState([]);
  const [tematicas, setTematicas] = useState([]);
  const [caracteristicas, setCaracteristicas] = useState([]);
  const [newFeatureId, setNewFeatureId] = useState("");
  const [nuevaImagen, setNuevaImagen] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Cargar categorías y temáticas al montar el componente
  useEffect(() => {
    axios.get(`${BASE_URL}/categorias/listar`).then((res) => setCategorias(res.data));
    axios.get(`${BASE_URL}/tematicas/listar`).then((res) => setTematicas(res.data));
    axios.get(`${BASE_URL}/caracteristicas/listar`).then((res) => setCaracteristicas(res.data))
    .catch((error) => console.error("Error al cargar características:", error));
  }, []);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name.includes("_id") || name === "precio_alquiler" ? parseInt(value, 10) : value,
    });
  };

  // Agregar una nueva imagen
  const agregarImagen = () => {
    if (nuevaImagen.trim()) {
      setProduct({
        ...product,
        imagenes: [...product.imagenes, nuevaImagen.trim()],
      });
      setNuevaImagen("");
    } else {
      alert("Ingrese una URL válida.");
    }
  };

  // Eliminar una imagen
  const eliminarImagen = (index) => {
    setProduct({
      ...product,
      imagenes: product.imagenes.filter((_, i) => i !== index),
    });
  };

  // Agregar ID de característica
  const addFeature = () => {
    if (newFeatureId && !product.caracteristicaIds.includes(parseInt(newFeatureId, 10))) {
      setProduct({
        ...product,
        caracteristicaIds: [...product.caracteristicaIds, parseInt(newFeatureId, 10)],
      });
      setNewFeatureId("");
    } else {
      alert("El ID de la característica es inválido o ya está agregado.");
    }
  };

  // Eliminar una característica
  const removeFeature = (id) => {
    setProduct({
      ...product,
      caracteristicaIds: product.caracteristicaIds.filter((featureId) => featureId !== id),
    });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product.nombre || !product.descripcion || product.imagenes.length === 0) {
      setMensaje("Por favor complete todos los campos obligatorios.");
      return;
    }

    try {
      // Llamada a agregarProducto con los parámetros adecuados
      await productService.agregarProducto(
        product.nombre,
        product.descripcion,
        product.precio_alquiler,
        product.categoria_id,
        product.tematica_id,
        product.imagenes,
        product.caracteristicaIds
      );
      alert("Producto registrado con éxito.");
      setProduct({
        nombre: "",
        descripcion: "",
        precio_alquiler: 0,
        categoria_id: 0,
        tematica_id: 0,
        imagenes: [],
        caracteristicaIds: [],
      });
    } catch (error) {
      console.error(error);
      alert("Hubo un error al registrar el producto.");
    }
  };

  // Función para volver a la página anterior
  const onBack = () => {
    window.history.back();
  };

  return (
    <div>
      <div className="btn-volv">
        <button className="btnVolver" onClick={onBack}>
          <RiArrowGoBackFill />
          Volver
        </button>
      </div>
      <h3 className="title-form">Agregar Producto</h3>

      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={product.nombre}
            onChange={handleChange}
            required
          />

          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={product.descripcion}
            onChange={handleChange}
            required
          ></textarea>

          <label>Precio de Alquiler:</label>
          <input
            type="number"
            name="precio_alquiler"
            value={product.precio_alquiler}
            onChange={handleChange}
            required
          />

          <label>Categoría:</label>
          <select
            name="categoria_id"
            value={product.categoria_id}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una categoría</option>
            {categorias.map((cat) => (
              <option key={cat.idCategoria} value={cat.idCategoria}>
                {cat.descripcion}
              </option>
            ))}
          </select>

          <label>Temática:</label>
          <select
            name="tematica_id"
            value={product.tematica_id}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una temática</option>
            {tematicas.map((tem) => (
              <option key={tem.idTematica} value={tem.idTematica}>
                {tem.descripcion}
              </option>
            ))}
          </select>

          <label>Imágenes (URLs):</label>
          {product.imagenes.map((url, index) => (
            <div key={index} className={styles.imagenContainer}>
              <span>{url}</span>
              <button type="button" onClick={() => eliminarImagen(index)} className={styles.eliminarBtn}>
                Eliminar
              </button>
            </div>
          ))}
          <div>
            <input
              type="text"
              value={nuevaImagen}
              onChange={(e) => setNuevaImagen(e.target.value)}
              placeholder="URL de la imagen"
            />
            <button type="button" onClick={agregarImagen} className={styles.agregarBtn}>
              Agregar Imagen
            </button>
          </div>

          <label>Agregar Característica:</label>
          <select
            value={newFeatureId}
            onChange={(e) => setNewFeatureId(e.target.value)}
          >
            <option value="">Seleccione una característica</option>
            {caracteristicas.map((carac) => (
              <option key={carac.idCaracteristica} value={carac.idCaracteristica}>
                {carac.nombre} - {carac.descripcion}
              </option>
            ))}
          </select>
          <button type="button" onClick={addFeature} className={styles.agregarBtn}>
            Añadir Característica
          </button>

          <ul>
            {product.caracteristicaIds.map((id) => (
              <li key={id}>
                {id}{" "}
                <button type="button" onClick={() => removeFeature(id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          {mensaje && <p className={styles.error}>{mensaje}</p>}

          <button type="submit"className={styles.submit}>Registrar Producto</button>
        </form>
      </div>
    </div>
  );
};

export default AgregarProducto;

