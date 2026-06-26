using Microsoft.EntityFrameworkCore;
using PortfolioApi.Models;

namespace PortfolioApi.Data;

public class PortfolioContext : DbContext
{
    public PortfolioContext(DbContextOptions<PortfolioContext> options) : base(options) { }

    public DbSet<Project> Projects => Set<Project>();
    public DbSet<BlogPost> BlogPosts => Set<BlogPost>();
    public DbSet<ContactMessage> ContactMessages => Set<ContactMessage>();
    public DbSet<PageVisit> PageVisits => Set<PageVisit>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<BlogPost>()
            .HasIndex(b => b.Slug)
            .IsUnique();

        // Static seed data so the portfolio shows content on first run.
        // Dates are fixed (not DateTime.Now) because EF seed values must be deterministic.
        modelBuilder.Entity<Project>().HasData(
            new Project
            {
                Id = 1,
                Title = "CPQ Pricing Engine",
                Description = "A configurable Configure-Price-Quote engine that calculates complex pricing with fees, attachments, and MSRP handling for an enterprise CRM.",
                Tags = "C#,.NET,SQL Server",
                RepoUrl = "https://github.com/",
                LiveUrl = null,
                SortOrder = 1,
                Featured = true
            },
            new Project
            {
                Id = 2,
                Title = "DMS OAuth Integration",
                Description = "Secure OAuth 2.0 integration connecting a CRM platform with external dealer management systems, handling token exchange and refresh flows.",
                Tags = "Node.js,OAuth 2.0,REST",
                RepoUrl = "https://github.com/",
                LiveUrl = null,
                SortOrder = 2,
                Featured = true
            },
            new Project
            {
                Id = 3,
                Title = "This Portfolio",
                Description = "A full-stack portfolio: React + TypeScript frontend on GitHub Pages, .NET Core Web API with EF Core on Azure App Service.",
                Tags = "React,TypeScript,.NET,EF Core",
                RepoUrl = "https://github.com/",
                LiveUrl = null,
                SortOrder = 3,
                Featured = true
            }
        );

        modelBuilder.Entity<BlogPost>().HasData(
            new BlogPost
            {
                Id = 1,
                Title = "Deploying a .NET API for Free",
                Slug = "deploying-dotnet-api-free",
                Summary = "How I hosted this portfolio's backend on Azure App Service's free tier with zero cost.",
                Content = "Full post content goes here. Edit this in the database or via the API.",
                PublishedAt = new DateTime(2026, 1, 15, 0, 0, 0, DateTimeKind.Utc),
                Published = true
            },
            new BlogPost
            {
                Id = 2,
                Title = "Why I Built My Portfolio Full-Stack",
                Slug = "portfolio-full-stack",
                Summary = "Serving content from a real API instead of hardcoded HTML — and what it taught me.",
                Content = "Full post content goes here. Edit this in the database or via the API.",
                PublishedAt = new DateTime(2026, 2, 2, 0, 0, 0, DateTimeKind.Utc),
                Published = true
            }
        );
    }
}
