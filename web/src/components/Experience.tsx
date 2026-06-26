import { Box, Typography } from '@mui/material';
import Section from './Section';
import Reveal from './Reveal';
import { MONO } from '../theme';

const ROLES = [
  {
    date: 'Jan 2024 — Present',
    title: 'Senior Software Developer',
    company: '@ Contour Software',
    body: 'Build and maintain TargetCRM, an enterprise CRM for outdoor power equipment dealers across the USA & Canada (.NET Core, React, Azure Functions, Azure SQL). Delivered Facebook Messenger & Instagram integrations with OAuth 2.0 and speech-to-text, led a React MUI v4→v7 migration, re-architected the user identity model for DMS integration with zero downtime, and tuned database performance across core modules.',
  },
  {
    date: 'Feb 2022 — Jan 2024',
    title: 'Senior Software Engineer',
    company: '@ Tkxel',
    body: 'Led a team of 4+ engineers on Virtual Academy, a public-safety and law-enforcement training platform for US clients. Built scalable Web APIs in .NET 6 and Angular UIs, integrated AWS (S3, EC2, SES), drove sprint planning as a client-facing resource, and mentored junior developers.',
  },
  {
    date: 'Jan 2021 — Feb 2022',
    title: 'Software Engineer',
    company: '@ Tkxel',
    body: 'Led development across multiple client projects including Artvisor (artwork & exhibition management), RW3, and Artnet. Owned solution design, architecture, and project planning while running daily scrums (C#, ASP.NET Core, SQL Server, AWS).',
  },
  {
    date: 'Jan 2019 — Dec 2020',
    title: 'Software Engineer (.NET)',
    company: '@ Trisoft Technologies',
    body: 'Developed web and desktop modules for YieldWerx, a semiconductor yield-analysis platform. Built REST APIs, Windows Services, and reporting solutions, collaborating with global teams to ship production features (ASP.NET, C#, Entity Framework, SQL Server).',
  },
  {
    date: 'Sep 2018 — Jan 2019',
    title: 'Software Engineer (Laravel)',
    company: '@ DigiLynx',
    body: 'Built and maintained features for the CondoBridge platform using Laravel and Magento 2, delivering responsive UIs and backend services (PHP, jQuery, MySQL).',
  },
  {
    date: '2014 — 2018',
    title: 'BS Information Technology (Honors)',
    company: '@ PUCIT, University of the Punjab',
    body: 'CGPA 3.38 / 4.00. Winner — UCP Programming Competition (2017).',
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
            <Box key={r.title + r.date} sx={{ position: 'relative', pb: 6, '&:last-of-type': { pb: 0 } }}>
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
