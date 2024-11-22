import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import Swal from "sweetalert2";
import "./UserList.css";
import { getListUser, updateUser } from '../../services/user.service';
import StylesAdmin from './../../styles/Administrador.module.css';

const UserList = () => {

    const [userList, setUserList] = useState();

    const columns = [
        {
            name: 'id',
            selector: row => row.id,
            sortable: true,
            omit: true
        },        
        {
            name: 'Nombre',
            selector: row => row.nombre,
            sortable: true,
        },
        {
            name: 'Apellido',
            selector: row => row.apellido,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },                
        {
            name: 'Rol',
            selector: row => row.rol,
            sortable: true,
            omit: true
        },        
        {
            name: 'Is Admin',
            selector: row => row.isAdmin,
            cell: row => (
                <input
                  type="checkbox"
                  checked={row.isAdmin}
                  disabled
                />
              ),            
            sortable: true,
        },
        {
            name: 'Action',
            cell: (row) => (
                <div className="cambios-estados">
                    <button onClick={() => cambiarRole(row.id,row.rol)} className={StylesAdmin.botonesEditar}>Cambiar Role</button>
                </div>
            )
        },                        
    ];
    
    const data = [
        {
            id: 1,
            nombre: 'Familia',
            apellido: 'Cardenas Paico',
            email: 'familiacardenaspaico@gmail.com',
            rol: 'USER',
            isAdmin: false
        },
        {
            id: 2,
            nombre: 'admin',
            apellido: 'admin',
            email: 'admin@admin.com',        
            rol: 'ADMIN',
            isAdmin: true        
        },
    ]    

    const cambiarRole = async (id,rol) => {
        console.log(id);
        console.log(rol);        
        /*
        const updatedUsers = users.map(user => {
            if (user.id === id) {
              // Return a new object with the updated name
              return { ...user, name: newName };
            }
            return user; // If the user id doesn't match, return the user unchanged
          });
          setUsers(updatedUsers); // Update the state with the new array
        const data = await updateUser();
        */
    };

    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
          // get the data from the api
          //const data = await getListUser();
          // convert the data to json
          //const list = await response.data;
      
          // set state with the result
          //setUserList(list);
        }
      
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);;
      }, [])

    return (
        <React.Fragment>
            <DataTable
                columns={columns}
                data={data}
            />            
        </React.Fragment >

    )
}

export default UserList;
