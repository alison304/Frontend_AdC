import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import { AppBar, Toolbar, Typography, useMediaQuery, Tab, useTheme} from '@mui/material';
import MyDrawer from './MyDrawer';
import logoVajilla from '../../../public/images/logo-aura.png'
import { FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const IconNavbar = ['Catalogo', 'Tematicas', 'Premium set', 'Contáctanos'];
const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar position='static'>
        <Toolbar sx={{height: '77px', backgroundColor:"#ebe9e9"}}>
        <img src={logoVajilla} width={75} height={75} alt="Logo-icon" />
        <Typography sx={{ fontSize: "1rem", paddingLeft: "3%",fontWeight:'300', fontStyle: 'italic', color:'#623d2b', fontFamily: 'Kaushan Script' }}>
          Tus recuerdos en porcelana
        </Typography>
            {
              isMatch ? (
                <>
                  <MyDrawer />
                </>
              ) : (
                <>
                <Tabs 
                  sx={{ width: '100%', marginLeft:'auto', color:'#623d2b'}}
                  textColor='inherit' 
                  value={value} 
                  onChange={(e,value) => setValue(value)} 
                  indicatorColor="secondary"
                  centered
                  >
                    {
                      IconNavbar.map((page, index) => (
                        <Tab key={index} label={page} />
                        ))
                      }
                </Tabs>
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
