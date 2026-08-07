import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App3 from '../src/App3.tsx'

import {ThemeProvider, CssBaseline} from "@mui/material";
import theme from './/components/ui/Librarykatsuyo/theme.ts';
import App2 from './App2.tsx';


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <ThemeProvider theme={theme}>
      // {/* <CssBaseline /> */}
      <App2 />
    </ThemeProvider>
  // </StrictMode>,
)

