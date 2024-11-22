import React from 'react'
import StylesCalendario from '../../styles/CalendarioBuscador.module.css'
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
function CalendarioBuscador({ onClose }) {

    const guardarFechas = () => {
        console.log("guardar fecha");
    }
  return (
    <div className={StylesCalendario.divPrincipal}>
        <h1 className={StylesCalendario.titulo}>React Calendar</h1>
        <Calendar />
        <button className={StylesCalendario.boton} onClick={guardarFechas}>
        Guardar
        </button>
        <button onClick={onClose} className="close-button">Cerrar</button>
    </div>
  )
}

export default CalendarioBuscador