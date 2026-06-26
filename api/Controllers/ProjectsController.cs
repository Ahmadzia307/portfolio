using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioApi.Data;
using PortfolioApi.Dtos;

namespace PortfolioApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    private readonly PortfolioContext _db;

    public ProjectsController(PortfolioContext db) => _db = db;

    /// <summary>Get all projects, ordered for display.</summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProjectDto>>> GetAll([FromQuery] bool featuredOnly = false)
    {
        var query = _db.Projects.AsQueryable();
        if (featuredOnly)
            query = query.Where(p => p.Featured);

        var projects = await query
            .OrderBy(p => p.SortOrder)
            .ToListAsync();

        return Ok(projects.Select(ToDto));
    }

    /// <summary>Get a single project by id.</summary>
    [HttpGet("{id:int}")]
    public async Task<ActionResult<ProjectDto>> GetById(int id)
    {
        var project = await _db.Projects.FindAsync(id);
        return project is null ? NotFound() : Ok(ToDto(project));
    }

    private static ProjectDto ToDto(Models.Project p) => new(
        p.Id,
        p.Title,
        p.Description,
        p.Tags.Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries),
        p.RepoUrl,
        p.LiveUrl,
        p.Featured);
}
