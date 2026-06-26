import { Grid, Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import Section from './Section';
import Reveal from './Reveal';

const GROUPS = [
  { title: 'Frontend', items: ['HTML5 & CSS3', 'JavaScript / TypeScript', 'React & MUI', 'Responsive Design'] },
  { title: 'Backend', items: ['Node.js', 'C# / .NET', 'REST APIs', 'Authentication / OAuth'] },
  { title: 'Data', items: ['SQL Server', 'Data Modeling', 'Entity Framework', 'Query Optimization'] },
  { title: 'Tools', items: ['Git & Azure DevOps', 'CI/CD', 'Docker', 'Agile / Scrum'] },
];

export default function Skills() {
  return (
    <Section id="skills" num="02." title="Skills" alt>
      <Reveal>
        <Grid container spacing={3}>
          {GROUPS.map((g) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={g.title}>
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
