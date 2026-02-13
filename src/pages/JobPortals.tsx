import React, { useState, useEffect } from 'react';
import { Typography, Box, FormControlLabel, Checkbox, Button, Grid, Paper } from '@mui/material';
import { useJobPortals } from '../contexts/JobPortalsContext';

const jobPortalsList = [
  'LinkedIn',
  'Indeed',
  'Glassdoor',
  'Monster',
  'ZipRecruiter',
  'CareerBuilder',
  'Simply Hired',
  'Dice',
  'Adzuna',
  'Jora',
];

const JobPortals: React.FC = () => {
  const { selectedPortals, setSelectedPortals } = useJobPortals();
  const [currentSelection, setCurrentSelection] = useState<string[]>(selectedPortals);

  useEffect(() => {
    setCurrentSelection(selectedPortals);
  }, [selectedPortals]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    if (checked) {
      setCurrentSelection((prev) => [...prev, name]);
    } else {
      setCurrentSelection((prev) => prev.filter((portal) => portal !== name));
    }
  };

  const handleConfirmSelection = () => {
    setSelectedPortals(currentSelection);
    alert(`You have selected: ${currentSelection.join(', ')}`);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Select Job Portals
      </Typography>
      <Typography variant="body1" paragraph>
        Choose up to 10 job portals to limit your search.
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={2}>
          {jobPortalsList.map((portal) => (
            <Grid item xs={12} sm={6} md={4} key={portal}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={currentSelection.includes(portal)}
                    onChange={handleCheckboxChange}
                    name={portal}
                  />
                }
                label={portal}
              />
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={handleConfirmSelection}
          sx={{ mt: 3 }}
        >
          Confirm Selection
        </Button>
      </Paper>

      {selectedPortals.length > 0 && (
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Currently Selected:
          </Typography>
          <Typography variant="body1">
            {selectedPortals.join(', ')}
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default JobPortals;

