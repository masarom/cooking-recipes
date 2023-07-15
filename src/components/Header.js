import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/layout/Header.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

/* const Header = () => { */
const drawerWidth = 240;
const theme = createTheme({
  palette: {
    primary: {
      light: '#c62f38',
      main: '#3d405b',
      dark: '#c62f38',
      contrastText: '#fff',
    },
  },
});

const navItems = ['Inicio', 'Quiénes somos', 'Planificador semanal', 'Añadir nueva'];
const navLinks = ['/', '/quienes-somos', '/planificador-semanal', '/nueva-receta'];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  // mobile version (until 600px)
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', bgcolor: 'primary.main', color: 'primary.contrastText', height: '100vh' }}
    >
      <Typography variant='h4' sx={{ my: 2, fontFamily: 'Rancho, Roboto', fontSize: 34 }}>
        <Link className='menu__item' to='/'>
          Otro Poquito
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <NavLink key={item} to={navLinks[i]} className='menu__item'>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText
                  primary={item}
                  sx={{ '& .MuiListItemText-primary': { fontSize: 14, fontFamily: 'Montserrat, Roboto' } }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* Tablet & desktop version */}
        <AppBar component='nav'>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h3'
              component='div'
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', fontFamily: 'Rancho, Roboto', width: 150 } }}
            >
              <Link className='menu__item' to='/'>
              Otro Poquito
              </Link>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block', paddingLeft: 54 } }}>
              {navItems.map((item, i) => (
                <NavLink key={item} to={navLinks[i]}>
                  <Button sx={{ color: '#fff', fontSize: 12, fontFamily: 'Montserrat, Roboto' }}>{item}</Button>
                </NavLink>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        {/* Mobile version */}
        <Box component='nav'>
          <Drawer
            container={container}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component='main' sx={{ p: 5 }}></Box>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
