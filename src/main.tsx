import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import APP from './components/ui/Taskmanagement/APP.tsx'
import {ThemeProvider, CssBaseline} from "@mui/material";
import theme from './/components/ui/Librarykatsuyo/theme.ts';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <APP />
    </ThemeProvider>
  </StrictMode>,
)

