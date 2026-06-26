import { useEffect, useState } from 'react';
import {
  AppBar, Toolbar, Container, Box, Button, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText, Typography, useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import type { Mode } from '../theme';
import { SITE } from '../config';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav({ mode, onToggle }: { mode: Mode; onToggle: () => void }) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 20 });

  // Hide the bar when scrolling down, reveal when scrolling up.
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 200);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={scrolled ? 4 : 0}
      sx={{
        backdropFilter: 'blur(10px)',
        bgcolor: (t) =>
          `color-mix(in srgb, ${t.palette.background.default} 85%, transparent)`,
        transform: hidden ? 'translateY(-100%)' : 'none',
        transition: 'transform .3s ease',
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography
            component="a" href="#home"
            sx={{ fontWeight: 800, fontSize: '1.5rem', color: 'primary.main', textDecoration: 'none' }}
          >
            {SITE.initials}<Box component="span" sx={{ color: 'text.primary' }}>.</Box>
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            {LINKS.map((l) => (
              <Button key={l.href} href={l.href} color="inherit" sx={{ fontWeight: 500 }}>
                {l.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton onClick={onToggle} aria-label="Toggle theme" color="primary">
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton
              onClick={() => setOpen(true)} aria-label="Open menu" color="primary"
              sx={{ display: { xs: 'inline-flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260 }} role="presentation" onClick={() => setOpen(false)}>
          <List sx={{ mt: 4 }}>
            {LINKS.map((l) => (
              <ListItem key={l.href} disablePadding>
                <ListItemButton component="a" href={l.href}>
                  <ListItemText primary={l.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
