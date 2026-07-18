import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/patients",
});

export const getPatients = () => API.get("/");

export const getPatient = (id) => API.get(`/${id}`);

export const createPatient = (patientData) =>
  API.post("/", patientData);



export const updatePatient = (id, patientData) =>
  API.put(`/${id}`, patientData);

export const deletePatient = (id) =>
  API.delete(`/${id}`);