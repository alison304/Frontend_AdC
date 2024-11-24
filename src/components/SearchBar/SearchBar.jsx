import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import CalendarioBuscador from './CalendarioBuscador'
import React, { useState } from "react";
import {useProductosStates} from "../../utils/Context"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const SearchBar = () => {
    const {state} = useProductosStates();
    const [mostrarCalendario, setmostrarCalendario] = useState(false);

    const handleCalendario = () => {
        setmostrarCalendario(!mostrarCalendario)
    };

    return (
        <>
            <div className='search-bar'>
                <form className ='form'>
                    <input type="text" style={{fontSize: '1rem', width :'50%',border:'none', borderRadius: '0px'}} placeholder="Que estás buscando?" className="search-input" />
                    <button className="search-button"><SearchIcon style={{  color: '#A3A3A1',fontSize: '1.3rem' }} /></button>
                </form>
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
                    <button className="botonBuscador" >Buscar</button>
                    {mostrarCalendario && (
                        <div className="modal-overlay">
                            <div className="modal-content">  
                                <CalendarioBuscador onClose={handleCalendario}/>
                            </div>
                        </div>
                    )}
                </div>
            </div>                    
            
        </>
    )
}

export default SearchBar
