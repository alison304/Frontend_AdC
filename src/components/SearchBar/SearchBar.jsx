import './SearchBar.css';
import CalendarioBuscador from './CalendarioBuscador'
import React, { useState } from "react";
import {useProductosStates} from "../../utils/Context"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const SearchBar = () => {
    const {state,dispatch} = useProductosStates();
    const [mostrarCalendario, setmostrarCalendario] = useState(false);
    const [busqueda, setbusqueda] = useState("");

    const handleCalendario = () => {
        setmostrarCalendario(!mostrarCalendario)
    };

    const noTieneNumeros =(texto) => {
        return !/\d/.test(texto); // Devuelve true si NO tiene números
      }
      

    const handleChangeBuscador= (event)=>{
        setbusqueda(event.target.value);       
      } 
    

    const buscar =(event) =>{
        event.preventDefault();
        console.log('busqueda',busqueda);
        if(noTieneNumeros(busqueda) && busqueda!==""){
            console.log('hola');
            dispatch({type:"MOSTRAR_BUSQUEDA", payload:true});
        }
    }

    return (
        <>
            <form className='form' onSubmit={buscar}>
                <div className ='search-bar'>
                    <input 
                    type="text" style={{fontSize: '1rem', width :'80%',border:'none', borderRadius: '0px'}} 
                    placeholder="Que estás buscando?" className="search-input" 
                    value={busqueda} onChange={handleChangeBuscador}/>
                </div>
                <div className="buscadorParte2" >
                    
                    <button onClick={handleCalendario} className="open-modal-button">
                        <div className='divBotonFechas'>
                            Fecha
                            <p className='rangoFechas'>
                                {(state.fechaInicial ===null && state.fechaFinal ===null) ? 
                                ('Seleccionar'):
                                (`${state.fechaInicial} - ${state.fechaFinal}`)}
                            </p>
                        </div>
                        <KeyboardArrowDownIcon/>
                    </button>
                    <button className="botonBuscador">Buscar</button>
                    {mostrarCalendario && (
                        <div className="modal-overlay">
                            <div className="modal-content">  
                                <CalendarioBuscador onClose={handleCalendario}/>
                            </div>
                        </div>
                    )}
                </div>
            </form>                    
            
        </>
    )
}

export default SearchBar
