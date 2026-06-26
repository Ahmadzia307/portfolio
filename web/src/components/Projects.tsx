import { useEffect, useState } from 'react';
import {
  Grid, Card, CardContent, Typography, Chip, Stack, Box, IconButton, CircularProgress, Alert,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Section from './Section';
import Reveal from './Reveal';
import { api } from '../api';
import type { Project } from '../types';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading');

  useEffect(() => {
    api.getProjects()
      .then((data) => { setProjects(data); setStatus('ok'); })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <Section id="projects" num="03." title="Featured Projects">
      {status === 'loading' && <CircularProgress color="primary" />}
      {status === 'error' && <Alert severity="error">Couldn't reach the API. Is the backend running?</Alert>}

      {status === 'ok' && (
        <Grid container spacing={3}>
          {projects.map((p) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={p.id}>
              <Reveal>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <FolderIcon color="primary" fontSize="large" />
                      <Box>
                        {p.repoUrl && (
                          <IconButton size="small" href={p.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="Source code">
                            <GitHubIcon fontSize="small" />
                          </IconButton>
                        )}
                        {p.liveUrl && (
                          <IconButton size="small" href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                            <LaunchIcon fontSize="small" />
                          </IconButton>
                        )}
                      </Box>
                    </Box>
                    <Typography variant="h6" gutterBottom>{p.title}</Typography>
                    <Typography color="text.secondary" sx={{ fontSize: '0.95rem', flexGrow: 1, mb: 2 }}>
                      {p.description}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                      {p.tags.map((t) => <Chip key={t} label={t} size="small" variant="outlined" />)}
                    </Stack>
                  </CardContent>
                </Card>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      )}
    </Section>
  );
}
