import React, { useEffect, useState } from "react";
import { getOneUser } from "../../services/user.service";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Paper, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Swal from "sweetalert2";
import "./register.css";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const RegisterComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [errorsResponse, setErrorsResponse] = useState();

    const getOneUserFromService = async () => {
        try {
            const data = await getOneUser(id);
            setUser(data.data.user);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.error,
            });
        }
    };

    useEffect(() => {
        id && getOneUserFromService();
    }, [id]);

    const userSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Hey, es muy corto el nombre!')
            .max(20, 'Hey, es muy largo el nombre!')
            .required('Se requiere agregar un nombre'),
        lastName: Yup.string()
            .min(3, 'Hey, es muy corto el apellido!')
            .max(20, 'Hey, es muy largo el apellido!')
            .required("Se requiere agregar un apellido"),
        email: Yup.string()
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i, "Formato de correo electrónico no válido")
            .required("Se requiere un email"),
        password: Yup.string()
            .min(6, '¡Demasiado corto! La contraseña debe tener una longitud mínima de 6 caracteres.')
            .required("La contraseña es incorrecta"),
    });

    const sendNewUser = async (user) => {
        console.log("test");
    };

    return (
        <React.Fragment>
            <Formik
                enableReinitialize={true}
                initialValues={user}
                validationSchema={userSchema}
                onSubmit={sendNewUser}
            >
                {({ values, errors, touched, setFieldValue }) => (
                    <Form>
                        <Box className='registro'>
                            {/* <img className='img-reg' src="/public/images/Logo.png" alt="logo" onClick={() => navigate("/")} /> */}
                            {id ? (
                                <h3>Actualizar {user.name}</h3>
                            ) : (
                                <h3 className="title-form">Crear cuenta 📋</h3>
                            )}
                            <br />
                            <p>Vamos a preparar todo para comenzar a configurar su perfil.</p>
                            <br />
                            <div className='row'>
                                <div className='column'>
                                    <h3>Datos de registro de usuario</h3>
                                    <br />
                                    <div>
                                        <label>Nombre</label>
                                        <Field name="name" />
                                        {errors.name && touched.name ? (
                                            <div>{errors.name}</div>
                                        ) : null}
                                        {errorsResponse?.name && (
                                            <div>{errorsResponse.name.message}</div>
                                        )}
                                    </div>
                                    <br />
                                    <div>
                                        <label>Apellidos</label>
                                        <Field name="lastName" />
                                        {errors.lastName && touched.lastName ? (
                                            <div>{errors.lastName}</div>
                                        ) : null}
                                        {errorsResponse?.lastName && (
                                            <div>{errorsResponse.lastName.message}</div>
                                        )}
                                    </div>
                                    <br />
                                    <div>
                                        <label>Email</label>
                                        <Field name="email" />
                                        {errors.email && touched.email ? (
                                            <div>{errors.email}</div>
                                        ) : null}
                                        {errorsResponse?.email && (
                                            <div>{errorsResponse.email.message}</div>
                                        )}
                                    </div>
                                    <br />
                                    <div>
                                        <label>Contraseña</label>
                                        <Field type="password" name="password" />
                                        {errors.password && touched.password ? (
                                            <div>{errors.password}</div>
                                        ) : null}
                                        {errorsResponse?.password && (
                                            <div>{errorsResponse.password.message}</div>
                                        )}
                                    </div>
                                    <br />
                                </div>
                            </div>
                            <br />
                            <br />
                            {id ? (
                                <Button variant="contained" sx={{ backgroundColor: '#9575cd', display: 'inline', fontSize: 14 }} className='btn-c' type="submit">Actualizar</Button>

                            ) : (
                                <Button variant="outlined" sx={{ borderColor: '#645b4d', backgroundColor: '#E3DACC', color: '#645b4d', display: 'inline', fontSize: 14 }} className='btn-c' type="submit">Registrarse</Button>
                            )}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            {id ? (
                                <Button variant="contained" sx={{ backgroundColor: '#a45c5c', display: 'inline', fontSize: 14 }} className='btn-c' onClick={() => navigate("/user/list")}>Cancelar</Button>

                            ) : (
                                <Button variant="contained" sx={{ backgroundColor: '#a45c5c', display: 'inline', fontSize: 14 }} className='btn-c' onClick={() => navigate("/")}>Cancelar</Button>
                            )}
                        </Box>
                    </Form>
                )
                }
            </Formik >
        </React.Fragment >

    )
}

export default RegisterComponent;