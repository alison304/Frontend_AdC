import './SearchBar.css';
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import CalendarioBuscador from './CalendarioBuscador'
import React, { useState } from "react";
const SearchBar = () => {

    const [mostrarCalendario, setmostrarCalendario] = useState(false);

    const handleCalendario = () => {
        setmostrarCalendario(!mostrarCalendario)
    };

    return (
        <>
        <div className='search-bar'>
            <form>
                <input type="text" placeholder="Que estás buscando?" className="search-input" />
                <button className="search-button"><IoSearch size={23} style={{ paddingLeft: "4%" }} /></button>
            </form>
            <div >
                    <button onClick={handleCalendario} className="open-modal-button">
                        Fecha
                    </button>
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
