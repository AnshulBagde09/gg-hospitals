import StatCard from "../components/dashboard/StatCard";
import RecentPatients from "../components/dashboard/RecentPatients";
import TodayAppointments from "../components/dashboard/TodayAppointments";
import RevenueChart from "../components/dashboard/RevenueChart";
import BedOccupancy from "../components/dashboard/BedOccupancy";
import QuickActions from "../components/dashboard/QuickActions";

function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Here's what's happening today at GG Hospitals.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Patients"
          value="1,245"
          color="text-blue-600"
        />

        <StatCard
          title="Doctors"
          value="82"
          color="text-green-600"
        />

        <StatCard
          title="Appointments"
          value="356"
          color="text-orange-600"
        />

        <StatCard
          title="Revenue"
          value="$54K"
          color="text-purple-600"
        />

      </div>

      {/* Patients + Appointments */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <RecentPatients />

        <TodayAppointments />

      </div>

      {/* Revenue + Quick Actions */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        <div className="xl:col-span-2">

          <RevenueChart />

        </div>

        <QuickActions />

      </div>

      {/* Bed Occupancy */}
      <div>

        <BedOccupancy />

      </div>

    </div>
  );
}

export default Dashboard;