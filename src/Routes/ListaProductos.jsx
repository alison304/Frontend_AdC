import StylesListaProductos from '../Styles/ListaProductos.module.css'
import CardProductos from '../Components/CardProductos'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ListaProductos({ listaProductos }) {

    const params = useParams();
    //filtramos los que sean de esa categoria
    const productosFiltrados = listaProductos.filter(producto => producto.categoria.idCategoria == params.id);
    // Copia del array original
    let datosProductos = [...productosFiltrados];
    let productosAleatorias = [];

    function mostrarElementoAleatorioSinRepetir(datosRestantes) {
        if (datosRestantes.length === 0) {
            console.log("Ya se mostraron todos los elementos.");
            return;
        }
        // Elegir un índice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * datosRestantes.length);

        // Obtener y eliminar el elemento aleatorio
        const elementoAleatorio = datosRestantes.splice(indiceAleatorio, 1)[0];
        return elementoAleatorio;
    }

    for (let i = 0; i < productosFiltrados.length; i++) {
        let producto = mostrarElementoAleatorioSinRepetir(datosProductos);
        productosAleatorias.push(producto);
    }


    const obtenerTituloCategoria = () => {
        let titulo = 'Vajillas';
        if (params.id == 2) {
            titulo = 'Cubiertos';
        }
        else if (params.id == 3) {
            titulo = 'Cristaleria';
        }
        return titulo;
    }

    const titulo = obtenerTituloCategoria();

    const navigate = useNavigate();

    const onBack = () => {
        navigate(-1)
    }

    return (
        <section className={StylesListaProductos.productos}>
            <h3 className={StylesListaProductos.titulo}>{titulo}</h3>
            <div className={StylesListaProductos.cardGrid}>
                {productosAleatorias.map((producto) => (
                    <CardProductos key={producto.id} producto={producto} />
                ))}
            </div>
            <button className='btn-back' onClick={onBack}>Volver</button>
        </section>
    )
}

export default ListaProductos