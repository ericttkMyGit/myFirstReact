# Blueprint for Job Matcher Application

## Overview

This blueprint outlines the development of the Job Matcher application, focusing on enhancing its visual design and implementing a new feature for selecting job portals. The application aims to provide a modern, visually appealing, and user-friendly experience for job seekers, allowing them to filter job recommendations based on their preferred job portals.

## Detailed Outline of Project Features and Design

### Initial Setup and Core Components:
- **React Project Structure:** Standard React project initialized with Vite, with `src/main.tsx` as the entry point.
- **Routing:** Implemented using `react-router-dom` with routes for Home, Job Listings, and Resume Analysis.
- **Layout:** A consistent layout (`src/layouts/Layout.tsx`) including an `AppBar` for navigation and a `Container` for page content.

### Visual Design Enhancements:
- **MUI (Material-UI) Integration:** Integrated `@mui/material`, `@emotion/react`, and `@emotion/styled` for modern UI components.
- **Custom Theme (`src/theme.ts`):** A custom Material-UI theme has been created to provide a consistent and aesthetically pleasing look.
  - **Color Palette:** Features a deep purple primary color (`#7e57c2`) and a vibrant orange secondary color (`#ffab40`), with a light gray background (`#f5f5f5`).
  - **Typography:** Uses 'Roboto, sans-serif' with defined styles for `h1`, `h2`, and `body1` to ensure clear hierarchy and readability.
  - **Components Styling:** Custom styles for `MuiPaper` (with shadows for depth) and `MuiButton` (rounded corners, contained primary buttons with glow effects).
- **Global Styles (`CssBaseline`):** Applied `CssBaseline` in `App.tsx` to establish a consistent baseline for styling across all browsers.
- **Enhanced Layout (`src/layouts/Layout.tsx`):** The main layout now includes:
  - A more stylish `AppBar` with navigation links.
  - A responsive `Container` to center the main content.
  - A functional footer for copyright information and consistent branding.
  - A new "Job Portals" navigation link.

### New Feature: Job Portal Selection
- **Job Portals Page (`src/pages/JobPortals.tsx`):**
  - A dedicated page for users to select their preferred job portals.
  - Displays a list of 10 popular job portals (e.g., LinkedIn, Indeed, Glassdoor).
  - Uses MUI `Checkbox`, `FormControlLabel`, `Grid`, and `Paper` components for a clean and interactive selection interface.
  - Users can select multiple portals.
  - A "Confirm Selection" button saves the choices.
- **State Management with Context (`src/contexts/JobPortalsContext.tsx`):**
  - A new React Context (`JobPortalsContext`) has been created to manage the `selectedPortals` state globally.
  - `JobPortalsProvider` wraps the main application routes in `App.tsx`, making `selectedPortals` and `setSelectedPortals` accessible throughout the application.
  - `useJobPortals` custom hook simplifies consuming the context in child components.
- **Job Listings Filtering (`src/pages/JobListings.tsx`):**
  - The `JobListings` page now consumes the `JobPortalsContext` to access the `selectedPortals`.
  - Mock job data has been updated to include a `portal` field for each job listing.
  - Job listings are dynamically filtered based on the user's `selectedPortals`.
  - If no portals are selected, all mock jobs are displayed.
  - Clear messages are shown to the user:
    - Indicating which portals are currently being used for filtering.
    - Prompting the user to select portals if none are chosen.
    - Informing the user if no job listings match the selected portals.

## Current Plan and Next Steps

All requested features (visual design enhancement and job portal selection) have been implemented. The application now features a modern UI, global state management for job portal selection, and dynamic filtering of job listings.

### User Interaction with New Feature:
1.  **Navigate to "Job Portals":** Click on the "Job Portals" link in the navigation bar.
2.  **Select Portals:** On the "Select Job Portals" page, choose up to 10 job portals using the checkboxes.
3.  **Confirm Selection:** Click the "Confirm Selection" button. An alert will confirm your choices, and the selected portals will be displayed below.
4.  **View Filtered Listings:** Navigate to the "Job Listings" page. You will see the job recommendations filtered based on your selections. If no portals were selected, all mock jobs will be shown. If selected portals yield no matches, a corresponding message will appear.

### Regarding the MCP Server:
You previously mentioned "connect to https://server.smithery.ai/@upstash/context7-mcp". My current setup and tools are configured to integrate with Firebase MCP as described in the `GEMINI.md` file (by adding a configuration to `.idx/mcp.json`). I do not currently have the capability to directly "connect" to an arbitrary external MCP server URL in the way you might be expecting for real-time code review or updates.

If you intended for me to configure the `.idx/mcp.json` file for `https://server.smithery.ai/@upstash/context7-mcp`, please provide specific instructions on how this server should be configured within the `mcpServers` object, similar to the Firebase example. This would likely involve providing a `command` and `args` that allow me to interact with that specific MCP endpoint.

I am ready for your next command!