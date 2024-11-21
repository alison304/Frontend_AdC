import React, { useState, useEffect } from 'react';
import { getUserByEmail } from '../../services/user.service';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = ({ onLogout }) => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('personal-data');
    const [userData, setUserData] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        // Llama a getUserByEmail cuando el componente se monta
        const fetchUserData = async () => {
            try {


                    const data = await getUserByEmail();
                    // Asigna los valores recibidos al estado
                    setUserData({
                        name: data.name || '', // Usando valores recibidos o cadenas vacías
                        surname: data.surname || '',
                        email: data.email || '',
                        password: '' // No debes mostrar la contraseña real
                    });
                    console.log(data.name)
            } catch (error) {
                console.error('Error fetching user data:', error);
                // Manejo adicional del error, como redirección o mostrar mensaje
            }
        };

        fetchUserData();
    }, []);

    // Resto del código...
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUserData({ ...userData, [id]: value });
    };

    const handleLogoutAndRedirect = () => {
        onLogout();
        localStorage.removeItem('authToken');
        navigate('/'); // Redirigir a la página de inicio
    };

    const handleSaveChanges = () => {
        // Lógica para guardar cambios, aquí puedes agregar tu lógica de actualización
        console.log('Datos guardados:', userData);
    };

    return (
        <div className="user-profile-container">
            <div className="user-profile-layout">
                <div className="user-profile-tabs user-profile-tabs-vertical">
                    <button className={`tab-link ${activeTab === 'personal-data' ? 'active' : ''}`} onClick={() => handleTabChange('personal-data')}>Datos Personales</button>
                    <button className={`tab-link ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => handleTabChange('orders')}>Pedidos</button>
                    <button className={`tab-link ${activeTab === 'favorites' ? 'active' : ''}`} onClick={() => handleTabChange('favorites')}>Mis Favoritos</button>
                    <button className={`tab-link ${activeTab === 'addresses' ? 'active' : ''}`} onClick={() => handleTabChange('addresses')}>Direcciones</button>
                    <button className={`tab-link ${activeTab === 'logout' ? 'active' : ''}`} onClick={handleLogoutAndRedirect}>Cerrar Sesión</button>
                </div>

                <div className="user-profile-content">
                    {activeTab === 'personal-data' && (
                        <div id="personal-data" className="user-profile-tab-content active">
                            <h2>Datos Personales</h2>
                            <div className="user-profile-form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" id="name" value={userData.name} onChange={handleInputChange} placeholder="Ingresa tu nombre" />
                            </div>
                            <div className="user-profile-form-group">
                                <label htmlFor="surname">Apellido</label>
                                <input type="text" id="surname" value={userData.surname} onChange={handleInputChange} placeholder="Ingresa tu apellido" />
                            </div>
                            <div className="user-profile-form-group">
                                <label htmlFor="email">Correo Electrónico</label>
                                <input type="email" id="email" value={userData.email} onChange={handleInputChange} placeholder="Ingresa tu correo electrónico" disabled />
                            </div>
                            <div className="user-profile-form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" id="password" value={userData.password} onChange={handleInputChange} placeholder="Ingresa tu contraseña" />
                            </div>
                            <button className="user-profile-button" onClick={handleSaveChanges}>Guardar Cambios</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
