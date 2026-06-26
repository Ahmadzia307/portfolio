# Muhammad Ahmad — Full-Stack Portfolio

A full-stack portfolio website:

- **`web/`** — React + TypeScript (Vite) frontend → deploys to **GitHub Pages** (free)
- **`api/`** — .NET 10 Web API + EF Core + SQLite → deploys to **Azure App Service** (free F1 tier)

The frontend fetches projects, blog posts, and visit stats from the API, and
posts contact-form messages back to it.

```
┌──────────────────────────┐      ┌───────────────────────────┐
│  React + TS (web/)        │ CORS │  .NET Web API (api/)       │
│  GitHub Pages             │ ───► │  Azure App Service (F1)    │
└──────────────────────────┘      └─────────────┬─────────────┘
                                                 │  EF Core
                                          ┌──────▼───────┐
                                          │  SQLite       │
                                          └──────────────┘
```

## API endpoints

| Method | Route | Purpose |
|--------|-------|---------|
| GET  | `/api/projects` (`?featuredOnly=true`) | List projects |
| GET  | `/api/projects/{id}` | Single project |
| GET  | `/api/blog` | Published post summaries |
| GET  | `/api/blog/{slug}` | Full post by slug |
| POST | `/api/contact` | Submit a contact message |
| POST | `/api/analytics/visit` | Record a page view |
| GET  | `/api/analytics/summary` | Aggregated visit stats |
| GET  | `/health` | Health check |
| GET  | `/swagger` | Interactive API docs |

---

## Run locally

You need **.NET 10 SDK** and **Node 20+**.

**1. Start the API** (terminal 1):

```powershell
cd api
dotnet run
```

The database (`portfolio.db`) is created and seeded automatically on first run.
API runs at `http://localhost:5127` — browse `http://localhost:5127/swagger`.

**2. Start the frontend** (terminal 2):

```powershell
cd web
npm install
npm run dev
```

Visit `http://localhost:5173`. The frontend reads the API URL from
`web/.env.development`.

---

## Deploy the frontend → GitHub Pages (free)

A workflow is already included at `.github/workflows/deploy-frontend.yml`.

1. Push this repo to GitHub.
2. In the repo: **Settings → Pages → Source = GitHub Actions**.
3. In **Settings → Secrets and variables → Actions → Variables**, add a
   repository **variable** named `VITE_API_BASE_URL` set to your deployed API
   URL (e.g. `https://my-portfolio-api.azurewebsites.net`).
4. Push to `main`. The action builds `web/` and publishes it.

Your site will be at `https://YOUR_USERNAME.github.io/YOUR_REPO/`.

> The workflow sets `VITE_BASE` to `/REPO/` automatically so asset paths resolve
> correctly on a project page. If you use a custom domain or a `USER.github.io`
> repo, set `VITE_BASE=/`.

---

## Deploy the API → Azure App Service (free F1)

Install the Azure CLI, then:

```powershell
cd api
az login

# Create a free-tier app and deploy in one step (pick a globally-unique name):
az webapp up `
  --name my-portfolio-api `
  --runtime "DOTNETCORE:10.0" `
  --sku F1 `
  --location eastus
```

Then point the API at your frontend so CORS allows it. In the Azure Portal
(**Configuration → Application settings**) add:

| Name | Value |
|------|-------|
| `Cors__AllowedOrigins__0` | `https://YOUR_USERNAME.github.io` |

(Double underscores map to nested config keys.) Save and restart.

Verify: open `https://my-portfolio-api.azurewebsites.net/swagger`.

### Notes on the free tier
- **F1** is free but has a daily CPU quota and no custom domain / "always on" —
  fine for portfolio traffic, expect an occasional cold start.
- SQLite lives on the app's local disk. It resets if the app is redeployed from
  scratch; seed data is re-created on startup, so the site always has content.
- To use a real cloud database later, switch the connection string to the
  **Azure SQL free tier** and run EF Core migrations — the code doesn't change.

---

## Customize

| What | Where |
|------|-------|
| Hero text, name, socials | `web/src/components/Hero.tsx` |
| Bio, photo, tech list | `web/src/components/About.tsx` |
| Skills | `web/src/components/Skills.tsx` |
| Experience timeline | `web/src/components/Experience.tsx` |
| Projects & blog **content** | seeded in `api/Data/PortfolioContext.cs` (edit and delete `portfolio.db` to re-seed) |
| Colors / theme | `web/src/index.css` (`:root` and `[data-theme='light']`) |
