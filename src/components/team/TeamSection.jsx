import TeamGrid from "./TeamGrid";

function TeamSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-blue-600 dark:text-blue-400 font-medium">
            Meet Our Team
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            The Experts Behind Our Platform
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Our talented team combines product strategy, engineering, and
            analytics to help businesses scale faster.
          </p>
        </div>

        <div className="mt-16">
          <TeamGrid />
        </div>
      </div>
    </section>
  );
}

export default TeamSection;