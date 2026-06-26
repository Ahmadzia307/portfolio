import { useEffect, useState } from 'react';
import { Box, Container, Typography, Stack, Paper } from '@mui/material';
import { api } from '../api';
import type { AnalyticsSummary } from '../types';
import { MONO } from '../theme';
import { SITE } from '../config';

export default function Footer() {
  const [stats, setStats] = useState<AnalyticsSummary | null>(null);

  useEffect(() => {
    api.getAnalytics().then(setStats).catch(() => setStats(null));
  }, []);

  return (
    <Box component="footer" sx={{ textAlign: 'center', py: 4, borderTop: 1, borderColor: 'divider' }}>
      <Container>
        {stats && (
          <Stack direction="row" spacing={3} sx={{ mb: 2.5, flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
            <Stat num={stats.totalVisits} label="page views" />
            <Stat num={stats.uniquePaths} label="pages tracked" />
          </Stack>
        )}
        <Typography sx={{ color: 'text.secondary', fontFamily: MONO, fontSize: '0.82rem' }}>
          Designed &amp; built by {SITE.name}
        </Typography>
        <Typography sx={{ color: 'text.secondary', fontFamily: MONO, fontSize: '0.82rem' }}>
          © {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}

function Stat({ num, label }: { num: number; label: string }) {
  return (
    <Paper variant="outlined" sx={{ px: 3.5, py: 2.5, minWidth: 140 }}>
      <Typography sx={{ fontSize: '1.8rem', fontWeight: 800, color: 'primary.main' }}>{num}</Typography>
      <Typography sx={{ color: 'text.secondary', fontFamily: MONO, fontSize: '0.78rem' }}>{label}</Typography>
    </Paper>
  );
}
