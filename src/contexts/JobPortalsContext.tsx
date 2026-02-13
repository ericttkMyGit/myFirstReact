import React, { createContext, useState, useContext, ReactNode } from 'react';

interface JobPortalsContextType {
  selectedPortals: string[];
  setSelectedPortals: React.Dispatch<React.SetStateAction<string[]>>;
}

const JobPortalsContext = createContext<JobPortalsContextType | undefined>(undefined);

export const JobPortalsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedPortals, setSelectedPortals] = useState<string[]>([]);

  return (
    <JobPortalsContext.Provider value={{ selectedPortals, setSelectedPortals }}>
      {children}
    </JobPortalsContext.Provider>
  );
};

export const useJobPortals = () => {
  const context = useContext(JobPortalsContext);
  if (context === undefined) {
    throw new Error('useJobPortals must be used within a JobPortalsProvider');
  }
  return context;
};
