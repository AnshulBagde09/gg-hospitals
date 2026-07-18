import { useEffect, useState } from "react";

const emptyForm = {
  fullName: "",
  age: "",
  gender: "Male",
  bloodGroup: "",
  phone: "",
  email: "",
  address: "",
  disease: "",
  assignedDoctor: "",
  status: "Admitted",
};

function PatientModal({
  isOpen,
  onClose,
  onSave,
  patient,
}) {
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (patient) {
      setFormData({
        fullName: patient.fullName || "",
        age: patient.age || "",
        gender: patient.gender || "Male",
        bloodGroup: patient.bloodGroup || "",
        phone: patient.phone || "",
        email: patient.email || "",
        address: patient.address || "",
        disease: patient.disease || "",
        assignedDoctor: patient.assignedDoctor || "",
        status: patient.status || "Admitted",
      });
    } else {
      setFormData(emptyForm);
    }
  }, [patient]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await onSave(formData);

    setFormData(emptyForm);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-6">

      <div className="bg-white rounded-2xl w-full max-w-4xl p-8 shadow-xl">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">

            {patient ? "Edit Patient" : "Add Patient"}

          </h2>

          <button
            onClick={onClose}
            className="text-3xl hover:text-red-500"
          >
            ×
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-5"
        >

          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="border rounded-xl p-3"
            required
          />

          <input
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            className="border rounded-xl p-3"
            required
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            placeholder="Blood Group"
            className="border rounded-xl p-3"
            required
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border rounded-xl p-3"
            required
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border rounded-xl p-3"
          />

          <input
            name="assignedDoctor"
            value={formData.assignedDoctor}
            onChange={handleChange}
            placeholder="Assigned Doctor"
            className="border rounded-xl p-3"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            <option>Admitted</option>
            <option>Under Observation</option>
            <option>Discharged</option>
          </select>

          <input
            name="disease"
            value={formData.disease}
            onChange={handleChange}
            placeholder="Disease"
            className="border rounded-xl p-3 col-span-2"
            required
          />

          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            rows="3"
            className="border rounded-xl p-3 col-span-2"
            required
          />

          <div className="col-span-2 flex justify-end gap-4 mt-4">

            <button
              type="button"
              onClick={onClose}
              className="border px-6 py-3 rounded-xl hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
            >
              {patient ? "Update Patient" : "Save Patient"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default PatientModal;