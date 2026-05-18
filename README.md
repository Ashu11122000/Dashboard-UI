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