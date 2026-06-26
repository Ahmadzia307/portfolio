using Microsoft.AspNetCore.Mvc;
using PortfolioApi.Data;
using PortfolioApi.Dtos;
using PortfolioApi.Models;

namespace PortfolioApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly PortfolioContext _db;
    private readonly ILogger<ContactController> _logger;

    public ContactController(PortfolioContext db, ILogger<ContactController> logger)
    {
        _db = db;
        _logger = logger;
    }

    /// <summary>Accept a contact-form submission and store it.</summary>
    [HttpPost]
    public async Task<IActionResult> Submit([FromBody] ContactRequest request)
    {
        if (!ModelState.IsValid)
            return ValidationProblem(ModelState);

        var message = new ContactMessage
        {
            Name = request.Name.Trim(),
            Email = request.Email.Trim(),
            Message = request.Message.Trim(),
            CreatedAt = DateTime.UtcNow,
            IsRead = false
        };

        _db.ContactMessages.Add(message);
        await _db.SaveChangesAsync();

        // In production you'd also send yourself an email here (e.g. SendGrid).
        _logger.LogInformation("New contact message #{Id} from {Email}", message.Id, message.Email);

        return Ok(new { message = "Thanks! Your message has been received." });
    }
}
