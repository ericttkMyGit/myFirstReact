import React, { createContext, useState, useContext, ReactNode } from 'react';
import { subMonths } from 'date-fns';

interface JobFiltersContextType {
  startDate: Date;
  endDate: Date;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
}

const JobFiltersContext = createContext<JobFiltersContextType | undefined>(undefined);

export const JobFiltersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [startDate, setStartDate] = useState<Date>(subMonths(new Date(), 6));
  const [endDate, setEndDate] = useState<Date>(new Date());

  return (
    <JobFiltersContext.Provider value={{ startDate, endDate, setStartDate, setEndDate }}>
      {children}
    </JobFiltersContext.Provider>
  );
};

export const useJobFilters = () => {
  const context = useContext(JobFiltersContext);
  if (context === undefined) {
    throw new Error('useJobFilters must be used within a JobFiltersProvider');
  }
  return context;
};
