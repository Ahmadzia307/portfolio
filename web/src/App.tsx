import { useEffect, useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme, type Mode } from './theme';
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
  const [mode, setMode] = useState<Mode>('dark');

  // Restore saved theme / OS preference on first load.
  useEffect(() => {
    const stored = localStorage.getItem('theme') as Mode | null;
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    setMode(stored ?? (prefersLight ? 'light' : 'dark'));
  }, []);

  // Record a single page view (best-effort, non-blocking).
  useEffect(() => {
    api.recordVisit(window.location.pathname);
  }, []);

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggle = () => {
    const next: Mode = mode === 'dark' ? 'light' : 'dark';
    setMode(next);
    localStorage.setItem('theme', next);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav mode={mode} onToggle={toggle} />
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
