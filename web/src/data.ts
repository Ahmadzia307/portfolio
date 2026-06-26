import type { Project, BlogPostSummary } from './types';

// Content for the live site. Mirrors the .NET API's seed data so the site is
// fully functional on GitHub Pages without a hosted backend. The API in /api
// remains the full-stack reference implementation (run it locally to serve this
// same data over HTTP).
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'TargetCRM',
    description:
      'Enterprise CRM for outdoor power equipment dealers across the USA & Canada. Built Facebook Messenger & Instagram integrations with OAuth 2.0 and speech-to-text, and tuned database performance across core modules.',
    tags: ['.NET Core', 'React', 'Azure Functions', 'Azure SQL', 'OAuth 2.0'],
    repoUrl: null,
    liveUrl: 'https://learntargetcrm.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Virtual Academy',
    description:
      'Public-safety and law-enforcement training platform for US clients. Led a team of 4+ engineers building scalable .NET 6 Web APIs and Angular interfaces with cloud storage and email integrations.',
    tags: ['.NET 6', 'Angular', 'Web API', 'SQL Server'],
    repoUrl: null,
    liveUrl: 'https://virtualacademy.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Artvisor',
    description:
      'Artwork and exhibition management platform. Owned solution design, architecture, and project planning, translating business needs into scalable technical solutions.',
    tags: ['C#', 'ASP.NET Core', 'SQL Server'],
    repoUrl: null,
    liveUrl: 'https://artvisor.com',
    featured: true,
  },
  {
    id: 4,
    title: 'YieldWerx',
    description:
      'Semiconductor yield-analysis and reporting platform. Built REST APIs, Windows Services, and reporting solutions, collaborating with global teams to ship production-ready features.',
    tags: ['ASP.NET', 'C#', 'Entity Framework', 'Windows Services'],
    repoUrl: null,
    liveUrl: 'https://yieldwerx.com',
    featured: true,
  },
  {
    id: 5,
    title: 'This Portfolio',
    description:
      'A full-stack portfolio: React + TypeScript + MUI frontend on GitHub Pages, with a companion .NET Core + EF Core Web API (in the repo) that serves this same content.',
    tags: ['React', 'TypeScript', '.NET', 'EF Core', 'MUI'],
    repoUrl: 'https://github.com/Ahmadzia307/portfolio',
    liveUrl: 'https://ahmadzia307.github.io/portfolio/',
    featured: true,
  },
];

export const BLOG_POSTS: BlogPostSummary[] = [
  {
    id: 1,
    title: 'Migrating a Large React App from MUI v4 to v7',
    slug: 'mui-v4-to-v7-migration',
    summary:
      'Lessons from upgrading a production React codebase across four major Material UI versions without breaking the UI.',
    publishedAt: '2026-02-02T00:00:00',
  },
  {
    id: 2,
    title: 'Building Facebook & Instagram Integrations into a CRM',
    slug: 'crm-social-integrations',
    summary:
      'How we let dealers engage customers directly from the CRM using OAuth 2.0, Messenger, Instagram, and speech-to-text input.',
    publishedAt: '2026-01-15T00:00:00',
  },
];
