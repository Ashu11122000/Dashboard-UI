import HeroStats from "./HeroStats";
import HeroCTA from "./HeroCTA";
import heroDashboard from "../../assets/hero-dashboard.jpg";

function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
            Modern SaaS Dashboard Platform
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            Scale Your Business With Powerful Analytics
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-400">
            Manage users, track revenue, monitor analytics, and streamline your
            operations from one beautifully designed dashboard.
          </p>

          <HeroCTA />

          <HeroStats />
        </div>

        <div>
          <img
            src={heroDashboard}
            alt="Dashboard preview"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;