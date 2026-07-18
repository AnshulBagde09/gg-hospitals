const appointments = [
  {
    id: 1,
    patient: "Rahul Sharma",
    doctor: "Dr. Mehta",
    time: "10:00 AM",
  },
  {
    id: 2,
    patient: "Sneha Joshi",
    doctor: "Dr. Singh",
    time: "11:30 AM",
  },
  {
    id: 3,
    patient: "Vikas Gupta",
    doctor: "Dr. Rao",
    time: "2:00 PM",
  },
];

function TodayAppointments() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-5">
        Today's Appointments
      </h2>

      <div className="space-y-5">

        {appointments.map((appointment) => (

          <div
            key={appointment.id}
            className="flex justify-between items-center border-b pb-4"
          >

            <div>

              <h3 className="font-semibold">

                {appointment.patient}

              </h3>

              <p className="text-gray-500">

                {appointment.doctor}

              </p>

            </div>

            <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg">

              {appointment.time}

            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TodayAppointments;