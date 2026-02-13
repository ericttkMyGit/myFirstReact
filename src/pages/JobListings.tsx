import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip, Button } from '@mui/material';
import { useJobPortals } from '../contexts/JobPortalsContext';
import { useJobFilters } from '../contexts/JobFiltersContext';
import { Link as RouterLink } from 'react-router-dom';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { subDays, subMonths } from 'date-fns';

const mockJobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Acme Inc.',
    location: 'Singapore',
    match: 92,
    skills: ['React', 'TypeScript', 'Material-UI'],
    portal: 'LinkedIn',
    postedDate: subDays(new Date(), 2),
  },
  {
    id: 2,
    title: 'Full Stack Engineer',
    company: 'Innovate Solutions',
    location: 'Singapore',
    match: 85,
    skills: ['React', 'Node.js', 'MongoDB'],
    portal: 'Indeed',
    postedDate: subDays(new Date(), 10),
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'Creative Minds',
    location: 'Singapore',
    match: 78,
    skills: ['Figma', 'Sketch', 'Adobe XD'],
    portal: 'Glassdoor',
    postedDate: subMonths(new Date(), 2),
  },
  {
    id: 4,
    title: 'Product Manager',
    company: 'Product Hunt',
    location: 'Singapore',
    match: 88,
    skills: ['Agile', 'Scrum', 'JIRA'],
    portal: 'Monster',
    postedDate: subMonths(new Date(), 3),
  },
  {
    id: 5,
    title: 'Data Scientist',
    company: 'Data Insights',
    location: 'Singapore',
    match: 95,
    skills: ['Python', 'R', 'Machine Learning'],
    portal: 'LinkedIn',
    postedDate: subMonths(new Date(), 4),
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    company: 'Cloud Solutions',
    location: 'Singapore',
    match: 89,
    skills: ['AWS', 'Docker', 'Kubernetes'],
    portal: 'Indeed',
    postedDate: subMonths(new Date(), 5),
  },
  {
    id: 7,
    title: 'Backend Developer',
    company: 'API Masters',
    location: 'Singapore',
    match: 80,
    skills: ['Node.js', 'Express', 'PostgreSQL'],
    portal: 'Glassdoor',
    postedDate: subMonths(new Date(), 7),
  },
];

const JobListings: React.FC = () => {
  const { selectedPortals } = useJobPortals();
  const { startDate, endDate, setStartDate, setEndDate } = useJobFilters();

  const filteredByPortal = selectedPortals.length > 0
    ? mockJobs.filter((job) => selectedPortals.includes(job.portal))
    : mockJobs;

  const filteredJobs = filteredByPortal.filter(job => {
    const postedDate = new Date(job.postedDate);
    return postedDate >= startDate && postedDate <= endDate;
  });

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
        Job Recommendations
      </Typography>

      <Grid container spacing={2} sx={{ mb: 4 }} alignItems="center" justifyContent="center">
        <Grid item>
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={(newValue) => setStartDate(newValue || new Date())}
          />
        </Grid>
        <Grid item>
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={(newValue) => setEndDate(newValue || new Date())}
          />
        </Grid>
      </Grid>

      {selectedPortals.length > 0 && (
        <Typography variant="subtitle1" align="center" sx={{ mb: 3 }}>
          Filtering by: {selectedPortals.join(', ')}
        </Typography>
      )}

      {selectedPortals.length === 0 && (
        <Typography variant="h6" align="center" color="text.secondary" sx={{ my: 4 }}>
          Please select job portals from the{' '}
          <Button component={RouterLink} to="/job-portals" variant="text">
            Job Portals
          </Button>{' '}
          page to filter your job recommendations.
        </Typography>
      )}

      {filteredJobs.length === 0 ? (
        <Typography variant="h6" align="center" color="text.secondary" sx={{ my: 4 }}>
          No job listings found for the selected criteria.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {filteredJobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <Paper sx={{ p: 3, borderRadius: '16px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {job.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {job.company} - {job.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Portal: {job.portal}
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
      )}
    </Container>
  );
};

export default JobListings;
