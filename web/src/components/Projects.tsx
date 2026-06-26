import { useEffect, useState } from 'react';
import { api } from '../api';
import type { Project } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects() {
  const ref = useScrollReveal<HTMLElement>();
  const [projects, setProjects] = useState<Project[]>([]);
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading');

  useEffect(() => {
    api
      .getProjects()
      .then((data) => { setProjects(data); setStatus('ok'); })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <h2 className="section__title"><span className="section__num">03.</span> Featured Projects</h2>

        {status === 'loading' && <p className="loading">Loading projects…</p>}
        {status === 'error' && (
          <p className="error-msg">Couldn't reach the API. Is the backend running?</p>
        )}

        {status === 'ok' && (
          <div className="projects">
            {projects.map((p) => (
              <article className="project-card" key={p.id}>
                <div className="project-card__top">
                  <span className="project-card__folder">📁</span>
                  <div className="project-card__links">
                    {p.repoUrl && (
                      <a href={p.repoUrl} target="_blank" rel="noopener noreferrer">Code</a>
                    )}
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">Live</a>
                    )}
                  </div>
                </div>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.description}</p>
                <ul className="project-card__tags">
                  {p.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
