import React, { useState } from 'react';
import { Drawer, List, ListItemText, ListItemButton, ListItem, IconButton, Collapse, ListItemIcon } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import MailIcon from '@mui/icons-material/Mail';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PhoneIcon from '@mui/icons-material/Phone';
import CelebrationIcon from '@mui/icons-material/Celebration';
import { Link } from "react-router-dom";

const MyDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openCatalogo, setOpenCatalogo] = React.useState(false);
  const [openTematica, setOpenTematica] = React.useState(false);

  const handleClickCatalogo = () => {
    setOpenCatalogo(!openCatalogo);
  };

  const handleClickTematica = () => {
    setOpenTematica(!openTematica);
  };

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem disablePadding>
            <ImportContactsIcon />
            <ListItemButton
              onClick={handleClickCatalogo}
            >
              <ListItemText>Catalogo</ListItemText>
              {openCatalogo ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openCatalogo} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link onClick={() => setOpenDrawer(false)} style={{ color: 'inherit' }} to="/listaProductos/1">
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Vajilla" />
                </ListItemButton>
              </Link>
              <Link onClick={() => setOpenDrawer(false)} style={{ color: 'inherit' }} to="/listaProductos/2">
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>

                  <ListItemText primary="Cubiertos" />
                </ListItemButton>
              </Link>
              <Link onClick={() => setOpenDrawer(false)} style={{ color: 'inherit' }} to="/listaProductos/3">
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Cristaleria" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
          <ListItem disablePadding>
            <CelebrationIcon />
            <ListItemButton
              onClick={handleClickTematica}
            >
              <ListItemText>Tematicas</ListItemText>
              {openTematica ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openTematica} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 6 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Halloween" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 6 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Navidad" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 6 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Accion de gracias" />
              </ListItemButton>
            </List>
          </Collapse>
          <Link onClick={() => setOpenDrawer(false)} style={{ color: 'inherit' }} to="/wip">
            <ListItem disablePadding>
              <WorkspacePremiumIcon />
              <ListItemButton
              >
                <ListItemText>Premium set</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link onClick={() => setOpenDrawer(false)} style={{ color: 'inherit' }} to="/wip">
            <ListItem disablePadding>
              <PhoneIcon />
              <ListItemButton>
                <ListItemText>Contáctanos</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider />
          <Link onClick={() => setOpenDrawer(false)} style={{ color: 'inherit' }} to="/wip">
            <ListItem disablePadding>
              <ShoppingCartIcon />
              <ListItemButton
              >
                <ListItemText>Comprar</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider />
          <Link onClick={() => setOpenDrawer(false)} style={{ color: 'inherit' }} to="/wip">
            <ListItem disablePadding>
              <MailIcon />
              <ListItemButton>
                <ListItemText>Iniciar Sesión</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link onClick={() => setOpenDrawer(false)} style={{ color: 'inherit' }} to="/register">
            <ListItem disablePadding>
              <PersonIcon />
              <ListItemButton>
                <ListItemText>Regístrate</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer >
      <IconButton sx={{ color: '#623d2b', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </React.Fragment >
  );
};

export default MyDrawer