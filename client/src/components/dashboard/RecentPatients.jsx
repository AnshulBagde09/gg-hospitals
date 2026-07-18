const patients = [
  {
    id: 1,
    name: "Rahul Sharma",
    age: 28,
    disease: "Flu",
    status: "Admitted",
  },
  {
    id: 2,
    name: "Priya Patel",
    age: 35,
    disease: "Diabetes",
    status: "Recovered",
  },
  {
    id: 3,
    name: "Amit Verma",
    age: 42,
    disease: "Fracture",
    status: "Under Observation",
  },
];

function RecentPatients() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-5">
        Recent Patients
      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-left border-b">

            <th className="py-3">Name</th>
            <th>Age</th>
            <th>Disease</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {patients.map((patient) => (

            <tr
              key={patient.id}
              className="border-b hover:bg-gray-50"
            >

              <td className="py-4">{patient.name}</td>

              <td>{patient.age}</td>

              <td>{patient.disease}</td>

              <td>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                  {patient.status}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default RecentPatients;