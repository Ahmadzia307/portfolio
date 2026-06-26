import { Grid, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Chip, Stack } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import VerifiedIcon from '@mui/icons-material/Verified';
import SchoolIcon from '@mui/icons-material/School';
import Section from './Section';
import Reveal from './Reveal';
import { MONO } from '../theme';
import { SITE } from '../config';

const TECH = ['C# / .NET Core', 'ASP.NET Core', 'React & Redux', 'Angular', 'Microsoft Azure', 'SQL Server'];

export default function About() {
  return (
    <Section id="about" num="01." title="About Me">
      <Reveal>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              I'm a Senior Software Engineer based in {SITE.location}, with 8+ years building and
              modernizing enterprise-scale web applications. My work spans the full stack — from
              system design and cloud-native backends to polished React and Angular interfaces.
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              I've led teams of 4+ engineers, driven architectural decisions, modernized legacy
              systems, and delivered scalable SaaS and CRM products for clients across the USA and
              Canada. I care deeply about performance, clean architecture, and shipping software
              that's a pleasure to use.
            </Typography>
            <Typography color="text.secondary">Technologies I work with day to day:</Typography>
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

            <Stack direction="row" spacing={1} sx={{ mt: 3, flexWrap: 'wrap', gap: 1 }}>
              <Chip icon={<VerifiedIcon />} label="Microsoft Certified: Azure AI Fundamentals" variant="outlined" />
              <Chip icon={<SchoolIcon />} label="BS Information Technology — PUCIT" variant="outlined" />
            </Stack>
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
