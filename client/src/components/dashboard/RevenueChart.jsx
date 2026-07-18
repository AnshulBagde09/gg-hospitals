import { TrendingUp } from "lucide-react";

function RevenueChart() {
  const revenue = [40, 65, 45, 80, 60, 90, 75];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Weekly Revenue
        </h2>

        <TrendingUp className="text-green-600" />

      </div>

      <div className="flex items-end justify-between h-56">

        {revenue.map((value, index) => (
          <div
            key={index}
            className="bg-blue-600 rounded-t-xl w-10 transition-all hover:bg-blue-700"
            style={{
              height: `${value * 2}px`,
            }}
          />
        ))}

      </div>

    </div>
  );
}

export default RevenueChart;