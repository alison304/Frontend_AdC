import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import { AppBar, Toolbar, Typography, useMediaQuery, Tab, useTheme, Button, Menu, MenuItem } from '@mui/material';
import MyDrawer from './MyDrawer';
import logoVajilla from '../../../public/images/logo-aura.png'
import { FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [value, setValue] = useState();
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

  return (
    <React.Fragment>
      <AppBar position='static'>
        <Toolbar sx={{ height: '77px', backgroundColor: "#ebe9e9" }}>
          <img src={logoVajilla} width={75} height={75} alt="Logo-icon" />
          <Typography sx={{ fontSize: "1rem", paddingLeft: "3%", fontWeight: '300', fontStyle: 'italic', color: '#623d2b', fontFamily: 'Kaushan Script' }}>
            Tus recuerdos en porcelana
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
                  <MenuItem onClick={handleCloseCatalogo}>Profile</MenuItem>
                  <MenuItem onClick={handleCloseCatalogo}>My account</MenuItem>
                  <MenuItem onClick={handleCloseCatalogo}>Logout</MenuItem>
                </Menu>
                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClickTematicas}
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
                  <MenuItem onClick={handleCloseTematicas}>Test</MenuItem>
                  <MenuItem onClick={handleCloseTematicas}>My account</MenuItem>
                  <MenuItem onClick={handleCloseTematicas}>Logout</MenuItem>
                </Menu>
                <Button
                  id="demo-positioned-button"
                >
                  Premium set
                </Button>
                <Button
                  id="demo-positioned-button"
                >
                  Contáctanos
                </Button>
                <FiShoppingCart size={35} color="#655e5e" />
                <FaUser size={30} color="#655e5e" style={{ paddingLeft: "3%" }} />
              </>
            )
          }
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar
