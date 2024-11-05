# Taro Contact

This is a simple contact application built with Taro and Next.js.

## Getting Started

To get started, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/auronsan/taro-contact.git
   ```

2. Copy .env.example to .env and adjust the NEXT_PUBLIC_API_BASE_URL variable to point to your API server.

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm dev
   ```

## npm scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts
- `test-storybook` - runs snapshot test
- `test-e2e` - runs e2e test with playwright

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
