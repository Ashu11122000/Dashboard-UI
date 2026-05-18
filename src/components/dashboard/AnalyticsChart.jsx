import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const analyticsData = [
  { month: "Jan", users: 120, revenue: 2400 },
  { month: "Feb", users: 180, revenue: 3200 },
  { month: "Mar", users: 250, revenue: 4100 },
  { month: "Apr", users: 320, revenue: 5300 },
  { month: "May", users: 410, revenue: 6900 },
  { month: "Jun", users: 520, revenue: 8400 },
];

export default function AnalyticsChart() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Analytics Overview
        </h2>

        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          User growth and revenue performance over the last 6 months.
        </p>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={analyticsData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
            />

            <YAxis tick={{ fontSize: 12 }} />

            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #cbd5e1",
              }}
            />

            <Line
              type="monotone"
              dataKey="users"
              stroke="#2563eb"
              strokeWidth={3}
              name="Users"
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#16a34a"
              strokeWidth={3}
              name="Revenue"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}