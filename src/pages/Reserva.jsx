import React from 'react'
import StylesReserva from '../styles/Reserva.module.css'

function Reserva() {
  return (
    <section className={StylesReserva.principal}>
        <p className={StylesReserva.titulo}>Confirma y paga</p>
        <article className={StylesReserva.articulo}>
            <div className={StylesReserva.div1}>
                <img src="https://dovet.es/wp-content/uploads/2017/01/gato-768x658.jpg"className={StylesReserva.imagen} />
                <div className={StylesReserva.div1_1}> 
                    <p className={StylesReserva.nombreProducto}>Vajilla Hyra Premium</p>
                    <p className={StylesReserva.descripcionProducto}> Platos y cuencos de varios tamaños, añade versatilidad a tu mesa, destacando un esmalte brillante y detalles 
                        delicados para impresionar a tus invitados con estilo.</p>
                    <p className={StylesReserva.descripcionProducto}>Piezas: 24</p>
                </div>
                <div className={StylesReserva.div1_2}>                  
                        <p className={StylesReserva.fechasSeleccionada}>Fechas</p>
                        <p className={StylesReserva.fechasSeleccionada}>12/01/2024-12/01/2024</p>             
                </div>
            </div>
            <div className={StylesReserva.div2}>
                <p className={StylesReserva.informacion}>Información del usuario</p>
                <div className={StylesReserva.div2_1}>
                    <p className={StylesReserva.nombre}>Nombre</p>    
                    <p className={StylesReserva.datosUsuario}>Fabrizio Rodriguez</p>
                </div>
                <div className={StylesReserva.div2_1}>
                    <p className={StylesReserva.correo}>Correo</p>
                    <p className={StylesReserva.datosUsuario}>Fabrizio@gmail.com</p>
                </div>
            </div>
            
            <div className={StylesReserva.div3}>
                <p>S/ 320</p>
            </div>
            
        </article>
    </section>
  )
}

export default Reserva