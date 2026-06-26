using System.ComponentModel.DataAnnotations;

namespace PortfolioApi.Models;

/// <summary>One row per recorded page view — powers the simple analytics endpoint.</summary>
public class PageVisit
{
    public int Id { get; set; }

    [Required, MaxLength(200)]
    public string Path { get; set; } = "/";

    [MaxLength(300)]
    public string? Referrer { get; set; }

    public DateTime VisitedAt { get; set; }
}
