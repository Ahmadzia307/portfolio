using Microsoft.EntityFrameworkCore;
using PortfolioApi.Data;

var builder = WebApplication.CreateBuilder(args);

// --- Database (SQLite) ---
var connectionString = builder.Configuration.GetConnectionString("Default")
    ?? "Data Source=portfolio.db";
builder.Services.AddDbContext<PortfolioContext>(options =>
    options.UseSqlite(connectionString));

// --- CORS: allow the React frontend to call this API ---
// Origins come from config ("Cors:AllowedOrigins") so you set your GitHub Pages
// URL in Azure without recompiling.
var allowedOrigins = builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>()
    ?? new[] { "http://localhost:5173" };

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
        policy.WithOrigins(allowedOrigins)
              .AllowAnyHeader()
              .AllowAnyMethod());
});

builder.Services.AddControllers();

// --- Swagger / OpenAPI ---
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new() { Title = "Portfolio API", Version = "v1" });
});

var app = builder.Build();

// Create the database and apply seed data on startup.
// (For SQLite + seeding this is fine; switch to migrations for Azure SQL.)
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<PortfolioContext>();
    db.Database.EnsureCreated();
}

// Swagger UI is enabled in all environments so the deployed API is browsable.
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Portfolio API v1");
    c.RoutePrefix = "swagger";
});

app.UseCors();

app.MapControllers();

// Simple health check for uptime monitors / deploy verification.
app.MapGet("/health", () => Results.Ok(new { status = "healthy" }));

app.Run();
