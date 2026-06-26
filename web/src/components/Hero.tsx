import { Box, Container, Typography, Button, Stack, Link, Chip } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import { MONO } from '../theme';
import { SITE } from '../config';

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', pt: '70px' }}
    >
      <Container sx={{ maxWidth: 820 }}>
        <Typography sx={{ color: 'primary.main', fontFamily: MONO, mb: 2 }}>
          Hi, my name is
        </Typography>
        <Typography variant="h1" sx={{ fontSize: 'clamp(2.5rem, 8vw, 4.8rem)' }}>
          {SITE.name}.
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: 'text.secondary', fontSize: 'clamp(1.6rem, 6vw, 3.4rem)', mb: 2 }}
        >
          {SITE.tagline}
        </Typography>

        <Stack direction="row" spacing={1.5} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
          <Chip label={SITE.title} color="primary" variant="outlined" />
          <Chip icon={<PlaceIcon />} label={SITE.location} variant="outlined" />
          <Chip label="8+ years" variant="outlined" />
        </Stack>

        <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', maxWidth: 640, mb: 4 }}>
          Senior Software Engineer with 8+ years designing and modernizing enterprise-scale
          web applications with .NET, ASP.NET Core, React, Angular, Azure, and AWS. I lead
          teams, drive architecture decisions, and ship scalable SaaS and CRM products for
          North American clients.
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
