import { useState, type FormEvent } from 'react';
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
    <section className="section section--contact" id="contact">
      <div className="container">
        <p className="contact__eyebrow">06. What's Next?</p>
        <h2 className="contact__title">Get In Touch</h2>
        <p className="contact__text">
          I'm always open to discussing new projects or opportunities. Send me a
          message and I'll get back to you.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text" placeholder="Your name" required maxLength={100}
            value={form.name} onChange={update('name')}
          />
          <input
            type="email" placeholder="Your email" required maxLength={200}
            value={form.email} onChange={update('email')}
          />
          <textarea
            placeholder="Your message" required maxLength={2000}
            value={form.message} onChange={update('message')}
          />
          <button
            type="submit" className="btn btn--primary"
            disabled={status.kind === 'sending'}
          >
            {status.kind === 'sending' ? 'Sending…' : 'Say Hello'}
          </button>

          {status.kind === 'ok' && <p className="form-status form-status--ok">{status.text}</p>}
          {status.kind === 'error' && <p className="form-status form-status--err">{status.text}</p>}
        </form>
      </div>
    </section>
  );
}
