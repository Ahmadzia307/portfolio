import { Box, Typography } from '@mui/material';
import Section from './Section';
import Reveal from './Reveal';
import { MONO } from '../theme';

const ROLES = [
  {
    date: '2023 — Present',
    title: 'Software Developer',
    company: '@ Constellation Dealer',
    body: 'Build and maintain enterprise CRM features including a CPQ pricing engine, OAuth integrations, and reporting dashboards. Collaborate across teams to ship reliable, well-tested software.',
  },
  {
    date: '20XX — 20XX',
    title: 'Previous Role',
    company: '@ Company',
    body: 'Describe what you worked on, the impact you had, and the technologies you used. Keep it concise and outcome-focused.',
  },
];

export default function Experience() {
  return (
    <Section id="experience" num="05." title="Experience">
      <Reveal>
        <Box sx={{ position: 'relative', pl: 4 }}>
          {/* vertical line */}
          <Box sx={{ position: 'absolute', left: '5px', top: 8, bottom: 8, width: '2px', bgcolor: 'divider' }} />
          {ROLES.map((r) => (
            <Box key={r.title} sx={{ position: 'relative', pb: 6, '&:last-of-type': { pb: 0 } }}>
              <Box
                sx={{
                  position: 'absolute', left: -32, top: 6, width: 12, height: 12, borderRadius: '50%',
                  bgcolor: 'primary.main', boxShadow: (t) => `0 0 0 4px ${t.palette.action.hover}`,
                }}
              />
              <Typography sx={{ color: 'primary.main', fontFamily: MONO, fontSize: '0.82rem' }}>{r.date}</Typography>
              <Typography variant="h6" sx={{ my: 0.5 }}>
                {r.title} <Box component="span" sx={{ color: 'primary.main', fontWeight: 500 }}>{r.company}</Box>
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: '0.95rem' }}>{r.body}</Typography>
            </Box>
          ))}
        </Box>
      </Reveal>
    </Section>
  );
}
