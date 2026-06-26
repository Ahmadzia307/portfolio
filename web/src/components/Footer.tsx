import { useEffect, useState } from 'react';
import { api } from '../api';
import type { AnalyticsSummary } from '../types';

export default function Footer() {
  const [stats, setStats] = useState<AnalyticsSummary | null>(null);

  useEffect(() => {
    api.getAnalytics().then(setStats).catch(() => setStats(null));
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        {stats && (
          <div className="stats">
            <div className="stat">
              <div className="stat__num">{stats.totalVisits}</div>
              <div className="stat__label">page views</div>
            </div>
            <div className="stat">
              <div className="stat__num">{stats.uniquePaths}</div>
              <div className="stat__label">pages tracked</div>
            </div>
          </div>
        )}
        <p style={{ marginTop: 20 }}>Designed &amp; built by Muhammad Ahmad</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
