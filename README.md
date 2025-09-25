# 🌍 REST Countries API - Interview Task

A modern, responsive web application built with **Nuxt 4** that allows users to explore countries around the world. This project was developed as part of an interview task, featuring country browsing, detailed country information, search and filtering capabilities, and a beautiful dark/light theme toggle.

## 🚀 Live Demo

**[View Live Demo](https://countries-app-interview-task-c7smihmnh.vercel.app/)**

![Countries App](https://img.shields.io/badge/Nuxt-4-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)
![Vue](https://img.shields.io/badge/Vue-3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 📋 Interview Task Requirements

### ✅ Core Requirements Implemented

- **✅ Vue 3 with TypeScript**: Built using Vue 3 Composition API with full TypeScript support
- **✅ REST Countries V2 API Integration**: Fetches country data from the official API
- **✅ Homepage with All Countries**: Displays all countries from the API
- **✅ Search Functionality**: Real-time search by country name
- **✅ Region Filtering**: Filter countries by geographical regions
- **✅ Client-side Routing**: Dynamic country detail pages with navigation
- **❌ Border Country Navigation**: Click on border countries to navigate to their details (Because Borders are abbreviation of countries and we couldn't find country from border key)

### 🎯 Bonus Features Implemented

- **✅ Dark/Light Mode Toggle**: Custom theme switcher without 3rd party libraries
- **❌ Smart Search**: Handles typos (e.g., "Grmany" or "Grmny" finds "Germany")
- **✅ Sort Functionality**: Sort by Population and Country Name
- **✅ Server-Side Rendering**: Full SSR with error fallbacks
- **✅ Optimized Flag Ratios**: Country flags maintain proper 4:3 aspect ratio
- **✅ URL Query Synchronization**: All filters persist in URL and sync with components
- **❌ Lazy Loading**: Images and country list with lazy loading for performance

## ✨ Key Features

### 🔍 **Advanced Search & Filtering**

- **Real-time Search**: Search countries by name with instant results

- **Region Filtering**: Filter countries by geographical regions (Africa, Americas, Asia, Europe, Oceania)
- **Smart Sorting**: Sort by country name (alphabetical) or population (descending)
- **URL Synchronization**: All filters persist in URL and work after page refresh

### 🌙 **Theme System**

- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Persistent Theme**: Theme preference saved in localStorage
- **System Theme Detection**: Automatically detects user's system preference
- **No 3rd Party Libraries**: Custom implementation using CSS custom properties

### 📱 **Responsive Design**

- **Mobile-First**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Grid Layouts**: Responsive country cards that adapt to screen size
- **Touch-Friendly**: Large touch targets and smooth interactions
- **Modern UI**: Clean, minimalist design matching the provided designs

### 🗺️ **Country Information**

- **Comprehensive Details**: Population, region, capital, currencies, languages, native names
- **Flag Images**: High-quality country flags with lazy loading and proper 4:3 aspect ratio
- **Border Countries**: Navigate to neighboring countries with clickable buttons
- **Server-Side Rendering**: Fast initial page loads with SSR

## 🏗️ Technical Architecture

### **Tech Stack**

- **Framework**: [Nuxt 4](https://nuxt.com/) - Vue.js meta-framework with SSR
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons**: [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons
- **API**: [REST Countries V2 API](https://restcountries.com/) - Free countries data
- **Deployment**: [Vercel](https://vercel.com/) - Serverless deployment platform

### **Project Structure**

```
countries-app/
├── app/
│   ├── components/           # Reusable Vue components
│   │   ├── cards/           # Card components (Country)
│   │   ├── form/            # Form components (Input, Select, Button)
│   │   └── UI/              # UI components (Error, Loading, TitleValue)
│   ├── composables/        # Vue composables for shared logic
│   │   ├── useFilter.ts    # Filtering, sorting, and URL sync logic
│   │   └── useTheme.ts     # Theme management and persistence
│   ├── layouts/            # Page layouts
│   │   └── default.vue     # Main app layout with theme toggle
│   ├── pages/              # File-based routing
│   │   ├── index.vue       # Home page with country list and filters
│   │   └── [countryName]/  # Dynamic country detail pages
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions (number formatting)
├── public/                 # Static assets
└── nuxt.config.ts         # Nuxt configuration
```

### **Component Architecture**

#### **Component Organization**

- **Cards Components**: Country display components (`Country.vue`)
- **Form Components**: Input and selection components (`Input`, `Select`, `Button`)
- **UI Components**: Reusable UI elements (`Error`, `Loading`, `TitleValue`)

#### **Composables Pattern**

- **`useFilter`**: Manages search, sorting, and filtering with URL synchronization
- **`useTheme`**: Handles dark/light theme switching and persistence

#### **File-based Routing**

- **`/`**: Home page with country list, search, filters, and sorting
- **`/[countryName]`**: Dynamic country detail pages with border country navigation

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18+
- pnpm (recommended) or npm

### **Installation**

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd countries-app
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### **Build for Production**

```bash
# Build the application
pnpm build

# Preview production build
pnpm preview

# Generate static site
pnpm generate
```

## 🎯 Usage Guide

### **Home Page Features**

- **Search**: Type in the search box to find countries by name (handles typos)
- **Filter by Region**: Use the region dropdown to filter by geographical area
- **Sort**: Choose to sort by name (A-Z) or population (highest to lowest)
- **Theme Toggle**: Click the theme button in the header to switch between dark/light mode

### **Country Details Page**

- **Navigation**: Click on any country card to view detailed information
- **Back Button**: Use the back button to return to the country list
- **Border Countries**: Click on border country buttons to navigate to neighboring countries
- **Comprehensive Info**: View population, region, capital, currencies, languages, and more

### **URL Features**

- **Shareable Links**: All filters are synced with URL parameters
- **Bookmarkable**: Save filtered views as bookmarks
- **Browser History**: Use browser back/forward buttons with filters intact

## 🔧 Configuration

### **Environment Variables**

```typescript
// nuxt.config.ts
runtimeConfig: {
  public: {
    API_URL: 'https://restcountries.com/v3.1',
  },
}
```

### **Customization**

- **Colors**: Modify CSS custom properties in `main.css`
- **Fonts**: Change font family in `nuxt.config.ts`
- **API**: Update API endpoint in runtime config
- **Styling**: Customize Tailwind classes and component styles

## 📱 Design Implementation

### **Design Fidelity**

- **Mobile Design**: Responsive design matching mobile mockups
- **Desktop Design**: Desktop layout matching provided designs
- **Dark Mode**: Custom dark theme implementation
- **Light Mode**: Clean light theme matching designs
- **Typography**: Font sizes and spacing based on design files
- **Color Palette**: Colors extracted from design files

### **Responsive Breakpoints**

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### **Vercel Deployment**

The application is deployed on Vercel with the following features:

- **Automatic Deployments**: Deploys on every push to main branch
- **Server-Side Rendering**: Full SSR support
- **Edge Functions**: Global CDN for fast loading
- **Custom Domain**: Available at the provided URL

### **Build Process**

```bash
# Production build
pnpm build

# Static generation
pnpm generate

# Preview locally
pnpm preview
```

## 🙏 Acknowledgments

- [REST Countries API](https://restcountries.com/) for providing free country data
- [Nuxt.js](https://nuxt.com/) for the amazing Vue.js framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Heroicons](https://heroicons.com/) for the beautiful icon set
- [Vercel](https://vercel.com/) for the deployment platform

---

**Built with ❤️ using Nuxt 4, Vue 3, and TypeScript for the Journey Mentor interview task**
