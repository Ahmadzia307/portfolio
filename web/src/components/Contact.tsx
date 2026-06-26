import { useState, type FormEvent } from 'react';
import { Box, Container, Typography, TextField, Button, Alert, Stack } from '@mui/material';
import { MONO } from '../theme';
import { api } from '../api';

type Status = { kind: 'idle' | 'sending' | 'ok' | 'error'; text?: string };

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [field]: e.target.value });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus({ kind: 'sending' });
    try {
      const res = await api.sendContact(form);
      setStatus({ kind: 'ok', text: res.message });
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus({ kind: 'error', text: 'Something went wrong. Please try again.' });
    }
  }

  return (
    <Box component="section" id="contact" sx={{ py: 15, textAlign: 'center' }}>
      <Container>
        <Typography sx={{ color: 'primary.main', fontFamily: MONO, mb: 2 }}>06. What's Next?</Typography>
        <Typography variant="h2" sx={{ fontSize: 'clamp(2rem,6vw,3.2rem)', fontWeight: 800, mb: 2.5 }}>
          Get In Touch
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 520, mx: 'auto', mb: 4.5, fontSize: '1.05rem' }}>
          I'm always open to discussing new projects or opportunities. Send me a message and
          I'll get back to you.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 520, mx: 'auto', textAlign: 'left' }}>
          <Stack spacing={2}>
            <TextField label="Your name" required fullWidth slotProps={{ htmlInput: { maxLength: 100 } }}
              value={form.name} onChange={update('name')} />
            <TextField label="Your email" type="email" required fullWidth slotProps={{ htmlInput: { maxLength: 200 } }}
              value={form.email} onChange={update('email')} />
            <TextField label="Your message" required fullWidth multiline minRows={4}
              slotProps={{ htmlInput: { maxLength: 2000 } }}
              value={form.message} onChange={update('message')} />
            <Button type="submit" variant="contained" size="large" disabled={status.kind === 'sending'}>
              {status.kind === 'sending' ? 'Sending…' : 'Say Hello'}
            </Button>
            {status.kind === 'ok' && <Alert severity="success">{status.text}</Alert>}
            {status.kind === 'error' && <Alert severity="error">{status.text}</Alert>}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
