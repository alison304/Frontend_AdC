import './SearchBar.css';
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import CalendarioBuscador from './CalendarioBuscador'
import React, { useState } from "react";
const SearchBar = () => {

    const [mostrarCalendario, setmostrarCalendario] = useState(false);

   /* const Popup = ({ onClose, children }) => {
        return (
            <div >
                <div >
                    {children}
                    <button onClick={onClose} >Cerrar</button>
                </div>
            </div>
        );
    };
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };*/


const Modal = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Selecciona las fechas</h2>
                <p>Aquí puedes mostrar tu calendario o cualquier otro contenido.</p>
                <button onClick={onClose} className="close-button">Cerrar</button>
            </div>
        </div>
    );
};

const [isModalVisible, setIsModalVisible] = useState(false);

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
        {/*<div>
            <button onClick={handleOpenPopup} className="open-popup-button">
                Mostrar Pop-up
            </button>
            {isPopupVisible && (
                <Popup onClose={handleClosePopup}>
                    <h2>¡Este es un Pop-up!</h2>
                    <p>Aquí puedes colocar cualquier contenido.</p>
                </Popup>
            )}
        </div>*/}


      
            
        </>
    )
}

export default SearchBar
