import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    age: {
      type: Number,
      required: true,
      min: 0,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

    bloodGroup: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      lowercase: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
    },

    disease: {
      type: String,
      required: true,
    },

    assignedDoctor: {
      type: String,
      default: "",
    },

    admissionDate: {
      type: Date,
      default: Date.now,
    },

    status: {
      type: String,
      enum: ["Admitted", "Discharged", "Under Observation"],
      default: "Admitted",
    },
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;