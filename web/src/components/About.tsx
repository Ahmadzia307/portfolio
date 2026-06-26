import { Grid, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Section from './Section';
import Reveal from './Reveal';
import { MONO } from '../theme';
import { SITE } from '../config';

const TECH = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'C# / .NET', 'SQL Server'];

export default function About() {
  return (
    <Section id="about" num="01." title="About Me">
      <Reveal>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              Hello! I'm Muhammad, a developer who enjoys turning complex problems into
              clean, intuitive software. My work spans the full stack — from crafting
              responsive interfaces to designing the data models and services that power them.
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              I currently work on enterprise CRM systems, where I've built features like
              configurable pricing engines (CPQ), OAuth integrations, and data-driven
              dashboards. I care deeply about code quality, performance, and building things
              that are a pleasure to use.
            </Typography>
            <Typography color="text.secondary">Technologies I've been working with recently:</Typography>
            <Grid container sx={{ mt: 1 }}>
              {TECH.map((t) => (
                <Grid size={6} key={t}>
                  <List dense disablePadding>
                    <ListItem disableGutters disablePadding>
                      <ListItemIcon sx={{ minWidth: 26, color: 'primary.main' }}>
                        <ArrowRightIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primary={t}
                        slotProps={{ primary: { sx: { fontFamily: MONO, fontSize: '0.85rem', color: 'text.secondary' } } }}
                      />
                    </ListItem>
                  </List>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: 'relative', maxWidth: 300, aspectRatio: '1', mx: { xs: 'auto', md: 0 } }}>
              {/* Replace with your photo: <Box component="img" src="/me.jpg" .../> */}
              <Box
                sx={{
                  width: '100%', height: '100%', display: 'grid', placeItems: 'center',
                  bgcolor: 'action.hover', border: 1, borderColor: 'divider', borderRadius: 2,
                  fontSize: '3rem', fontWeight: 800, color: 'primary.main',
                }}
              >
                {SITE.initials}
              </Box>
              <Box
                sx={{
                  position: 'absolute', inset: '14px -14px -14px 14px',
                  border: 2, borderColor: 'primary.main', borderRadius: 2, zIndex: -1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Reveal>
    </Section>
  );
}
