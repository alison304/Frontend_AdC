import { useState, useEffect } from "react";
import axios from "axios";
import productService from "../services/producto.service"; 
import styles from "../styles/AgregarProducto.module.css";
import { RiArrowGoBackFill } from "react-icons/ri"; // Importar el ícono
import Swal from "sweetalert2"; // Importar SweetAlert

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


  useEffect(() => {
    axios.get(`${BASE_URL}/categorias/listar`).then((res) => setCategorias(res.data));
    axios.get(`${BASE_URL}/tematicas/listar`).then((res) => setTematicas(res.data));
    axios.get(`${BASE_URL}/caracteristicas/listar`).then((res) => setCaracteristicas(res.data))
    .catch((error) => console.error("Error al cargar características:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "precio_alquiler" && parseInt(value, 10) < 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El precio de alquiler no puede ser negativo.",
      });
      return;
    }

    setProduct({
      ...product,
      [name]: name.includes("_id") || name === "precio_alquiler" ? parseInt(value, 10) : value,
    });
  };

  const agregarImagen = () => {
    if (nuevaImagen.trim()) {
      setProduct({
        ...product,
        imagenes: [...product.imagenes, nuevaImagen.trim()],
      });
      setNuevaImagen("");

      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Imagen agregada correctamente.",
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Advertencia",
        text: "Ingrese una URL válida.",
      });
    }
  };

  const eliminarImagen = (index) => {
    setProduct({
      ...product,
      imagenes: product.imagenes.filter((_, i) => i !== index),
    });

    Swal.fire({
      icon: "success",
      title: "Éxito",
      text: "Imagen eliminada correctamente.",
    });
  };
  // Agregar ID de característica
const addFeature = () => {
  const featureId = parseInt(newFeatureId, 10);
  
  if (newFeatureId && !product.caracteristicaIds.includes(featureId)) {
    setProduct({
      ...product,
      caracteristicaIds: [...product.caracteristicaIds, featureId],
    });
    setNewFeatureId("");

    Swal.fire({
      icon: "success",
      title: "Éxito",
      text: "Característica añadida correctamente.",
    });
  } else {
    Swal.fire({
      icon: "warning",
      title: "Advertencia",
      text: "La característica ya está agregada o es inválida.",
    });
  }
};
  // Eliminar una característica
  const removeFeature = (id) => {
    setProduct({
      ...product,
      caracteristicaIds: product.caracteristicaIds.filter((featureId) => featureId.id !== id),
    });

    Swal.fire({
      icon: "success",
      title: "Éxito",
      text: "Característica eliminada correctamente.",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.nombre || !product.descripcion || product.imagenes.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor complete todos los campos obligatorios.",
      });
      return;
    }

    try {
      await productService.agregarProducto(
        product.nombre,
        product.descripcion,
        product.precio_alquiler,
        product.categoria_id,
        product.tematica_id,
        product.imagenes,
        product.caracteristicaIds
      );

      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Producto registrado con éxito.",
      });

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

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al registrar el producto.",
      });
    }
  };

  const onBack = () => {
    window.history.back();
  };

  return (
    <div>
      <div className="btn-volv">
        <button className={styles.btnVolveradm} onClick={onBack}>
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
          <button type="button" onClick={addFeature}className={styles.agregarBtn}>
            Añadir Característica
          </button>

          <ul>
            {product.caracteristicaIds.map((id) => (
              <li key={id}>
                {id}{" "}
                <button type="button" className={styles.eliminarBtn} onClick={() => removeFeature(id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>


          <button type="submit" className={styles.submitregistrar}>
            Registrar Producto
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgregarProducto;


