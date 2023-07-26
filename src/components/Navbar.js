import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/new-service">Nueva solicitud</Button>
        <Button color="inherit" component={Link} to="/services">Listado solicitudes</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
