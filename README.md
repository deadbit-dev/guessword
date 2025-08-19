# GuessWord Game

A Phaser game project with TypeScript, now using Bun as package manager.

## Prerequisites

- [Bun](https://bun.sh/) - Fast JavaScript runtime and package manager
- Node.js (for webpack compatibility)

## Installation

```bash
# Install dependencies using Bun
bun install
```

## Development

```bash
# Start development server
bun run dev

# Start development server and open browser
bun run start
```

## Building

```bash
# Build for production
bun run build

# Clean build directory
bun run clean
```

## Available Scripts

- `bun run install` - Install dependencies
- `bun run dev` - Start development server
- `bun run start` - Start development server and open browser
- `bun run build` - Build for production
- `bun run clean` - Clean build directory

## Project Structure

```
src/
├── assets/          # Game assets (images, sounds)
├── scenes/          # Phaser game scenes
├── config.ts        # Game configuration
├── index.ts         # Main entry point
├── network.ts       # Network communication
└── protocol.ts      # Game protocol definitions
```

## Technologies

- **Phaser 3** - HTML5 game framework
- **TypeScript** - Type-safe JavaScript
- **Webpack** - Module bundler
- **Bun** - Package manager and runtime
