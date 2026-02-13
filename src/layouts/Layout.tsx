import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Job Matcher
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">Home</Button>
          <Button color="inherit" component={RouterLink} to="/jobs">Job Listings</Button>
          <Button color="inherit" component={RouterLink} to="/resume">Resume Analysis</Button>
          <Button color="inherit" component={RouterLink} to="/job-portals">Job Portals</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Outlet />
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <RouterLink color="inherit" to="/">
              Job Matcher
            </RouterLink>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;