I am building a capstone frontend project using **ReactJS + Vite + TailwindCSS + JavaScript + HTML5**.

Project idea: **SaaS Dashboard Web Application** that combines all assignment requirements into one professional project.

Assignment requirements:

* Responsive hero section + navigation bar
* Multi-card product/team display
* Fully styled login/signup form
* Complex responsive pricing table
* Dark mode feature using theme classes
* Standard application dashboard layout
* Custom alert/notification component with transitions

Project architecture already completed:

### Tech Setup Completed

* Vite React project initialized
* TailwindCSS configured
* React Router installed
* Dark mode custom variant configured in `index.css`

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
```

---

### Folder Structure

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
│   │
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

### Completed Features

#### Step 1 — React Router Architecture

Implemented:

* BrowserRouter
* Routes
* Route
* 404 page
* separate route pages

Routes:

* `/`
* `/pricing`
* `/login`
* `/signup`
* `/dashboard`
* `/settings`
* `*`

---

#### Step 2 — Layout Architecture with Nested Routes

Implemented:

* `MainLayout`
* `AuthLayout`
* `DashboardLayout`
* `Outlet`
* nested routes

Architecture:

* MainLayout → Home + Pricing
* AuthLayout → Login + Signup
* DashboardLayout → Dashboard + Settings

---

#### Step 3 — Theme System

Implemented:

* ThemeContext
* ThemeProvider
* custom `useTheme()` hook
* localStorage persistence
* dark/light theme toggle
* `ThemeToggle` component
* dark mode working globally

---

#### Step 4 — Reusable UI Foundation

Built reusable components:

* Button
* Input
* Card
* Badge

Home page currently used as test page for these reusable components.

---

Now continue this project from **Step 5 onward** in a professional step-by-step teaching style.

Requirements for teaching style:

* exact file path for every file
* complete code (not partial snippets)
* line-by-line explanation
* best practices
* scalable architecture
* production-style React structure

Start with:

**Step 5 → Build Navbar + responsive mobile navigation**
