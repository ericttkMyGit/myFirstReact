import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip, Button } from '@mui/material';

const mockJobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Acme Inc.',
    location: 'Singapore',
    match: 92,
    skills: ['React', 'TypeScript', 'Material-UI'],
  },
  {
    id: 2,
    title: 'Full Stack Engineer',
    company: 'Innovate Solutions',
    location: 'Singapore',
    match: 85,
    skills: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'Creative Minds',
    location: 'Singapore',
    match: 78,
    skills: ['Figma', 'Sketch', 'Adobe XD'],
  },
  {
    id: 4,
    title: 'Product Manager',
    company: 'Product Hunt',
    location: 'Singapore',
    match: 88,
    skills: ['Agile', 'Scrum', 'JIRA'],
  },
];

const JobListings: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
        Job Recommendations
      </Typography>
      <Grid container spacing={4}>
        {mockJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Paper sx={{ p: 3, borderRadius: '16px', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {job.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {job.company} - {job.location}
                </Typography>
                <Box sx={{ my: 2 }}>
                  {job.skills.map((skill) => (
                    <Chip key={skill} label={skill} sx={{ mr: 1, mb: 1 }} />
                  ))}
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                  {job.match}%
                </Typography>
                <Button variant="contained" color="primary">View Details</Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobListings;
