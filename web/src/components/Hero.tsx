import { Box, Container, Typography, Button, Stack, Link } from '@mui/material';
import { MONO } from '../theme';
import { SITE } from '../config';

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', pt: '70px' }}
    >
      <Container sx={{ maxWidth: 760 }}>
        <Typography sx={{ color: 'primary.main', fontFamily: MONO, mb: 2 }}>
          Hi, my name is
        </Typography>
        <Typography variant="h1" sx={{ fontSize: 'clamp(2.5rem, 8vw, 4.8rem)' }}>
          {SITE.name}.
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: 'text.secondary', fontSize: 'clamp(1.8rem, 6vw, 3.8rem)', mb: 3 }}
        >
          {SITE.role}
        </Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', maxWidth: 560, mb: 4 }}>
          I'm a software developer focused on building accessible, high-quality web
          applications. Currently crafting CRM solutions and pricing engines that real
          businesses rely on every day.
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 5, flexWrap: 'wrap', gap: 2 }}>
          <Button variant="contained" href="#projects" size="large">View My Work</Button>
          <Button variant="outlined" href="#contact" size="large">Get In Touch</Button>
        </Stack>

        <Stack direction="row" spacing={3}>
          {[
            { label: 'GitHub', href: SITE.github },
            { label: 'LinkedIn', href: SITE.linkedin },
            { label: 'Email', href: `mailto:${SITE.email}` },
          ].map((s) => (
            <Link
              key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer" underline="hover"
              sx={{ color: 'text.secondary', fontFamily: MONO, fontSize: '0.85rem' }}
            >
              {s.label}
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
