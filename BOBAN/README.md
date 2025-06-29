# BOBAN - Next.js PWA

A modern Next.js application with Progressive Web App capabilities, Tailwind CSS styling, and Vite integration.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 📱 **PWA Support** with offline capabilities
- 🚀 **Vite Integration** for enhanced development
- 📝 **TypeScript** for type safety
- 🔧 **ESLint** for code quality

## Getting Started

### Prerequisites

Make sure you have Node.js (version 18 or higher) installed on your machine.

### Installation

1. Navigate to the project directory:

   ```bash
   cd BOBAN
   ```

2. Install dependencies using one of these methods:

   **Option A: Automatic installation (Windows)**

   ```bash
   install.bat
   ```

   **Option B: Automatic installation (Linux/macOS)**

   ```bash
   chmod +x install.sh
   ./install.sh
   ```

   **Option C: Manual installation**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

   **Note:** If you encounter npm errors, try:

   - Clearing npm cache: `npm cache clean --force`
   - Using yarn instead: `npm install -g yarn && yarn install`
   - Updating npm: `npm install -g npm@latest`

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Starting Production Server

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## PWA Features

This application includes:

- **Service Worker** for offline functionality
- **Web App Manifest** for installability
- **Responsive Design** that works on all devices
- **Offline Support** for core functionality

## Project Structure

```
BOBAN/
├── public/
│   ├── manifest.json
│   ├── favicon.svg
│   └── icons/
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [next-pwa](https://github.com/shadowwalker/next-pwa) - PWA plugin for Next.js
- [Vite](https://vitejs.dev/) - Build tool integration

## Troubleshooting

### Common Issues

1. **npm installation fails**

   - Try clearing npm cache: `npm cache clean --force`
   - Update npm: `npm install -g npm@latest`
   - Use yarn instead: `npm install -g yarn && yarn install`

2. **Port 3000 already in use**

   - Use a different port: `npm run dev -- -p 3001`
   - Or kill the process using port 3000

3. **TypeScript errors**

   - Run type check: `npm run type-check`
   - Restart your IDE/editor

4. **PWA not working in development**
   - PWA features are disabled in development mode by default
   - Test PWA features in production build: `npm run build && npm run start`

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Turbopack Documentation](https://turbo.build/pack/docs)

## License

This project is open source and available under the [MIT License](LICENSE).
