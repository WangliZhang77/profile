# Portfolio Website

A modern portfolio website inspired by brittanychiang.com, built with React, TypeScript, CSS Modules, and Framer Motion.

## Features

- ✅ Fixed left sidebar with sticky positioning
- ✅ Scrollspy navigation (active section highlighting)
- ✅ Smooth scroll behavior
- ✅ Tabbed Experience section with animated transitions
- ✅ Project cards grid with hover effects
- ✅ Framer Motion animations for section reveals
- ✅ Fully responsive design
- ✅ Accessible keyboard navigation

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **CSS Modules** - Scoped styling
- **Framer Motion** - Animations

## Installation

```bash
# Install dependencies
npm install
```

## Running the Project

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## Building for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Layout.tsx              # Main layout with scrollspy
│   ├── Sidebar.tsx             # Left fixed sidebar
│   ├── NavLinks.tsx            # Navigation with active states
│   ├── SocialLinks.tsx         # Social media icons
│   ├── About.tsx              # About section
│   ├── Experience.tsx          # Experience with tabs
│   ├── Projects.tsx            # Projects grid
│   └── Contact.tsx             # Contact section
├── App.tsx
├── App.css                     # Global styles
└── main.tsx
```

## Customization Guide

### Edit Your Name, Title, and Tagline

**File:** `src/components/Sidebar.tsx`

```tsx
// Line 7-8: Edit your name
<span className={styles.nameHighlight}>Wangli</span>
<span className={styles.nameRest}> Zhang</span>

// Line 11: Edit your job title
<p className={styles.jobTitle}>Front End Engineer</p>

// Line 14-16: Edit your tagline
<p className={styles.tagline}>
  I build accessible, detail-oriented digital experiences for the web.
</p>
```

### Edit About Section

**File:** `src/components/About.tsx`

Edit the paragraph content inside the `<div className={styles.content}>` section (lines 18-44).

### Edit Experience Data

**File:** `src/components/Experience.tsx`

Edit the `jobs` array (lines 13-58):

```tsx
const jobs: Job[] = [
  {
    company: 'Company Name',
    title: 'Your Job Title',
    period: '2024 – Present',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
      // Add more...
    ],
  },
  // Add more jobs...
];
```

### Edit Projects Data

**File:** `src/components/Projects.tsx`

Edit the `projects` array (lines 12-66):

```tsx
const projects: Project[] = [
  {
    name: 'Project Name',
    description: 'Project description...',
    technologies: ['React', 'TypeScript'],
    github: 'https://github.com/...',
    external: 'https://demo.com',
  },
  // Add more projects...
];
```

### Edit Social Links

**File:** `src/components/SocialLinks.tsx`

Edit the `socialLinks` array (lines 7-13):

```tsx
const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/...', icon: 'github' },
  // Add more links...
];
```

### Edit Contact Email

**File:** `src/components/Contact.tsx`

Edit the email in the button link (line 20):

```tsx
<a href="mailto:wangli@example.com" className={styles.button}>
```

### Change Colors

Edit CSS variables in individual component CSS files, or modify the color values directly:

- Background: `#0a192f`
- Accent: `#64ffda`
- Text Primary: `#ccd6f6`
- Text Secondary: `#8892b0`

## Key Features Explained

### Scrollspy Navigation

The navigation automatically highlights the active section as you scroll. This is implemented using `IntersectionObserver` in `Layout.tsx`.

### Tabbed Experience

The Experience section uses tabs to switch between different companies. The content animates smoothly using Framer Motion's `AnimatePresence`.

### Project Cards

Project cards have hover effects that lift the card and change the border color to the accent color.

### Responsive Design

- **Desktop (≥1024px)**: Two-column layout with fixed sidebar
- **Tablet (768px-1024px)**: Stacked layout, sidebar on top
- **Mobile (≤768px)**: Fully stacked, optimized for small screens

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
