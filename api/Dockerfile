# --- Build stage ---
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

# Restore first (layer-cached unless the csproj changes).
COPY PortfolioApi.csproj .
RUN dotnet restore

# Build & publish.
COPY . .
RUN dotnet publish -c Release -o /app /p:UseAppHost=false

# --- Runtime stage ---
FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app
COPY --from=build /app .

# Listen on 8000 (Koyeb's default port). The app also honors a PORT env var
# if the platform injects one (see Program.cs), so this works on any host.
ENV ASPNETCORE_URLS=http://0.0.0.0:8000
EXPOSE 8000

ENTRYPOINT ["dotnet", "PortfolioApi.dll"]
