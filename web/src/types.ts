export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  repoUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
}

export interface BlogPostSummary {
  id: number;
  title: string;
  slug: string;
  summary: string;
  publishedAt: string;
}

export interface BlogPost extends BlogPostSummary {
  content: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export interface AnalyticsSummary {
  totalVisits: number;
  uniquePaths: number;
  topPaths: { path: string; count: number }[];
}
