import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import usersData from "../data/users.json";

const COLORS = ["#ff6b6b", "#1dd1a1", "#54a0ff"];

function UserStats() {
  const roleCounts = usersData.reduce((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {});

  const data = Object.keys(roleCounts).map((role) => ({
    name: role,
    value: roleCounts[role],
  }));

  return (
    <div className="chart-container">
      <h2>User Roles Overview</h2>
      <PieChart width={300} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default UserStats;
