import React from 'react';
import { Button, Container, Typography, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Paper sx={{ 
      py: 8,
      textAlign: 'center',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      borderRadius: '16px'
    }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Find Your Dream PMET Job in Singapore
        </Typography>
        <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4 }}>
          Upload your resume and let our AI-powered platform match you with the best job opportunities.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          component={RouterLink} 
          to="/resume"
          sx={{ 
            boxShadow: '0px 4px 20px rgba(0, 123, 255, 0.5)',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        >
          Get Started
        </Button>
      </Container>
    </Paper>
  );
};

export default Home;