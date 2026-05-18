function TeamCard({ member }) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300">
      <img
        src={member.image}
        alt={member.name}
        className="w-20 h-20 rounded-full object-cover mx-auto"
      />

      <div className="text-center mt-5">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {member.name}
        </h3>

        <p className="mt-1 text-blue-600 dark:text-blue-400 font-medium">
          {member.role}
        </p>

        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {member.description}
        </p>
      </div>
    </div>
  );
}

export default TeamCard;