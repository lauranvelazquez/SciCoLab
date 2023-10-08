import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Router from './Router'; 
import Proyecto from './Proyecto';
import Home from './Home';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


import {
  Agriculture as AgricultureIcon,
  Fastfood as FastfoodIcon,
  EmojiObjects as EmojiObjectsIcon,
  LocalFlorist as LocalFloristIcon,
  People as PeopleIcon,
  SettingsInputComponent as SettingsInputComponentIcon,
  SportsEsports as SportsEsportsIcon,
  AirplanemodeActive as AirplanemodeActiveIcon,
  Gamepad as GamepadIcon,
  Science as ScienceIcon,
  Landscape as LandscapeIcon,
  LocalHospital as LocalHospitalIcon,
  Computer as ComputerIcon,
  MenuBook as MenuBookIcon,
  Search as SearchIconMUI,
} from '@mui/icons-material';

import ListItemIcon from '@mui/material/ListItemIcon'; // Agregado

const drawerWidth = 240;

const theme = createTheme();

const sections = [
  { name: 'Agricultura', icon: <AgricultureIcon /> },
  { name: 'Alimentos', icon: <FastfoodIcon /> },
  { name: 'Biotecnología', icon: <EmojiObjectsIcon /> },
  { name: 'Ciencia Animal', icon: <LocalFloristIcon /> },
  { name: 'Ciencias Sociales y Humanidades', icon: <PeopleIcon /> },
  { name: 'Industria 4.0 y Nuevas Tecnologías', icon: <SettingsInputComponentIcon /> },
  { name: 'Industria Aeroespacial y Satelital', icon: <AirplanemodeActiveIcon /> },
  { name: 'Industrias Creativas y Videojuegos', icon: <GamepadIcon /> },
  { name: 'Nanotecnología', icon: <ScienceIcon /> },
  { name: 'Química y Materiales', icon: <LandscapeIcon /> },
  { name: 'Recursos Naturales, Ambiente y Energía', icon: <LocalHospitalIcon /> },
  { name: 'Salud y Equipamiento Médico', icon: <LocalHospitalIcon /> },
  { name: 'Tecnologías de la Información y la Comunicación', icon: <ComputerIcon /> },
  { name: 'Educación', icon: <MenuBookIcon /> },
];

export default function AppBarWithDrawer() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [categoria, setCategoria] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Mi Cuenta</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 nuevos mensajes" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Mensajes</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="mostrar 17 notificaciones"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed" sx={{ ml: 0 }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={handleOpenDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
            >
              PsiCoLab
            </Typography>
            <div sx={{ ml: 2, mr: 2 }}>
            <FormControl variant="outlined" size='small' sx={{ ml: 1, width: '200px', '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' } } }}>
            {/* Añadir InputLabel con la etiqueta "Categorías" */}
            <InputLabel id="select-categorias-label" sx={{color:'white'}}>Categorías</InputLabel>
            <Select
              labelId="select-categorias-label" // Identificador de la etiqueta
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              sx={{ color: 'white' }}
              label="Categorías" // Establecer la etiqueta aquí
            >
              <MenuItem value="">Todas</MenuItem>
              {sections.map((section) => (
                <MenuItem key={section.name} value={section.name}>
                  {section.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl variant="outlined" size='small' sx={{ ml: 1, width: '200px', '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' } } }}>
            <TextField
              label="Buscar..."
              size="small"
              variant="outlined"
              fullWidth
              sx={{ color: 'white', backgroundColor: 'transparent', '& input': { color: 'white' }, '& fieldset': { borderColor: 'transparent' } }}
              InputLabelProps={{
                sx: { color: 'white' }, // Esto cambiará el color del label
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ color: 'white', marginLeft: '8px', marginRight: '0' }}>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>

            </div>
            <Button color="inherit">Nuevo</Button>
            <Button color="inherit">Destacados</Button>
            <Box sx={{ flexGrow: 1 }} />
            <div>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleCloseDrawer}
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              marginTop: '64px', // Ajustar según la altura de tu AppBar
              paddingBottom: '64px' // Espacio adicional en la parte inferior si lo necesitas
            },
          }}
        >
          <List>
            <ListItem>
              <Typography variant="h6">Categorías</Typography>
            </ListItem>
            {sections.map((section, index) => (
              <ListItem button key={index}>
                <ListItemIcon>{section.icon}</ListItemIcon>
                <ListItemText primary={section.name} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        {renderMobileMenu}
        {renderMenu}

        {/* Página principal */}
        <Home/>

      </Box>
    </ThemeProvider>
  );
}
