# Growth Up - Habit Tracker

**[🚀 Live Demo](https://high-performance-fro-x09y.bolt.host)**

A modern, responsive landing page for Growth Up, a habit tracking application focused on the neuroscience of happiness. Built with cutting-edge web technologies for optimal performance and user experience.

## Technology Stack

### Core Framework
- **React 18.3.1** - Modern UI library with concurrent features
- **TypeScript 5.5.3** - Type-safe development experience
- **Vite 5.4.2** - Next-generation frontend tooling for blazing fast development

### Styling
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS transformation and optimization
- **Autoprefixer 10.4.18** - Automatic vendor prefixing

### UI Components
- **Lucide React 0.344.0** - Beautiful, consistent icon library

### Backend & Database
- **Supabase 2.57.4** - Open-source Firebase alternative for authentication and database

### Code Quality
- **ESLint 9.9.1** - Code linting and quality enforcement
- **TypeScript ESLint 8.3.0** - TypeScript-specific linting rules

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx     # Hero section with animated decorations
│   ├── ProductSection.tsx  # Product showcase
│   ├── HabitsSection.tsx   # Habits overview
│   ├── FeaturesSection.tsx # Feature highlights
│   ├── StatsSection.tsx    # Statistics display
│   ├── CTASection.tsx      # Call-to-action section
│   └── Footer.tsx          # Site footer
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## Features

- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- **Modern UI/UX** - Clean, sophisticated design with smooth animations
- **Component-Based Architecture** - Modular and maintainable code structure
- **Type Safety** - Full TypeScript implementation
- **Performance Optimized** - Fast loading and rendering with Vite
- **Production Ready** - Optimized build process with code splitting

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd project
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file with your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Code Quality

Run linting:
```bash
npm run lint
```

Run type checking:
```bash
npm run typecheck
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size with code splitting
- Fast refresh during development
- Lazy loading of components where applicable
- Optimized asset delivery

## License

This project is private and proprietary.
