import { useEffect, useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import toast from "react-hot-toast";

import PatientTable from "../components/patient/PatientTable";
import PatientModal from "../components/patient/PatientModal";

import {
  getPatients,
  createPatient,
  updatePatient,
  deletePatient,
} from "../services/patientService";

function Patients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [editingPatient, setEditingPatient] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const fetchPatients = async () => {
  try {
    setLoading(true);

    const res = await getPatients();

    console.log("Response:", res);
    console.log("Response Data:", res.data);
    console.log("Patients:", res.data.data);

    setPatients(res.data.data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleSavePatient = async (patientData) => {
    try {
      if (editingPatient) {
        await updatePatient(editingPatient._id, patientData);
        toast.success("Patient updated successfully");
      } else {
        await createPatient(patientData);
        toast.success("Patient added successfully");
      }

      await fetchPatients();

      setEditingPatient(null);
      setShowModal(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to save patient");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this patient?"
    );

    if (!confirmDelete) return;

    try {
      await deletePatient(id);

      toast.success("Patient deleted successfully");

      await fetchPatients();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete patient");
    }
  };

  const handleEdit = (patient) => {
    setEditingPatient(patient);
    setShowModal(true);
  };

  const handleClose = () => {
    setEditingPatient(null);
    setShowModal(false);
  };

  const filteredPatients = patients.filter((patient) => {
    const search = searchTerm.toLowerCase();

    return (
      patient.fullName?.toLowerCase().includes(search) ||
      patient.disease?.toLowerCase().includes(search) ||
      patient.assignedDoctor?.toLowerCase().includes(search) ||
      patient.phone?.toLowerCase().includes(search)
    );
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold text-slate-800">Patients</h1>

          <p className="text-gray-500 mt-2">
            Manage all hospital patients.
          </p>
        </div>

        <button
          onClick={() => {
            setEditingPatient(null);
            setShowModal(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-3 transition"
        >
          <FaPlus />
          Add Patient
        </button>
      </div>

      <div className="relative max-w-md">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search by name, disease, doctor or phone..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <PatientTable
        patients={filteredPatients}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <PatientModal
        isOpen={showModal}
        patient={editingPatient}
        onClose={handleClose}
        onSave={handleSavePatient}
      />
    </div>
  );
}

export default Patients;