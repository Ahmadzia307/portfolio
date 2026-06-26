import { useEffect, useState } from 'react';
import { api } from '../api';
import type { BlogPostSummary } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Blog() {
  const ref = useScrollReveal<HTMLElement>();
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading');

  useEffect(() => {
    api
      .getBlogPosts()
      .then((data) => { setPosts(data); setStatus('ok'); })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <section className="section section--alt" id="blog" ref={ref}>
      <div className="container">
        <h2 className="section__title"><span className="section__num">04.</span> Latest Writing</h2>

        {status === 'loading' && <p className="loading">Loading posts…</p>}
        {status === 'error' && <p className="error-msg">Couldn't load blog posts.</p>}

        {status === 'ok' && (
          <div className="blog">
            {posts.map((p) => (
              <article className="blog-card" key={p.id}>
                <span className="blog-card__date">{formatDate(p.publishedAt)}</span>
                <h3 className="blog-card__title">{p.title}</h3>
                <p className="blog-card__summary">{p.summary}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
