import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';

const sections = [
  { label: 'Agricultura', icon: '🌾' },
  { label: 'Alimentos', icon: '🍔' },
  { label: 'Biotecnología', icon: '🧬' },
  { label: 'Ciencia Animal', icon: '🐄' },
  { label: 'Ciencias Sociales y Humanidades', icon: '📚' },
  { label: 'Industria 4.0 y Nuevas Tecnologías', icon: '🏭' },
  { label: 'Industria Aeroespacial y Satelital', icon: '🛰️' },
  { label: 'Industrias Creativas y Videojuegos', icon: '🎮' },
  { label: 'Nanotecnología', icon: '🔬' },
  { label: 'Química y Materiales', icon: '⚗️' },
  { label: 'Recursos Naturales, Ambiente y Energía', icon: '🌿' },
  { label: 'Salud y Equipamiento Médico', icon: '🏥' },
  { label: 'Tecnologías de la Información y la Comunicación', icon: '💻' },
  { label: 'Educación', icon: '📖' },
];

export default function DrawerComponent({ open, handleOpen, handleClose }) {
  return (
    <Drawer anchor="left" open={open} onClose={handleClose}>
      <div style={{ width: 250 }}>
        <IconButton onClick={handleClose}>
          <MenuIcon />
        </IconButton>
        <Divider />
        <List>
          {sections.map((section, index) => (
            <ListItem button key={section.label}>
              <ListItemIcon>{section.icon}</ListItemIcon>
              <ListItemText primary={section.label} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}