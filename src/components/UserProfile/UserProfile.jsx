import React, { useState, useEffect } from 'react';
import { getOneUser, updateUser, logout } from '../../services/user.service';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('personal-data');
    const [userData, setUserData] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        // Creo que no hay api para esto
        const userId = 1; // Pendiente ver como saco el id
        getOneUser(userId).then(response => {
            const { name, lastName, email } = response.data;
            setUserData({ ...userData, name, surname: lastName, email });
        }).catch(error => {
            console.error('Error fetching user data:', error);
        });
    }, []);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUserData({ ...userData, [id]: value });
    };

    const handleLogout = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Vas a cerrar sesión.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, cerrar sesión'
        }).then((result) => {
            if (result.isConfirmed) {
                logout();
                Swal.fire(
                    'Cerrado',
                    'Has cerrado sesión exitosamente',
                    'success'
                );
                navigate('/logout');
            }
        });
    };

    const handleSaveChanges = () => {
        const userId = 1; // Pendiente ver como saco el id
        updateUser(userId, userData).then(() => {
            alert('Datos actualizados exitosamente');
        }).catch(error => {
            console.error('Error updating user data:', error);
        });
    };

    return (
        <div className="user-profile-container">
            <div className="user-profile-layout">
                <div className="user-profile-tabs user-profile-tabs-vertical">
                    <button className={`tab-link ${activeTab === 'personal-data' ? 'active' : ''}`} onClick={() => handleTabChange('personal-data')}>Datos Personales</button>
                    <button className={`tab-link ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => handleTabChange('orders')}>Pedidos</button>
                    <button className={`tab-link ${activeTab === 'favorites' ? 'active' : ''}`} onClick={() => handleTabChange('favorites')}>Mis Favoritos</button>
                    <button className={`tab-link ${activeTab === 'addresses' ? 'active' : ''}`} onClick={() => handleTabChange('addresses')}>Direcciones</button>
                    <button className={`tab-link ${activeTab === 'logout' ? 'active' : ''}`} onClick={handleLogout}>Cerrar Sesión</button>
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
                                <input type="email" id="email" value={userData.email} onChange={handleInputChange} placeholder="Ingresa tu correo electrónico" />
                            </div>
                            <div className="user-profile-form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" id="password" value={userData.password} onChange={handleInputChange} placeholder="Ingresa tu contraseña" />
                            </div>
                            <button className="user-profile-button" onClick={handleSaveChanges}>Guardar Cambios</button>
                        </div>
                    )}

                    {activeTab === 'orders' && (
                        <div id="orders" className="user-profile-tab-content">
                            <h2>Pedidos</h2>
                            <table className="user-profile-orders-table">
                                <thead>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Precio</th>
                                        <th>Número de Pedido</th>
                                        <th>Fecha de Entrega</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>15/11/2024</td>
                                        <td>$100.00</td>
                                        <td>#12345</td>
                                        <td>20/11/2024</td>
                                        <td><button className="user-profile-btn-detail">Detalles</button></td>
                                    </tr>
                                    {/* Más filas de pedidos */}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'favorites' && (
                        <div id="favorites" className="user-profile-tab-content">
                            <h2>Mis Favoritos</h2>
                            <div className="user-profile-favorites-list">
                                <div className="user-profile-favorite-item">Producto 1</div>
                                <div className="user-profile-favorite-item">Producto 2</div>
                                <div className="user-profile-favorite-item">Producto 3</div>
                                {/* Más productos */}
                            </div>
                        </div>
                    )}

                    {activeTab === 'addresses' && (
                        <div id="addresses" className="user-profile-tab-content">
                            <h2>Direcciones</h2>
                            <table className="user-profile-address-list">
                                <thead>
                                    <tr>
                                        <th>Dirección</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Calle 123, Ciudad, País</td>
                                        <td><button className="user-profile-btn-detail">Editar</button></td>
                                    </tr>
                                    {/* Más filas de direcciones */}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;