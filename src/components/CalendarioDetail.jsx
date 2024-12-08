import { React, useLayoutEffect, useState } from 'react'
import StylesCalendario from '../styles/CalendarioDetail.module.css'
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Importa el ícono de flecha
import CloseIcon from '@mui/icons-material/Close';
import { useProductosStates } from "../utils/Context"

function CalendarioDetail({ noDisponibles }) {
  const [fecha, setFecha] = useState(new Date());
  const [mostrarError, setmostrarError] = useState(false);
  const [mostrarErrorFechaNoDisponible, setmostrarErrorFechaNoDisponible] = useState(false);
  const [mostrarExito, setmostrarExito] = useState(false);
  const { state, dispatch } = useProductosStates();
  const [mostrarCalendario, setmostrarCalendario] = useState(false);
  console.log("desde calendario", noDisponibles)
  let blackoutDates = []

  // const listaReservas = [{"fechaInicio":"2024-11-22","fechaFin":"2024-11-24"},
  //   {"fechaInicio":"2024-12-12","fechaFin":"2024-12-18"}]

   const listaReservas = noDisponibles
  const obtenerDias = (fechaInicio, fechaFin) => {
    fechaInicio.setDate(fechaInicio.getDate() + 1);
    fechaFin.setDate(fechaFin.getDate() + 1);

    const date = new Date(fechaInicio.getTime());
    while (date <= fechaFin) {
      if(!blackoutDates.includes(date.toDateString())){
        blackoutDates.push(date.toDateString());
      }
        date.setDate(date.getDate() + 1);
    }
    return blackoutDates;
  }
  const handleCalendario = () => {
    console.log("estoy en cerrar", mostrarCalendario)
    setmostrarCalendario(!mostrarCalendario)
    if (!mostrarCalendario) {
      setmostrarErrorFechaNoDisponible(false)
      setmostrarError(false);
      setmostrarExito(false);
    }
  };
const validateDisabled = (date) => {
  return blackoutDates.includes(date.toDateString())
}
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
          console.log("estas tomando un rango que contiene un dia no disponible", diaInicio, diaFin, noDisponibles)
          setmostrarErrorFechaNoDisponible(true)
          setmostrarExito(false);

        }
      })
    }
    else {
      setmostrarError(true);
      setmostrarExito(false);
    }

    handleCalendario();
  }

  console.log(fecha)
  
  listaReservas.map(e=>{
    obtenerDias(new Date(e.fechaInicio),new Date(e.fechaFin))
  })
  return (
    <div className={StylesCalendario.divPrincipal}>

      {mostrarError && (<p className={StylesCalendario.mensajeError}>Debe Seleccionar una fecha inicial y una fecha final</p>)}
      {mostrarErrorFechaNoDisponible && (<p className={StylesCalendario.mensajeError}>El rango de fechas que selecciono contiene uno o mas dias no disponibles</p>)}
      {mostrarExito && (<p className={StylesCalendario.mensajeExito}>Se ha guardado la fecha seleccionada</p>)}

      <div className={StylesCalendario.titulo} >
        <button className={StylesCalendario.botonFechas} onClick={handleCalendario}>
          <p className={StylesCalendario.fechasSeleccionada}> Desde
            <span className={StylesCalendario.fechas}>
            {state.fechaInicial === null ?
              ('DD/MM/YYYY') :
              (state.fechaInicial)}</span>
          </p>
        </button>
        <ArrowForwardIcon /> {/* Usa el ícono de flecha */}
        <button className={StylesCalendario.botonFechas} onClick={handleCalendario}>
          <p className={StylesCalendario.fechasSeleccionada}>Hasta
            <span className={StylesCalendario.fechas}>
            {state.fechaFinal === null ?
              ('DD/MM/YYYY') :
              (state.fechaFinal)}</span>
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
              tileDisabled={({ date }) => validateDisabled(date)}
            />
          </div></> : <></>}



    </div>
  )
}

export default CalendarioDetail