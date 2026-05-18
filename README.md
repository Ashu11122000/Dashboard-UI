# SaaS Dashboard Web Application

A capstone frontend project built using **ReactJS, Vite, TailwindCSS, JavaScript, and HTML5**.

This project combines multiple frontend assignment requirements into one professional SaaS dashboard application.

## Project Objectives

This application is designed to implement:

- Responsive hero section with navigation bar
- Multi-card team/product display
- Fully styled login/signup authentication pages
- Complex responsive pricing table
- Dark mode support using Tailwind theme classes
- Standard dashboard application layout
- Custom alert/notification components with transitions

---

## Tech Stack

- ReactJS
- Vite
- TailwindCSS
- JavaScript (ES6+)
- HTML5
- React Router DOM

---

## Dark Mode Configuration

Configured in `src/index.css`:

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
```

This enables class-based dark mode support across the application.

---

## Project Architecture

```bash
src/
│
├── assets/
│   ├── images/
│   │   ├── hero-dashboard.png
│   │   ├── login-illustration.svg
│   │   ├── pricing-bg.jpg
│   │   ├── avatar-1.png
│   │   ├── avatar-2.png
│   │   └── avatar-3.png
│   │
│   ├── icons/
│   │   └── custom-icons.svg
│   │
│   └── logos/
│       ├── logo-light.svg
│       └── logo-dark.svg
│
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Card.jsx
│   │   ├── Modal.jsx
│   │   ├── Loader.jsx
│   │   ├── Toast.jsx
│   │   ├── Alert.jsx
│   │   ├── Badge.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── EmptyState.jsx
│   │
│   ├── navigation/
│   │   ├── Navbar.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Topbar.jsx
│   │   └── NavLinks.jsx
│   │
│   ├── hero/
│   │   ├── Hero.jsx
│   │   ├── HeroStats.jsx
│   │   └── HeroCTA.jsx
│   │
│   ├── features/
│   │   ├── FeatureSection.jsx
│   │   ├── FeatureCard.jsx
│   │   └── FeatureGrid.jsx
│   │
│   ├── pricing/
│   │   ├── PricingSection.jsx
│   │   ├── PricingCard.jsx
│   │   ├── PricingToggle.jsx
│   │   └── PricingFeatures.jsx
│   │
│   ├── auth/
│   │   ├── LoginForm.jsx
│   │   ├── SignupForm.jsx
│   │   ├── AuthCard.jsx
│   │   ├── PasswordInput.jsx
│   │   └── FormValidationMessage.jsx
│   │
│   ├── dashboard/
│   │   ├── DashboardStats.jsx
│   │   ├── StatCard.jsx
│   │   ├── ActivityFeed.jsx
│   │   ├── RecentUsersTable.jsx
│   │   ├── TaskList.jsx
│   │   ├── AnalyticsChart.jsx
│   │   ├── QuickActions.jsx
│   │   └── NotificationsPanel.jsx
│   │
│   └── team/
│       ├── TeamSection.jsx
│       ├── TeamCard.jsx
│       └── TeamGrid.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Dashboard.jsx
│   ├── Pricing.jsx
│   ├── NotFound.jsx
│   └── Settings.jsx
│
├── layouts/
│   ├── MainLayout.jsx
│   ├── AuthLayout.jsx
│   └── DashboardLayout.jsx
│
├── hooks/
│   ├── useTheme.js
│   ├── useLocalStorage.js
│   ├── useToast.js
│   ├── useForm.js
│   ├── useWindowSize.js
│   └── useToggle.js
│
├── context/
│   ├── ThemeContext.jsx
│   ├── AuthContext.jsx
│   ├── ToastContext.jsx
│   └── DashboardContext.jsx
│
├── utils/
│   ├── constants.js
│   ├── helpers.js
│   ├── validators.js
│   ├── formatters.js
│   └── storage.js
│
├── data/
│   ├── featuresData.js
│   ├── pricingData.js
│   ├── teamData.js
│   ├── dashboardStats.js
│   ├── tasksData.js
│   └── notificationsData.js
│
├── router/
│   └── AppRouter.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Completed Development Progress

### Step 1 — React Router Architecture

Implemented:

- BrowserRouter
- Routes
- Route definitions
- 404 page handling
- Separate route-based pages

Configured routes:

- `/`
- `/pricing`
- `/login`
- `/signup`
- `/dashboard`
- `/settings`
- `*`

---

### Step 2 — Layout Architecture

Implemented:

- `MainLayout`
- `AuthLayout`
- `DashboardLayout`
- `Outlet`
- Nested route architecture

Layout mapping:

- MainLayout → Home, Pricing
- AuthLayout → Login, Signup
- DashboardLayout → Dashboard, Settings

---

### Step 3 — Theme System

Implemented:

- ThemeContext
- ThemeProvider
- `useTheme()` custom hook
- localStorage persistence
- global dark/light theme switching
- reusable ThemeToggle component

Features:

- dark mode persists after refresh
- class-based Tailwind dark mode
- globally applied theme management

---

### Step 4 — Reusable UI Foundation

Built reusable components:

- Button
- Input
- Card
- Badge

Purpose:

These components form the shared design system used throughout the application.

---

### Step 5 — Navigation System

Implemented:

- Responsive Navbar
- Mobile hamburger navigation
- reusable NavLinks component
- MobileMenu drawer
- ThemeToggle integration
- sticky navigation header

Features:

- desktop navigation
- mobile responsive menu
- active route highlighting
- dark mode support
- login/signup CTA buttons

Files added:

```bash
src/components/navigation/Navbar.jsx
src/components/navigation/NavLinks.jsx
src/components/navigation/MobileMenu.jsx
src/components/common/ThemeToggle.jsx
```

---

### Step 6 — Hero Section

Implemented:

- SaaS landing hero section
- Hero CTA buttons
- Hero stats display
- dashboard preview image integration

Features:

- responsive two-column layout
- mobile-first stacking
- dark mode support
- reusable hero architecture

Files added:

```bash
src/components/hero/Hero.jsx
src/components/hero/HeroStats.jsx
src/components/hero/HeroCTA.jsx
```

---

### Step 7 — Team Section

Implemented:

- multi-card team display
- reusable TeamCard architecture
- data-driven rendering

Features:

- responsive card grid
- 1 / 2 / 3 column scaling
- dark mode support
- avatar-based team presentation

Files added:

```bash
src/components/team/TeamSection.jsx
src/components/team/TeamGrid.jsx
src/components/team/TeamCard.jsx
src/data/teamData.js
```

---

### Step 8 — Authentication Pages

Implemented:

- Login page
- Signup page
- reusable auth card layout
- password visibility toggle
- validation message component

Features:

- centered authentication UI
- reusable form architecture
- dark mode support
- responsive layout

Files added:

```bash
src/components/auth/LoginForm.jsx
src/components/auth/SignupForm.jsx
src/components/auth/AuthCard.jsx
src/components/auth/PasswordInput.jsx
src/components/auth/FormValidationMessage.jsx
```

Updated pages:

```bash
src/pages/Login.jsx
src/pages/Signup.jsx
```

---

## Current Progress Status

Completed:

- Routing
- Layout architecture
- Theme system
- Reusable UI foundation
- Navbar
- Hero section
- Team section
- Authentication pages

Pending:

- Pricing table
- Dashboard layout
- Settings page
- Notifications / alerts
- Final polish

---

## Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build production version:

```bash
npm run build
```