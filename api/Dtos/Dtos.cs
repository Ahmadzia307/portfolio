using System.ComponentModel.DataAnnotations;

namespace PortfolioApi.Dtos;

/// <summary>Shape returned to the frontend for a project (tags split into an array).</summary>
public record ProjectDto(
    int Id,
    string Title,
    string Description,
    string[] Tags,
    string? RepoUrl,
    string? LiveUrl,
    bool Featured);

public record BlogPostDto(
    int Id,
    string Title,
    string Slug,
    string Summary,
    string Content,
    DateTime PublishedAt);

public record BlogPostSummaryDto(
    int Id,
    string Title,
    string Slug,
    string Summary,
    DateTime PublishedAt);

/// <summary>Payload accepted by the contact form.</summary>
public class ContactRequest
{
    [Required, MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    [Required, EmailAddress, MaxLength(200)]
    public string Email { get; set; } = string.Empty;

    [Required, MaxLength(2000)]
    public string Message { get; set; } = string.Empty;
}

public class VisitRequest
{
    [Required, MaxLength(200)]
    public string Path { get; set; } = "/";

    [MaxLength(300)]
    public string? Referrer { get; set; }
}

public record AnalyticsSummaryDto(
    int TotalVisits,
    int UniquePaths,
    IEnumerable<PathCountDto> TopPaths);

public record PathCountDto(string Path, int Count);
