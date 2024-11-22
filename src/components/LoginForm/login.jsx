import React from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { login } from '../../services/user.service';
import './login.css';

const userSchema = Yup.object().shape({
    email: Yup.string()
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,}$/i, "Email incorrecto")
        .required("Se requiere un email"),
    password: Yup.string()
        //.min(6, 'La contraseña debe tener al menos 6 caracteres')
        .max(10, 'La contraseña no debe exceder los 10 caracteres')
        //.matches(/(?=.*[!@#$%^&*()_\-+=<>?{}[\]~])/, 'Debe incluir al menos un carácter especial')
        //.matches(/(?=.*[a-z])(?=.*[A-Z])/, 'Debe incluir una mayúscula y una minúscula')
        //.matches(/(?=.*[0-9])/, 'Debe contener al menos un número')
        .required("Contraseña incorrecta"),
});

function Login({ onLoginSuccess }) {
    const navigate = useNavigate();

    const handleLogin = async (values) => {
        try {
            const response = await login(values.email, values.password);
            const token = response.data.token;

            // Mantiene sesion abierta
            localStorage.setItem('authToken', token);
            localStorage.setItem('userEmail', values.email); // Guarda mail, intento n3

            Swal.fire({
                icon: 'success',
                title: '¡Login exitoso!',
                text: 'Bienvenido de nuevo',
            });

            // Notifica el éxito del login
            onLoginSuccess();

            // Redirecciona a la página principal
            navigate('/');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error en el inicio de sesión',
                text: 'Las credenciales no son válidas',
            });
        }
    };

    const handleRegisterRedirect = () => {
        navigate('/register');
    };

    const handleOlvidoPassRedirect = () => {
        navigate('/wip');
    };

    return (
        <Box className="login-container">
            <Typography className="login-text-login" sx={{ fontSize: "48px", fontWeight: '250', fontStyle: 'italic', color: '#8E6B3266', fontFamily: 'Kaushan Script', marginBottom: '5rem' }}>
                Iniciar Sesión
            </Typography>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={userSchema}
                onSubmit={handleLogin}
            >
                {({ isSubmitting }) => (
                    <Form className="login-form">
                        <Field
                            as={TextField}
                            label="Email"
                            name="email"
                            variant="outlined"
                            fullWidth
                            required
                            helperText={<ErrorMessage name="email" component="div" style={{ color: '#a15750', fontSize: '0.9rem', marginTop: '0.25rem' }} />}
                        />
                        <Field
                            as={TextField}
                            label="Contraseña"
                            name="password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            required
                            helperText={<ErrorMessage name="password" component="div" style={{ color: '#a15750', fontSize: '0.9rem', marginTop: '0.25rem' }} />}
                        />
                        <Button className="olvidoPass-button" sx={{ color: '#635b4d', textDecoration: 'underline' }} onClick={handleOlvidoPassRedirect}>
                            ¿Olvidaste tu contraseña?
                        </Button>
                        <Button
                            type="submit"
                            variant="outlined"
                            className="login-button"
                            fullWidth
                            sx={{ backgroundColor: '#d8c7a0', color: 'white', outlineColor: '#635b4d', borderColor: '#635b4d', fontWeight: 'bold' }}
                            disabled={isSubmitting}
                        >
                            Ingresar
                        </Button>
                    </Form>
                )}
            </Formik>
            <Box className="login-links">
                <Button className="register-button" variant="outlined" sx={{ backgroundColor: '#a15750', color: 'white', outlineColor: '#635b4d', borderColor: '#635b4d', fontWeight: 'bold' }} onClick={handleRegisterRedirect}>
                    Registrarse
                </Button>
            </Box>
        </Box>
    );
}

export default Login;
