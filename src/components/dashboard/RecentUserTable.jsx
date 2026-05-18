function RecentUsersTable() {
  const users = [
    {
      id: 1,
      name: "Aarav Sharma",
      email: "aarav@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Mehta",
      email: "priya@example.com",
      role: "Manager",
      status: "Pending",
    },
    {
      id: 3,
      name: "Rahul Verma",
      email: "rahul@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 4,
      name: "Sneha Kapoor",
      email: "sneha@example.com",
      role: "User",
      status: "Inactive",
    },
  ];

  const getStatusStyles = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300";
      case "Pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300";
      case "Inactive":
        return "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Recent Users
      </h2>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                Email
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                Role
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-100 dark:border-gray-800"
              >
                <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                  {user.name}
                </td>

                <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                  {user.email}
                </td>

                <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                  {user.role}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyles(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default RecentUsersTable;