import React, { useState } from 'react';
import { Box, Button, Container, Typography, Paper, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DeleteIcon from '@mui/icons-material/Delete';

const DropzoneContainer = styled('div')(({ theme }) => ({
  border: `2px dashed ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'border-color 0.3s',
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
}));

const ResumeAnalysis: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxFiles: 1,
  });

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleAnalyze = () => {
    if (file) {
      // TODO: Implement resume analysis logic
      console.log('Analyzing file:', file.name);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, borderRadius: '16px' }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          Resume Analysis
        </Typography>
        <Typography variant="body1" gutterBottom align="center" sx={{ mb: 4 }}>
          Upload your resume to get a detailed analysis and job recommendations.
        </Typography>

        <DropzoneContainer {...getRootProps()}>
          <input {...getInputProps()} />
          <CloudUploadIcon sx={{ fontSize: 60, color: 'primary.main' }} />
          <Typography variant="h6" gutterBottom>
            {isDragActive ? 'Drop the file here ...' : 'Drag & drop your resume here, or click to select a file'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Supported formats: PDF, DOCX
          </Typography>
        </DropzoneContainer>

        {file && (
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Paper sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
              <InsertDriveFileIcon sx={{ mr: 1 }} />
              <Typography variant="body1">{file.name}</Typography>
              <IconButton onClick={handleRemoveFile} sx={{ ml: 1 }}>
                <DeleteIcon />
              </IconButton>
            </Paper>
          </Box>
        )}

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            onClick={handleAnalyze} 
            disabled={!file}
            sx={{ 
              boxShadow: '0px 4px 20px rgba(0, 123, 255, 0.5)',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            Analyze My Resume
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ResumeAnalysis;
