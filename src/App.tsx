import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JobListings from './pages/JobListings';
import ResumeAnalysis from './pages/ResumeAnalysis';
import Layout from './layouts/Layout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/resume" element={<ResumeAnalysis />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;