import React, { useState } from 'react';
import { Drawer, List, ListItemText, ListItemButton, ListItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import MailIcon from '@mui/icons-material/Mail';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PhoneIcon from '@mui/icons-material/Phone';
import CelebrationIcon from '@mui/icons-material/Celebration';
import { Link } from "react-router-dom";

//const IconNavbar = ['Catalogo', 'Tematicas', 'Premium set', 'Contáctanos', 'Comprar', 'Iniciar Sesión','Regístrate'];
const MyDrawer = () => {
  const [openDrawer, setOpenDrawer ] = useState(false);
  return (
      <React.Fragment>
        <Drawer open={openDrawer} onClose={()=> setOpenDrawer(false)}>
          <List>
            {/* {
              IconNavbar.map((page,index) => (
                <ListItemButton onClick={()=> setOpenDrawer(false)} key={index}>
                  <ListItemIcon>
                  <ListItemText>{page}</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              ))
            } */}
            <ListItem disablePadding>
              <ImportContactsIcon />
              <ListItemButton
                component="a"
                href='#Catalogo'
              >
                <ListItemText>Catalogo</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <CelebrationIcon />
              <ListItemButton
                component="a"
                href='#Tematicas'
              >
                <ListItemText>Tematicas</ListItemText>
              </ListItemButton>
            </ListItem>
            <Link style={{ color: 'inherit' }} to="/wip">
              <ListItem disablePadding>
                <WorkspacePremiumIcon />
                <ListItemButton
                  component="a"
                  href='#Premium set'
                >
                  <ListItemText>Premium set</ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
            <ListItem disablePadding>
              <PhoneIcon/>
              <ListItemButton
                component="a"
                href='#Contáctanos'
              >
                <ListItemText>Contáctanos</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ShoppingCartIcon />
              <ListItemButton
                component="a"
                href='#Comprar'
              >
                <ListItemText>Comprar</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <MailIcon />
              <ListItemButton
                component="a"
                href='#Iniciar Sesión'
              >
                <ListItemText>Iniciar Sesión</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <AppRegistrationIcon />
              <ListItemButton
                component="a"
                href='#Regístrate'
              >
                <ListItemText>Regístrate</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <IconButton sx={{color:'#623d2b', marginLeft:'auto'}} onClick={()=>setOpenDrawer(!openDrawer)}>
          <MenuIcon />
        </IconButton>
      </React.Fragment>
  );
};

export default MyDrawer
