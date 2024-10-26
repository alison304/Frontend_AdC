import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import { AppBar, Toolbar, Typography, useMediaQuery, Tab, useTheme} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MyDrawer from './MyDrawer';

const IconNavbar = ['Catalogo', 'Tematicas', 'Premium set', 'Contáctanos'];
const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar position='static' sx={{background: '#ebe9e9'}}>
        <Toolbar sx={{height: '77px', backgroundColor:"#655e5e"}}>
          <AutoAwesomeIcon sx={{ transform: "scale(1.2)" }}/>
          <Typography sx={{ fontSize: "1.5 rem", paddingLeft: "1%",fontWeight:'bold' }}>
            Aurora de Cristal
          </Typography>
            {
              isMatch ? (
                <>
                  <MyDrawer />
                </>
              ) : (
                <>
                <Tabs 
                  sx={{ width: '100%', marginLeft:'auto'}}
                  textColor='inherit' 
                  value={value} 
                  onChange={(e,value) => setValue(value)} 
                  indicatorColor="primary"
                  centered
                  >
                    {
                      IconNavbar.map((page, index) => (
                        <Tab key={index} label={page} />
                        ))
                      }
                </Tabs>
                </>
              )
            }
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar
