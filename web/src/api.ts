import type {
  Project,
  BlogPostSummary,
  BlogPost,
  ContactRequest,
  AnalyticsSummary,
} from './types';

// Base URL of the .NET API. Set VITE_API_BASE_URL in .env files /
// in your host's environment. Falls back to the local dev API.
const BASE = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5127';

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    throw new Error(`API ${res.status}: ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

export const api = {
  getProjects: (featuredOnly = false) =>
    request<Project[]>(`/api/projects${featuredOnly ? '?featuredOnly=true' : ''}`),

  getBlogPosts: () => request<BlogPostSummary[]>('/api/blog'),

  getBlogPost: (slug: string) => request<BlogPost>(`/api/blog/${slug}`),

  sendContact: (data: ContactRequest) =>
    request<{ message: string }>('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  getAnalytics: () => request<AnalyticsSummary>('/api/analytics/summary'),

  // Fire-and-forget; never block the UI on analytics.
  recordVisit: (path: string) =>
    fetch(`${BASE}/api/analytics/visit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path, referrer: document.referrer || null }),
    }).catch(() => {
      /* analytics is best-effort */
    }),
};
