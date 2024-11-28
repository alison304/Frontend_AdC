import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/AgregarProducto.module.css";
import { createProduct, updateProduct } from '../services/producto.service';


const BASE_URL = "https://auradecristalapi-development.up.railway.app";

const AgregarProducto = () => {
  const [categorias, setCategorias] = useState([]);
  const [tematicas, setTematicas] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [inventario, setInventario] = useState(0);
  const [categoriaId, setCategoriaId] = useState(0);
  const [tematicaId, setTematicaId] = useState(0);
  const [imagenes, setImagenes] = useState([]);
  const [caracteristicas, setCaracteristicas] = useState([]);
  const [mensaje, setMensaje] = useState("");

  // Obtener categorías y temáticas
  useEffect(() => {
    axios
      .get(BASE_URL+"/categorias/listar")
      .then((response) => {
        setCategorias(response.data);
      })
      .catch(() => {
        console.error("Error al cargar categorías.");
      });

    axios
      .get(BASE_URL+"/tematicas/listar")
      .then((response) => {
        setTematicas(response.data);
      })
      .catch(() => {
        console.error("Error al cargar temáticas.");
      });
  }, []);

  // Función para registrar un producto
  const handleAgregarProducto = async (e) => {
    e.preventDefault();

    // Validar que se ha ingresado toda la información
    if (!nombre || !descripcion || !precio || !inventario || !categoriaId || !tematicaId || imagenes.length === 0) {
      setMensaje("Por favor complete todos los campos antes de registrar el producto.");
      return;
    }

    const nuevoProducto = {
      nombre,
      descripcion,
      precio_alquiler: precio,
      disponibilidad: inventario, // Cambiar según el campo correspondiente en la API
      inventario,
      categoria_id: categoriaId,
      tematica_id: tematicaId,
      imagenes,
      caracteristicaIds: caracteristicas.map((car) => parseInt(car)),
    };

    try {
      const response = await axios.post(
        BASE_URL+"/productos/registrar",
        nuevoProducto,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setMensaje("Producto registrado con éxito.");
        limpiarFormulario();
      } else {
        setMensaje("Hubo un error al registrar el producto.");
      }
    } catch (error) {
      console.error("Error al registrar producto:", error);
      setMensaje("Error al registrar el producto.");
    }
  };

  // Limpiar formulario después de registrar el producto
  const limpiarFormulario = () => {
    setNombre("");
    setDescripcion("");
    setPrecio(0);
    setInventario(0);
    setCategoriaId(0);
    setTematicaId(0);
    setImagenes([]);
    setCaracteristicas([]);
  };

  return (
    <div className={styles.container}>
      <button className={styles.volver} onClick={() => window.history.back()}>
        Volver
      </button>
      <h2 className={styles.titulo}>Agregar Producto</h2>
      <form className={styles.formulario} onSubmit={handleAgregarProducto}>
        <div className={styles.formGroup}>
          <label>Nombre *</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Descripción *</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label>Precio *</label>
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Inventario *</label>
          <input
            type="number"
            value={inventario}
            onChange={(e) => setInventario(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Categoría *</label>
          <select
            value={categoriaId}
            onChange={(e) => setCategoriaId(e.target.value)}
            required
          >
            <option value={0}>Seleccionar</option>
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.descripcion}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Temática *</label>
          <select
            value={tematicaId}
            onChange={(e) => setTematicaId(e.target.value)}
            required
          >
            <option value={0}>Seleccionar</option>
            {tematicas.map((tem) => (
              <option key={tem.id} value={tem.id}>
                {tem.descripcion}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Imágenes *</label>
          <input
            type="file"
            multiple
            onChange={(e) => {
              const files = Array.from(e.target.files).map((file) =>
                URL.createObjectURL(file)
              );
              setImagenes(files);
            }}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Características</label>
          <input
            type="text"
            value={caracteristicas}
            onChange={(e) =>
              setCaracteristicas(e.target.value.split(",").map((c) => c.trim()))
            }
            placeholder="Separar con comas (ej: 1, 2, 3)"
          />
        </div>
        {mensaje && <p className={mensaje.includes("éxito") ? styles.success : styles.error}>{mensaje}</p>}
        <button type="submit" className={styles.btnSubmit}>
          Registrar Producto
        </button>
      </form>
    </div>
  );
};

export default AgregarProducto;
