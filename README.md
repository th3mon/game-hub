# Game Hub

Game Hub is a responsive web application for browsing video games. It uses the [RAWG Video Games Database API](https://rawg.io/apidocs) and lets users search for games, filter results by genre and platform, and sort games by popularity, rating, release date, and other criteria.

## Features

- Search games by title
- Filter games by genre
- Filter games by platform
- Sort results by multiple criteria
- Game cards with cover image, platform icons, Metacritic score, and rating emoji
- Light and dark mode
- Responsive layout for desktop and smaller screens
- Loading states handled with `Suspense` and card skeletons
- Cached game queries

## Tech Stack

- React 19
- TypeScript
- Vite
- Chakra UI
- Axios
- React Icons
- RAWG API

## Requirements

- Node.js
- npm
- RAWG API key: https://rawg.io/apidocs

## Local Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file from the template:

   ```bash
   cp .env.template .env
   ```

3. Add your RAWG API key:

   ```env
   RAWG_API=your_api_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the URL shown by Vite, usually:

   ```text
   http://localhost:5173
   ```

## Available Scripts

```bash
npm run dev      # starts the development server
npm run build    # runs TypeScript checks and builds the app into dist
npm run preview  # previews the production build locally
npm run lint     # runs ESLint
```

## Project Structure

```text
src/
├── assets/          # static images and UI assets
├── components/      # UI components
│   └── ui/          # Chakra UI helper components
├── data/            # local genre and platform data
├── hooks/           # data-fetching hooks
├── services/        # API configuration and utilities
├── App.tsx          # main layout and filter state
└── main.tsx         # application entry point
```

## API

The app communicates with RAWG through an Axios client configured in `src/services/api-client.ts`. The API key is injected by Vite from the `RAWG_API` value defined in `.env`.

## Development Notes

- Genres and platforms are currently loaded from local files in `src/data`.
- The game list is fetched from the RAWG `/games` endpoint.
- Game results are cached by genre, platform, sort order, and search text.
- The production build is generated in the `dist/` directory.
