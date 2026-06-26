import { useEffect } from 'react';
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
  // Record a single page view on load (best-effort, non-blocking).
  useEffect(() => {
    api.recordVisit(window.location.pathname);
  }, []);

  return (
    <>
      <Nav />
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
    </>
  );
}
