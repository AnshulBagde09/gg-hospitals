import {
  FaUserPlus,
  FaCalendarPlus,
  FaFileInvoiceDollar,
} from "react-icons/fa";

function QuickActions() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 gap-4">

        <button className="bg-blue-600 text-white p-4 rounded-xl flex items-center gap-3 hover:bg-blue-700 transition">

          <FaUserPlus />

          Add Patient

        </button>

        <button className="bg-green-600 text-white p-4 rounded-xl flex items-center gap-3 hover:bg-green-700 transition">

          <FaCalendarPlus />

          Book Appointment

        </button>

        <button className="bg-purple-600 text-white p-4 rounded-xl flex items-center gap-3 hover:bg-purple-700 transition">

          <FaFileInvoiceDollar />

          Generate Bill

        </button>

      </div>

    </div>
  );
}

export default QuickActions;