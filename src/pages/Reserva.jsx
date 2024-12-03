import React from 'react'
import StylesReserva from '../styles/Reserva.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Importa el ícono de flecha
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function Reserva() {
  return (
    <section>
        <h1>Confirma y paga</h1>
        <article className={StylesReserva.articulo}>
            <div>
                <img src="https://dovet.es/wp-content/uploads/2017/01/gato-768x658.jpg"className={StylesReserva.imagen} />
            </div>
            <div className={StylesReserva.div2}> 
                <p className={StylesReserva.nombreProducto}>nombre producto</p>
                <div className={StylesReserva.rangoFechas}>
                    <div className={StylesReserva.fechas}>
                        <p>Desde</p>
                        <p className={StylesReserva.fechasSeleccionada}>12/01/2024</p>
                    </div>
                    <ArrowForwardIcon /> {/* Usa el ícono de flecha */}
                    <div className={StylesReserva.fechas}>
                        <p>Hasta</p>
                        <p className={StylesReserva.fechasSeleccionada}>12/01/2024</p>
                    </div>                 
                </div>
            </div>
            <div className={StylesReserva.div3}>
                <p>S/ 320</p>
            </div>
            <DeleteOutlineIcon sx={{ color: 'white', fontSize: 30 }} />
        </article>
    </section>
  )
}

export default Reserva