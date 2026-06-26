import { useEffect, useRef, useState, type ReactNode } from 'react';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';

/** Fades + slides its children up the first time they scroll into view. */
export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box ref={ref}>
      <Fade in={shown} timeout={600}>
        <Box
          sx={{
            transform: shown ? 'translateY(0)' : 'translateY(30px)',
            transition: 'transform .6s ease',
          }}
        >
          {children}
        </Box>
      </Fade>
    </Box>
  );
}
