using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioApi.Data;
using PortfolioApi.Dtos;

namespace PortfolioApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BlogController : ControllerBase
{
    private readonly PortfolioContext _db;

    public BlogController(PortfolioContext db) => _db = db;

    /// <summary>List published posts (summaries only), newest first.</summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<BlogPostSummaryDto>>> GetAll()
    {
        var posts = await _db.BlogPosts
            .Where(p => p.Published)
            .OrderByDescending(p => p.PublishedAt)
            .Select(p => new BlogPostSummaryDto(p.Id, p.Title, p.Slug, p.Summary, p.PublishedAt))
            .ToListAsync();

        return Ok(posts);
    }

    /// <summary>Get a full post by its slug.</summary>
    [HttpGet("{slug}")]
    public async Task<ActionResult<BlogPostDto>> GetBySlug(string slug)
    {
        var post = await _db.BlogPosts
            .FirstOrDefaultAsync(p => p.Slug == slug && p.Published);

        return post is null
            ? NotFound()
            : Ok(new BlogPostDto(post.Id, post.Title, post.Slug, post.Summary, post.Content, post.PublishedAt));
    }
}
