# Overview

ProLanding is a professional landing page creation service specifically designed for agencies in the French market. The application is a modern full-stack web solution that provides white-label landing page services with 24-hour delivery promises. The platform features a French interface with a focus on agency partnerships, white-label branding, and attractive margins for agencies wanting to offer landing page services to their clients without technical development costs.

## Recent Changes (Aug 2, 2025)
- **Complete copywriting transformation**: Shifted from agency focus back to direct client sales at 499€
- **Scalence.co inspiration**: Adopted problem-solution copywriting approach inspired by Scalence.co
- **Hero section updated**: New tagline "Livrée en 24h" under main title, powerful question-based subtitle
- **Benefits section**: Problems/solutions modeled after Scalence's approach to selling complexity
- **Process section**: 4-step process inspired by Scalence's methodology
- **Pricing restored**: Back to 499€ pricing for direct client sales
- **Contact form**: "Formulaires intelligents" corrected to "Formulaires de contact" for honesty

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with **React 18** and **TypeScript**, utilizing a modern component-based architecture. The application uses **Vite** as the build tool for fast development and optimized production builds. The UI is constructed with **shadcn/ui** components built on top of **Radix UI** primitives, providing accessible and customizable interface elements.

**Styling**: The application uses **Tailwind CSS** with a custom design system featuring CSS variables for theming. The design implements a professional gradient-based color scheme with purple/violet accents and supports both light and dark modes.

**Routing**: Client-side routing is handled by **Wouter**, a lightweight routing library that provides simple navigation between pages.

**Animations**: **Framer Motion** is integrated for smooth animations and transitions throughout the user interface.

## Backend Architecture
The server is built with **Express.js** and TypeScript, following a RESTful API pattern. The architecture separates concerns with dedicated modules for routing, storage, and server configuration.

**API Structure**: The backend exposes contact management endpoints (`/api/contacts`) for creating and retrieving contact submissions. Form validation is handled using **Zod** schemas to ensure data integrity.

**Storage Layer**: Currently implements an in-memory storage solution (`MemStorage`) with an interface-based design that allows for easy migration to persistent database solutions.

## Data Management
**State Management**: The application uses **TanStack Query (React Query)** for server state management, providing caching, synchronization, and optimistic updates for API interactions.

**Form Handling**: Forms are managed with **React Hook Form** combined with Zod resolvers for robust validation and type safety.

**Database Schema**: Prepared for PostgreSQL integration with Drizzle ORM, featuring a contacts table schema with fields for name, email, phone, company, message, contact type, and timestamps.

## Development and Build Process
**Development**: The application supports hot module replacement in development with integrated error handling through Replit-specific plugins.

**Build Process**: Production builds are created using Vite for the frontend and esbuild for the backend, with separate output directories for optimized deployment.

**Deployment Configuration**: 
- **Issue Resolved (Aug 2, 2025)**: Fixed deployment structure where Vite was outputting to `dist/public/` but static deployment required files at `dist/` root level
- **Solution Implemented**: Created deployment preparation scripts that automatically move files from `dist/public/` to `dist/` after build
- **Build Scripts Available**: 
  - `node scripts/build-deploy.js` - Node.js script for deployment preparation (WORKING SOLUTION)
  - `scripts/prepare-deployment.sh` - Alternative bash script with rsync
- **Deployment Workflow**:
  1. Run `npm run build` (builds to dist/public/)
  2. Run `node scripts/build-deploy.js` (moves files to dist/ root)
  3. Deploy using Replit's deploy button
- **Current Structure**: Build correctly outputs `index.html` at `dist/index.html` with assets in `dist/assets/` as required for static deployment
- **Status**: ✅ READY FOR DEPLOYMENT - All files correctly positioned for static deployment

**Type Safety**: Comprehensive TypeScript configuration ensures type safety across the entire application with shared types between frontend and backend.

# External Dependencies

## Core Frameworks
- **React 18**: Frontend framework with modern hooks and concurrent features
- **Express.js**: Backend web framework for Node.js
- **TypeScript**: Type safety across the entire application stack

## UI and Styling
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Low-level UI primitives for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Framer Motion**: Animation library for smooth transitions and interactions

## Database and ORM
- **Drizzle ORM**: Type-safe ORM configured for PostgreSQL
- **Neon Database**: Serverless PostgreSQL provider (configured but not yet implemented)
- **Zod**: Schema validation for API endpoints and form validation

## Development Tools
- **Vite**: Build tool and development server with HMR support
- **esbuild**: Fast JavaScript bundler for production builds
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **Wouter**: Lightweight client-side routing

## Third-party Services
- **Replit Integration**: Development environment with custom plugins and error handling
- **Font Integration**: Google Fonts (Inter) for typography
- **Email Integration**: Basic mailto functionality for contact handling (can be extended with email services)

## Communication Channels
- **WhatsApp Integration**: Direct messaging capability for instant customer contact
- **Email Contact**: Traditional email contact methods for lead generation

The architecture is designed to be scalable and maintainable, with clear separation of concerns and modern development practices throughout the stack.