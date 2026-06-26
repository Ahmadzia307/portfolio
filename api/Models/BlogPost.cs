using System.ComponentModel.DataAnnotations;

namespace PortfolioApi.Models;

public class BlogPost
{
    public int Id { get; set; }

    [Required, MaxLength(160)]
    public string Title { get; set; } = string.Empty;

    /// <summary>URL-friendly identifier, e.g. "deploying-dotnet-free".</summary>
    [Required, MaxLength(180)]
    public string Slug { get; set; } = string.Empty;

    [Required, MaxLength(300)]
    public string Summary { get; set; } = string.Empty;

    [Required]
    public string Content { get; set; } = string.Empty;

    public DateTime PublishedAt { get; set; }

    public bool Published { get; set; } = true;
}
