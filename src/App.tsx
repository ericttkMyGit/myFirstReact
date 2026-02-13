import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import JobListings from './pages/JobListings';
import ResumeAnalysis from './pages/ResumeAnalysis';
import JobPortals from './pages/JobPortals';
import Layout from './layouts/Layout';
import theme from './theme';
import { JobPortalsProvider } from './contexts/JobPortalsContext';
import { JobFiltersProvider } from './contexts/JobFiltersContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <JobPortalsProvider>
          <JobFiltersProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/jobs" element={<JobListings />} />
                  <Route path="/resume" an element={<ResumeAnalysis />} />
                  <Route path="/job-portals" element={<JobPortals />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </JobFiltersProvider>
        </JobPortalsProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;