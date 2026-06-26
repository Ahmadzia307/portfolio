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

# Render sets PORT (default 10000); the app reads it in Program.cs.
# This default keeps the image runnable locally too.
ENV ASPNETCORE_URLS=http://0.0.0.0:10000
EXPOSE 10000

ENTRYPOINT ["dotnet", "PortfolioApi.dll"]
