using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioApi.Data;
using PortfolioApi.Dtos;
using PortfolioApi.Models;

namespace PortfolioApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AnalyticsController : ControllerBase
{
    private readonly PortfolioContext _db;

    public AnalyticsController(PortfolioContext db) => _db = db;

    /// <summary>Record a page view. Called by the frontend on navigation.</summary>
    [HttpPost("visit")]
    public async Task<IActionResult> Record([FromBody] VisitRequest request)
    {
        if (!ModelState.IsValid)
            return ValidationProblem(ModelState);

        _db.PageVisits.Add(new PageVisit
        {
            Path = request.Path,
            Referrer = request.Referrer,
            VisitedAt = DateTime.UtcNow
        });
        await _db.SaveChangesAsync();

        return Accepted();
    }

    /// <summary>Aggregated visit stats — total, unique paths, and the most-visited pages.</summary>
    [HttpGet("summary")]
    public async Task<ActionResult<AnalyticsSummaryDto>> Summary()
    {
        var total = await _db.PageVisits.CountAsync();

        // Project to an anonymous type EF can translate, then map to the DTO in memory.
        var grouped = await _db.PageVisits
            .GroupBy(v => v.Path)
            .Select(g => new { Path = g.Key, Count = g.Count() })
            .OrderByDescending(p => p.Count)
            .Take(5)
            .ToListAsync();

        var topPaths = grouped.Select(g => new PathCountDto(g.Path, g.Count)).ToList();

        return Ok(new AnalyticsSummaryDto(total, topPaths.Count, topPaths));
    }
}
