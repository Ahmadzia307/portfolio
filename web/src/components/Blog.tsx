import { useEffect, useState } from 'react';
import { Stack, Card, CardActionArea, CardContent, Typography, CircularProgress, Alert } from '@mui/material';
import Section from './Section';
import Reveal from './Reveal';
import { api } from '../api';
import type { BlogPostSummary } from '../types';
import { MONO } from '../theme';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading');

  useEffect(() => {
    api.getBlogPosts()
      .then((data) => { setPosts(data); setStatus('ok'); })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <Section id="blog" num="04." title="Latest Writing" alt>
      {status === 'loading' && <CircularProgress color="primary" />}
      {status === 'error' && <Alert severity="error">Couldn't load blog posts.</Alert>}

      {status === 'ok' && (
        <Stack spacing={2.5}>
          {posts.map((p) => (
            <Reveal key={p.id}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography sx={{ color: 'primary.main', fontFamily: MONO, fontSize: '0.8rem' }}>
                      {formatDate(p.publishedAt)}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 0.5, mb: 1 }}>{p.title}</Typography>
                    <Typography color="text.secondary" sx={{ fontSize: '0.95rem' }}>{p.summary}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Reveal>
          ))}
        </Stack>
      )}
    </Section>
  );
}
