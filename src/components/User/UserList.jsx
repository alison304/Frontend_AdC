import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import Swal from "sweetalert2";
import "./UserList.css";
import { getListUser, updateUser } from '../../services/user.service';
import StylesAdmin from './../../styles/Administrador.module.css';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const data = [
    {
        id: 1,
        nombre: 'Miguel',
        apellido: 'Park',
        email: 'miguelcp@gmail.com',
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

const UserList = () => {

    const [userList, setUserList] = useState(data);
    const [editableRow, setEditableRow] = useState(null);

    const handleEditClick = (rowIndex) => {
        setEditableRow(rowIndex);  // Set the row index to be editable
    };

    // Save edited row and stop editing
    const handleSaveClick = () => {
        setEditableRow(null);  // Stop editing
    };

    const handleDeleteClick = (id) => {
        debugger;
        // Filter out the row with the matching id
        const tmpUserList = [...userList];
        const updatedUserList = tmpUserList.filter(row => row.id !== id);
        setUserList(updatedUserList); // Update state with the new data        
    };    

    // Save mui select
    const handleSelectChange = (e, field, rowIndex) => {
        const value = e.target.value;
        const updatedUserList = [...userList];
        updatedUserList[rowIndex][field] = value;
        setUserList(updatedUserList);
    };

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
            cell: (row, index) => (
              editableRow === index ? (
                <FormControl>
                    <InputLabel id={`status-select-label-${row.id}`}>Status</InputLabel>
                    <Select
                        labelId={`status-select-label-${row.id}`}
                        value={row.rol}
                        onChange={(e) => handleSelectChange(e, 'rol', index)}
                        sx={{
                            width: 150,       // Set width here
                            height: 50,       // Set height here
                            fontFamily: 'Arial, sans-serif',  // Change font family
                            fontSize: '16px',                // Change font size
                        }}                        
                    >
                        <MenuItem value="ADMIN">ADMIN</MenuItem>
                        <MenuItem value="USER">USER</MenuItem>
                    </Select>                
                </FormControl>
              ) : (
                row.rol
              )
            ),
            sortable: true            
        },        
        {
            name: 'Acciones',
            cell: (row, index) => (
              editableRow === index ? (
                <FormControl>
                    <button onClick={handleSaveClick} className={StylesAdmin.botonesEditar}>Save</button>
                    <button onClick={() => handleDeleteClick(row.id)} className={StylesAdmin.botonesEliminar}>Eliminar</button>                    
                </FormControl>
              ) : (
                <FormControl>
                    <button onClick={() => handleEditClick(index)} className={StylesAdmin.botonesEditar}>Editar</button>
                    <button onClick={() => handleDeleteClick(row.id)} className={StylesAdmin.botonesEliminar}>Eliminar</button>
                </FormControl>
              )
            ),
        },
    ];
/*
    <React.Fragment>
    <button onClick={handleSaveClick} className={StylesAdmin.botonesEditar}>Save</button>
    <button onClick={() => eliminarProducto(producto.id)} className={StylesAdmin.botonesEliminar}>Eliminar</button>                
</React.Fragment>
) : (
<React.Fragment>                    
    <button onClick={() => handleEditClick(index)} className={StylesAdmin.botonesEditar}>Edit</button>
    <button onClick={() => eliminarProducto(producto.id)} className={StylesAdmin.botonesEliminar}>Eliminar</button>
</React.Fragment>                    
*/
    
    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
          // get the data from the api
          const data = await getListUser();
          // convert the data to json
          const list = await response.data;
          // set state with the result
          setUserList(list);
        }
      
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);
      }, [])

    return (
        <React.Fragment>
            <br/>
            <h3 className="title-form">Usuarios registrados 📋</h3>
            <br/><br/>
            <DataTable
                columns={columns}
                data={userList}
            />            
        </React.Fragment >

    )
}

export default UserList;
