import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Iniciar sesión con:', { email, password });
  };

  const handleRegisterRedirect = () => {
    navigate('/wip');
  };
  const handleOlvidoPassRedirect = () => {
    navigate('/wip')
  }



  

  return (
    <React.Fragment>
      <Box className="login-container">
      <Typography className="login-text-login" sx={{ fontSize: "48px", fontWeight: '250', fontStyle: 'italic', color: '#8E6B3266', fontFamily: 'Kaushan Script', 'margin-bottom': '5rem', }}>
          Iniciar Sesión  
        </Typography>
        <form onSubmit={handleLogin} className="login-form">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button 
            className="olvidoPass-button" 
            sx={{'color':'#635b4d' }}
            onClick={handleOlvidoPassRedirect}
          >
            ¿Olvidaste tu contraseña?
          </Button>
          <Button type="submit" variant="outlined" className="login-button" fullWidth sx={{ 'background-color': '#d8c7a0', 'color':'#635b4d', 'outline-color': '#635b4d', 'border-color':'#635b4d' }}>
            Ingresar
          </Button>
        </form>
        <Box className="login-links">
          
          <Button 
            className="register-button" 
            variant="outlined"
            sx={{'color':'#635b4d', 'outline-color': '#635b4d', 'border-color':'#635b4d' }}
            onClick={handleRegisterRedirect} 

          >
            Registrarse
          </Button>
        </Box>

      </Box>
    </React.Fragment>
  );
}

export default Login;
