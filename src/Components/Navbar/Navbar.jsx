import React from 'react';
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme, Button, Menu, MenuItem } from '@mui/material';
import MyDrawer from './MyDrawer';
import logoVajilla from '../../../public/images/logo-aura.png'
import { FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
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
      <AppBar position='static'>
        <Toolbar sx={{ height: '77px', backgroundColor: "#ebe9e9" }}>
          <img src={logoVajilla} width={75} height={75} alt="Logo-icon" />
          <Typography sx={{ fontSize: "0.9rem", paddingLeft: "3%", fontWeight: '250', fontStyle: 'italic', color: '#623d2b', fontFamily: 'Kaushan Script' }}>
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
                  style={{ color: "#623d2b", paddingLeft: "5%"}}
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
                  <MenuItem onClick={handleCloseCatalogo}>Vajilla</MenuItem>
                  <MenuItem onClick={handleCloseCatalogo}>Cubiertos</MenuItem>
                  <MenuItem onClick={handleCloseCatalogo}>Cristaleria</MenuItem>
                </Menu>
                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClickTematicas}
                  style={{ color: "#623d2b"}}
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
                  <MenuItem onClick={handleCloseTematicas}>Halloween</MenuItem>
                  <MenuItem onClick={handleCloseTematicas}>Navidad</MenuItem>
                  <MenuItem onClick={handleCloseTematicas}>Accion de gracias</MenuItem>
                </Menu>
                <Button
                  id="demo-positioned-button"
                  style={{ color: "#623d2b"}}
                >
                  Premium set
                </Button>
                <Button
                  id="demo-positioned-button"
                  style={{ color: "#623d2b"}}
                >
                  Contáctanos
                </Button>
                <FiShoppingCart size={35} color="#655e5e" style={{ paddingLeft: "40%" }} />
                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClickUser}
                  style={{ color: "#623d2b", paddingLeft: "5%"}}
                >
                  <FaUser size={30} color="#655e5e" style={{ paddingLeft: "2%" }} />
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
                  <MenuItem onClick={handleCloseUser}>Iniciar Sesión</MenuItem>
                  <MenuItem onClick={handleCloseUser}>Regístrate</MenuItem>
                </Menu>
              </>
            )
          }
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar
