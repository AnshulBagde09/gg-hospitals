import {
  FaEdit,
  FaTrash,
  FaUserInjured,
} from "react-icons/fa";

function PatientTable({
  patients,
  loading,
  onEdit,
  onDelete,
}) {
  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-10 text-center text-gray-500">
        Loading patients...
      </div>
    );
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "Admitted":
        return (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
            Admitted
          </span>
        );

      case "Under Observation":
        return (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
            Under Observation
          </span>
        );

      case "Discharged":
        return (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
            Discharged
          </span>
        );

      default:
        return (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4 text-left">#</th>
              <th className="text-left">Patient</th>
              <th className="text-left">Age</th>
              <th className="text-left">Gender</th>
              <th className="text-left">Blood</th>
              <th className="text-left">Disease</th>
              <th className="text-left">Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {patients.length === 0 ? (
              <tr>
                <td
                  colSpan="8"
                  className="py-12 text-center text-gray-500"
                >
                  <div className="flex flex-col items-center gap-3">
                    <FaUserInjured
                      size={40}
                      className="text-gray-300"
                    />

                    <p className="text-lg font-medium">
                      No patients found
                    </p>

                    <p className="text-sm text-gray-400">
                      Add your first patient to get started.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              patients.map((patient, index) => (
                <tr
                  key={patient._id}
                  className="border-b hover:bg-blue-50 transition"
                >
                  <td className="p-4 font-semibold text-gray-600">
                    {index + 1}
                  </td>

                  <td className="font-semibold text-slate-700">
                    {patient.fullName}
                  </td>

                  <td>{patient.age}</td>

                  <td>{patient.gender}</td>

                  <td>{patient.bloodGroup}</td>

                  <td>{patient.disease}</td>

                  <td>{getStatusBadge(patient.status)}</td>

                  <td>
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => onEdit(patient)}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
                      >
                        <FaEdit />
                        Edit
                      </button>

                      <button
                        onClick={() => onDelete(patient._id)}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition"
                      >
                        <FaTrash />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientTable;