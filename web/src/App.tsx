import { useEffect, useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './theme';
import { useThemeMode } from './useThemeMode';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { api } from './api';

export default function App() {
  const { setting, setSetting, resolvedMode } = useThemeMode();

  // Record a single page view (best-effort, non-blocking).
  useEffect(() => {
    api.recordVisit(window.location.pathname);
  }, []);

  const theme = useMemo(() => getTheme(resolvedMode), [resolvedMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Nav setting={setting} onSetSetting={setSetting} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
