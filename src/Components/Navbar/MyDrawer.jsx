import React, { useState } from 'react';
import { Drawer, List, ListItemText, ListItemButton, ListItemIcon, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const IconNavbar = ['Catalogo', 'Tematicas', 'Premium set', 'Contáctanos', 'Comprar', 'Iniciar Sesión','Regístrate'];
const MyDrawer = () => {
  const [openDrawer, setOpenDrawer ] = useState(false)
  return (
      <React.Fragment>
        <Drawer open={openDrawer} onClose={()=> setOpenDrawer(false)}>
          <List>
            {
              IconNavbar.map((page,index) => (
                <ListItemButton onClick={()=> setOpenDrawer(false)} key={index}>
                  <ListItemIcon>
                  <ListItemText>{page}</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              ))
            }
          </List>
        </Drawer>
        <IconButton sx={{color:'#623d2b', marginLeft:'auto'}} onClick={()=>setOpenDrawer(!openDrawer)}>
          <MenuIcon />
        </IconButton>
      </React.Fragment>
  );
};

export default MyDrawer
