# AniHub

A SvelteKit web page that integrates your MyAnimeList entries with your GitHub repositories.

## Features

### Anime Section
- Displays your current MyAnimeList entries
- Shows status, episode count, and your rating
- Smooth horizontal scrolling interface

### GitHub Section
- Displays your GitHub repositories
- Shows description, language, stars, and last update
- Option to hide specific repositories

### Profile Features
- Customizable profile with photo and bio
- Dynamic social media links

## Technology Stack

- SvelteKit 2.x (with Svelte 5)
- Vite
- PNPM package manager
- APIs:
  - MyAnimeList (Unofficial)
  - GitHub

## Configuration

The application is configured through `src/config.yaml`. Configurable options include:
- Profile information
- Social media links
- MyAnimeList username
- GitHub username
- Theme preferences
- Repository and anime filters

## Development

1. Install dependencies:
```bash
pnpm install
```

2. Configure the application:
- Update `src/config.yaml` with your information

3. Start development server:
```bash
pnpm dev
```

## Building

To create a production build:

```bash
pnpm build
```

To preview the build:

```bash
pnpm preview
```

## Environment Variables

Optional environment variables:

- `GITHUB_TOKEN`: Your GitHub token for more requests


## License

MIT License
