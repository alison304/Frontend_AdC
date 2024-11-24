import React from 'react';
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme, Button, Menu, MenuItem } from '@mui/material';
import MyDrawer from './MyDrawer';
import logo from '../../../public/images/Logo.png';
import { FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated, onLogout }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const [anchorElCatalogo, setAnchorElCatalogo] = React.useState(null);
  const openCatalogo = Boolean(anchorElCatalogo);
  const handleClickCatalogo = (event) => {
    setAnchorElCatalogo(event.currentTarget);
  };
  const handleCloseCatalogo = () => {
    setAnchorElCatalogo(null);
  };

  const [anchorElTematicas, setAnchorElTematicas] = React.useState(null);
  const openTematicas = Boolean(anchorElTematicas);
  const handleClickTematicas = (event) => {
    setAnchorElTematicas(event.currentTarget);
  };
  const handleCloseTematicas = () => {
    setAnchorElTematicas(null);
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const openUser = Boolean(anchorElUser);
  const handleClickUser = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUser = () => {
    setAnchorElUser(null);
  };

  const handleLogoutAndRedirect = () => {
    onLogout();
    navigate('/'); // Cerrar sesión y redirigir a la página de inicio
  };

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <div className="nav-contain">
          <Toolbar
            sx={{
              height: '90px',
              backgroundColor: "#ebe9e9",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {/* Logo */}
            <Link to="/">
              <img src={logo} width={90} height={80} alt="Logo-icon" />
            </Link>

            {/* Slogan */}
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: '250',
                fontStyle: 'italic',
                color: '#623d2b',
                fontFamily: 'Kaushan Script',
              }}
            >
              Tus recuerdos <br /> en porcelana
            </Typography>

            {isMatch ? (
              // Drawer para dispositivos móviles
              <MyDrawer isAuthenticated={isAuthenticated} onLogout={onLogout} />
            ) : (
              // Menú completo para pantallas grandes
              <>
                {/* Catálogo */}
                <Button
                  aria-controls={openCatalogo ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openCatalogo ? 'true' : undefined}
                  onClick={handleClickCatalogo}
                  style={{ color: "#623d2b", paddingLeft: "5%" }}
                >
                  Catálogo
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  anchorEl={anchorElCatalogo}
                  open={openCatalogo}
                  onClose={handleCloseCatalogo}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <Link style={{ color: 'inherit' }} to="/listaProductos/1">
                    <MenuItem onClick={handleCloseCatalogo}>Vajilla</MenuItem>
                  </Link>
                  <Link style={{ color: 'inherit' }} to="/listaProductos/2">
                    <MenuItem onClick={handleCloseCatalogo}>Cubiertos</MenuItem>
                  </Link>
                  <Link style={{ color: 'inherit' }} to="/listaProductos/3">
                    <MenuItem onClick={handleCloseCatalogo}>Cristalería</MenuItem>
                  </Link>
                </Menu>

                {/* Temáticas */}
                <Button
                  aria-controls={openTematicas ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openTematicas ? 'true' : undefined}
                  onClick={handleClickTematicas}
                  style={{ color: "#623d2b" }}
                >
                  Temáticas
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  anchorEl={anchorElTematicas}
                  open={openTematicas}
                  onClose={handleCloseTematicas}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <Link style={{ color: 'inherit' }} to="/wip">
                    <MenuItem onClick={handleCloseTematicas}>Halloween</MenuItem>
                  </Link>
                  <Link style={{ color: 'inherit' }} to="/wip">
                    <MenuItem onClick={handleCloseTematicas}>Navidad</MenuItem>
                  </Link>
                  <Link style={{ color: 'inherit' }} to="/wip">
                    <MenuItem onClick={handleCloseTematicas}>Acción de Gracias</MenuItem>
                  </Link>
                </Menu>

                {/* Otros enlaces */}
                <Link to="/wip">
                  <Button style={{ color: "#623d2b" }}>Premium set</Button>
                </Link>
                <Link to="/wip">
                  <Button style={{ color: "#623d2b" }}>Contáctanos</Button>
                </Link>

                {/* Carrito y opciones de usuario */}
                <div className="right-side">
                  <FiShoppingCart size={35} color="#655e5e" />
                  {isAuthenticated ? (
                    <>
                      <Button
                        aria-controls={openUser ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openUser ? 'true' : undefined}
                        onClick={handleClickUser}
                        style={{ color: "#623d2b", paddingLeft: "1%" }}
                      >
                        <FaUser size={30} color="#655e5e" />
                      </Button>
                      <Menu
                        id="demo-positioned-menu"
                        anchorEl={anchorElUser}
                        open={openUser}
                        onClose={handleCloseUser}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                      >
                        <Link style={{ color: 'inherit' }} to="/profile">
                          <MenuItem onClick={handleCloseUser}>Perfil</MenuItem>
                        </Link>
                        <Link style={{ color: 'inherit' }} to="/admin">
                          <MenuItem onClick={handleCloseUser}>Panel Admin</MenuItem>
                        </Link>
                        <MenuItem onClick={handleLogoutAndRedirect}>
                          Cerrar Sesión
                        </MenuItem>
                      </Menu>
                    </>
                  ) : (
                    <>
                      <Button
                        aria-controls={openUser ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openUser ? 'true' : undefined}
                        onClick={handleClickUser}
                        style={{ color: "#623d2b", paddingLeft: "1%" }}
                      >
                        <FaUser size={30} color="#655e5e" />
                      </Button>
                      <Menu
                        id="demo-positioned-menu"
                        anchorEl={anchorElUser}
                        open={openUser}
                        onClose={handleCloseUser}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                      >
                        <Link style={{ color: 'inherit' }} to="/login">
                          <MenuItem onClick={handleCloseUser}>Iniciar Sesión</MenuItem>
                        </Link>
                        <Link style={{ color: 'inherit' }} to="/register">
                          <MenuItem onClick={handleCloseUser}>Regístrate</MenuItem>
                        </Link>
                      </Menu>
                    </>
                  )}
                </div>
              </>
            )}
          </Toolbar>
        </div>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
