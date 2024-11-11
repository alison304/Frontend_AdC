import React from 'react';
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme, Button, Menu, MenuItem } from '@mui/material';
import MyDrawer from './MyDrawer';
import logo from '../../../public/images/Logo.png'
import { FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  //const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);

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

  return (
    <React.Fragment>
      <AppBar position='fixed'>
        <div className='nav-contain'>
          <Toolbar sx={{ height: '90px', backgroundColor: "#ebe9e9", display: "flex", justifyContent: "space-evenly" }}>
            <Link to="/">
              <img src={logo} width={90} height={80} alt="Logo-icon" />
            </Link>
            <Typography sx={{ fontSize: "0.9rem", fontWeight: '250', fontStyle: 'italic', color: '#623d2b', fontFamily: 'Kaushan Script' }}>
              Tus recuerdos <br/> en porcelana
            </Typography>
            {
              isMatch ? (
                <>
                  <MyDrawer />
                </>
              ) : (
                <>
                  <Button
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickCatalogo}
                    style={{ color: "#623d2b", paddingLeft: "5%" }}
                  >
                    Catalogo
                  </Button>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
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
                      <MenuItem onClick={handleCloseCatalogo}>Cristaleria</MenuItem>
                    </Link>
                  </Menu>
                  <Button
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickTematicas}
                    style={{ color: "#623d2b" }}
                  >
                    Tematicas
                  </Button>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
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
                      <MenuItem onClick={handleCloseTematicas}>Accion de gracias</MenuItem>
                    </Link>
                  </Menu>
                  <Link to="/wip">
                    <Button
                      id="demo-positioned-button"
                      style={{ color: "#623d2b" }}
                    >
                      Premium set
                    </Button>
                  </Link>
                  <Link to="/wip">
                    <Button
                      id="demo-positioned-button"
                      style={{ color: "#623d2b" }}
                    >
                      Contáctanos
                    </Button>
                  </Link>
                  <div className='right-side'>
                    <FiShoppingCart size={35} color="#655e5e" style={{ paddingLeft: "0%" }} />
                    <Button
                      id="demo-positioned-button"
                      aria-controls={open ? 'demo-positioned-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClickUser}
                      style={{ color: "#623d2b", paddingLeft: "1%" }}
                    >
                      <FaUser size={30} color="#655e5e" style={{ paddingLeft: "20%" }} />
                    </Button>
                    <Menu
                      id="demo-positioned-menu"
                      aria-labelledby="demo-positioned-button"
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
                      <Link style={{ color: 'inherit' }} to="/wip">
                        <MenuItem onClick={handleCloseUser}>Iniciar Sesión</MenuItem>
                      </Link>
                      <Link style={{ color: 'inherit' }} to="/wip">
                        <MenuItem onClick={handleCloseUser}>Regístrate</MenuItem>
                      </Link>
                    </Menu>
                  </div>
                </>
              )
            }
          </Toolbar>
        </div>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar
