import { Grid, Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import Section from './Section';
import Reveal from './Reveal';

const GROUPS = [
  { title: 'Languages', items: ['C#', 'JavaScript', 'TypeScript', 'SQL'] },
  { title: 'Backend', items: ['.NET Core / 6 / 8 / 9', 'ASP.NET Core & Web API', 'Entity Framework, Dapper, LINQ', 'Windows Services'] },
  { title: 'Frontend', items: ['React.js & Redux', 'Angular', 'Material UI (MUI)', 'HTML5, CSS3, jQuery'] },
  { title: 'Cloud & DevOps', items: ['Azure (Functions, SQL, DevOps)', 'AWS (EC2, S3, SES)', 'CI/CD Pipelines', 'Git & Bitbucket'] },
  { title: 'Architecture', items: ['System & API Design', 'Microservices', 'Distributed Systems', 'SOLID & Design Patterns'] },
  { title: 'Practices', items: ['Agile / Scrum', 'Code Reviews', 'Mentoring & Team Lead', 'Performance Tuning'] },
];

export default function Skills() {
  return (
    <Section id="skills" num="02." title="Skills" alt>
      <Reveal>
        <Grid container spacing={3}>
          {GROUPS.map((g) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={g.title}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>{g.title}</Typography>
                  <List dense disablePadding>
                    {g.items.map((i) => (
                      <ListItem key={i} disableGutters disablePadding>
                        <ListItemText
                          primary={i}
                          slotProps={{ primary: { sx: { color: 'text.secondary', fontSize: '0.92rem' } } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Reveal>
    </Section>
  );
}
