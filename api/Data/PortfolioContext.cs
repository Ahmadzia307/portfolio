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
                Title = "TargetCRM",
                Description = "Enterprise CRM for outdoor power equipment dealers across the USA & Canada. Built Facebook Messenger & Instagram integrations with OAuth 2.0 and speech-to-text, and tuned database performance across core modules.",
                Tags = ".NET Core,React,Azure Functions,Azure SQL,OAuth 2.0",
                RepoUrl = null,
                LiveUrl = "https://learntargetcrm.com",
                SortOrder = 1,
                Featured = true
            },
            new Project
            {
                Id = 2,
                Title = "Virtual Academy",
                Description = "Public-safety and law-enforcement training platform for US clients. Led a team of 4+ engineers building scalable .NET 6 Web APIs and Angular interfaces with AWS (S3, EC2, SES) integrations.",
                Tags = ".NET 6,Angular,AWS,Web API,SQL Server",
                RepoUrl = null,
                LiveUrl = "https://virtualacademy.com",
                SortOrder = 2,
                Featured = true
            },
            new Project
            {
                Id = 3,
                Title = "Artvisor",
                Description = "Artwork and exhibition management platform. Owned solution design, architecture, and project planning, translating business needs into scalable technical solutions.",
                Tags = "C#,ASP.NET Core,SQL Server,AWS",
                RepoUrl = null,
                LiveUrl = "https://artvisor.com",
                SortOrder = 3,
                Featured = true
            },
            new Project
            {
                Id = 4,
                Title = "YieldWerx",
                Description = "Semiconductor yield-analysis and reporting platform. Built REST APIs, Windows Services, and reporting solutions, collaborating with global teams to ship production-ready features.",
                Tags = "ASP.NET,C#,Entity Framework,Windows Services",
                RepoUrl = null,
                LiveUrl = "https://yieldwerx.com",
                SortOrder = 4,
                Featured = true
            },
            new Project
            {
                Id = 5,
                Title = "This Portfolio",
                Description = "A full-stack portfolio: React + TypeScript + MUI frontend on GitHub Pages, .NET Core Web API with EF Core on Azure App Service.",
                Tags = "React,TypeScript,.NET,EF Core,MUI",
                RepoUrl = "https://github.com/Ahmadzia307/portfolio",
                LiveUrl = "https://ahmadzia307.github.io/portfolio/",
                SortOrder = 5,
                Featured = true
            }
        );

        modelBuilder.Entity<BlogPost>().HasData(
            new BlogPost
            {
                Id = 1,
                Title = "Migrating a Large React App from MUI v4 to v7",
                Slug = "mui-v4-to-v7-migration",
                Summary = "Lessons from upgrading a production React codebase across four major Material UI versions without breaking the UI.",
                Content = "Full post content goes here. Edit this in the database or via the API.",
                PublishedAt = new DateTime(2026, 1, 15, 0, 0, 0, DateTimeKind.Utc),
                Published = true
            },
            new BlogPost
            {
                Id = 2,
                Title = "A Zero-Downtime UserID Migration (int → varchar)",
                Slug = "zero-downtime-userid-migration",
                Summary = "How we re-architected a CRM's identity model across schema, backend, and frontend to enable DMS integration — with no production disruption.",
                Content = "Full post content goes here. Edit this in the database or via the API.",
                PublishedAt = new DateTime(2026, 2, 2, 0, 0, 0, DateTimeKind.Utc),
                Published = true
            }
        );
    }
}
