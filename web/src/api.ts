import type {
  Project,
  BlogPostSummary,
  BlogPost,
  ContactRequest,
  AnalyticsSummary,
} from './types';
import { PROJECTS, BLOG_POSTS } from './data';
import { SITE } from './config';

// The live site runs on GitHub Pages (static only), so content is served from
// bundled data instead of a hosted API. The .NET API in /api is the full-stack
// reference implementation; point this back at it by restoring fetch() calls
// and setting VITE_API_BASE_URL if you deploy the backend later.
export const api = {
  getProjects: async (featuredOnly = false): Promise<Project[]> =>
    featuredOnly ? PROJECTS.filter((p) => p.featured) : PROJECTS,

  getBlogPosts: async (): Promise<BlogPostSummary[]> => BLOG_POSTS,

  getBlogPost: async (slug: string): Promise<BlogPost> => {
    const summary = BLOG_POSTS.find((p) => p.slug === slug);
    if (!summary) throw new Error('Post not found');
    return { ...summary, content: '' };
  },

  // No backend to receive submissions — open the visitor's email client with
  // the message pre-filled, addressed to you.
  sendContact: async (data: ContactRequest): Promise<{ message: string }> => {
    const subject = encodeURIComponent(`Portfolio message from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\nFrom: ${data.name} <${data.email}>`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    return { message: 'Opening your email app — just hit send!' };
  },

  // Analytics requires a backend; disabled on the static site.
  getAnalytics: async (): Promise<AnalyticsSummary | null> => null,

  recordVisit: async (): Promise<void> => {},
};
