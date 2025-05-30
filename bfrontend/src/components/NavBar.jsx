import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar sx={{ backgroundColor: '#1e1e2f' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
            MyBlog
          </Link>
        </Typography>

        <Box sx={{ ml: 'auto', display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/add"
            variant="outlined"
            sx={{
              color: '#fff',
              borderColor: '#fff',
              '&:hover': {
                backgroundColor: '#fff',
                color: '#1e1e2f',
              }
            }}
          >
            Add Blog
          </Button>

          <Button
            component={Link}
            to="/dashboard"
            variant="outlined"
            sx={{
              color: '#fff',
              borderColor: '#fff',
              '&:hover': {
                backgroundColor: '#fff',
                color: '#1e1e2f',
              }
            }}
          >
            Dashboard
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
