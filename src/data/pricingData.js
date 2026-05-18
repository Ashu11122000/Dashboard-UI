const pricingData = [
  {
    id: 1,
    name: "Starter",
    monthlyPrice: 19,
    yearlyPrice: 190,
    description: "Perfect for individuals and small teams getting started.",
    recommended: false,
    features: [
      "1 user account",
      "Basic analytics dashboard",
      "5GB cloud storage",
      "Email support",
      "Task management tools",
    ],
  },
  {
    id: 2,
    name: "Pro",
    monthlyPrice: 49,
    yearlyPrice: 490,
    description: "Best for growing businesses that need advanced features.",
    recommended: true,
    features: [
      "5 user accounts",
      "Advanced analytics dashboard",
      "50GB cloud storage",
      "Priority email support",
      "Team collaboration tools",
      "Custom integrations",
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    monthlyPrice: 99,
    yearlyPrice: 990,
    description: "Built for larger organizations with enterprise-grade needs.",
    recommended: false,
    features: [
      "Unlimited user accounts",
      "Full analytics suite",
      "Unlimited cloud storage",
      "24/7 dedicated support",
      "Advanced security controls",
      "API access",
      "Custom onboarding",
    ],
  },
];

export default pricingData;