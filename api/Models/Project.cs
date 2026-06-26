using System.ComponentModel.DataAnnotations;

namespace PortfolioApi.Models;

public class Project
{
    public int Id { get; set; }

    [Required, MaxLength(120)]
    public string Title { get; set; } = string.Empty;

    [Required, MaxLength(1000)]
    public string Description { get; set; } = string.Empty;

    /// <summary>Comma-separated tech tags, e.g. "React,TypeScript,Vite".</summary>
    [MaxLength(300)]
    public string Tags { get; set; } = string.Empty;

    [MaxLength(500)]
    public string? RepoUrl { get; set; }

    [MaxLength(500)]
    public string? LiveUrl { get; set; }

    /// <summary>Lower numbers appear first.</summary>
    public int SortOrder { get; set; }

    public bool Featured { get; set; }
}
