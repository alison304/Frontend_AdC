import { React, useState } from 'react'
import StylesCalendario from '../styles/CalendarioDetail.module.css'
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Importa el ícono de flecha
import CloseIcon from '@mui/icons-material/Close';
import { useProductosStates } from "../utils/Context"

function CalendarioDetail() {
  const [fecha, setFecha] = useState(new Date());
  const [mostrarError, setmostrarError] = useState(false);
  const [mostrarErrorFechaNoDisponible, setmostrarErrorFechaNoDisponible] = useState(false);
  const [mostrarExito, setmostrarExito] = useState(false);
  const { state, dispatch } = useProductosStates();
  const [mostrarCalendario, setmostrarCalendario] = useState(false);

  const blackoutDates = [new Date('2024-11-20').toDateString()]
  const handleCalendario = () => {
    console.log("estoy en cerrar", mostrarCalendario)
    setmostrarCalendario(!mostrarCalendario)
    if(!mostrarCalendario){
      setmostrarErrorFechaNoDisponible(false)
      setmostrarError(false);
      setmostrarExito(false);
    }
  };
  const formatoFecha = (fecha) => {
    const dia = fecha.getDate().toString().padStart(2, '0'); // Asegura 2 dígitos para el día
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Asegura 2 dígitos para el mes
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
  };

  const cambiarFecha = (newDate) => {
    setFecha(newDate);
  };


  const guardarFechas = () => {

    if (new Date(fecha[0]).toDateString() !== "Invalid Date") {
      setmostrarError(false);
      setmostrarExito(true);
      const diaInicio = new Date(fecha[0]);
      const diaFin = new Date(fecha[1]);
      console.log("inicial", diaInicio);
      console.log("final", diaFin);
      dispatch({ type: "ADD_FECHA_INICIAL", payload: formatoFecha(diaInicio) });
      dispatch({ type: "ADD_FECHA_FINAL", payload: formatoFecha(diaFin) });
      blackoutDates.map((x) => {
        let xDate = new Date(x); 
        if (diaInicio.getTime() <= xDate.getTime() && diaFin.getTime() >= xDate.getTime()) {
          console.log("estas tomando un rango que contiene un dia no disponible", diaInicio, diaFin, blackoutDates)
          setmostrarErrorFechaNoDisponible(true)
          setmostrarExito(false);

        }
      } )
    }
    else {
      setmostrarError(true);
      setmostrarExito(false);
    }

    handleCalendario();
}

console.log(fecha)
return (
  <div className={StylesCalendario.divPrincipal}>

    {mostrarError && (<p className={StylesCalendario.mensajeError}>Debe Seleccionar una fecha inicial y una fecha final</p>)}
    {mostrarErrorFechaNoDisponible && (<p className={StylesCalendario.mensajeError}>El rango de fechas que selecciono contiene uno o mas dias no disponibles</p>)}
    {mostrarExito && (<p className={StylesCalendario.mensajeExito}>Se ha guardado la fecha seleccionada</p>)}

    <div className={StylesCalendario.titulo} >
      <button className={StylesCalendario.botonFechas} onClick={handleCalendario}>
        <p className={StylesCalendario.fechasSeleccionada}>
          {state.fechaInicial === null ?
            ('DD/MM/YYYY') :
            (state.fechaInicial)}
        </p>
      </button>
      <ArrowForwardIcon /> {/* Usa el ícono de flecha */}
      <button className={StylesCalendario.botonFechas} onClick={handleCalendario}>
        <p className={StylesCalendario.fechasSeleccionada}>
          {state.fechaFinal === null ?
            ('DD/MM/YYYY') :
            (state.fechaFinal)}
        </p>
      </button>
    </div>
    {mostrarCalendario ?
      <><div className={StylesCalendario.divIconoCerrar}>
        <button onClick={handleCalendario} className={StylesCalendario.botonIconoCerrar}>
          <CloseIcon className={StylesCalendario.iconoCerrar} />
        </button>
        <button className={StylesCalendario.botonGuardarFecha} onClick={guardarFechas}>Confirmar</button>
      </div>
        <div className={StylesCalendario.calendario}>
          <Calendar
            showDoubleView={true}
            returnValue='range'
            selectRange
            onChange={cambiarFecha}
            locale='es-ES'
            tileDisabled={({ date }) => blackoutDates.includes(date.toDateString())}
          />
        </div></> : <></>}



  </div>
)
}

export default CalendarioDetail