import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import dotenv from "dotenv";
import Patient from "./models/Patient.js";

dotenv.config();

const diseases = [
  "Fever",
  "Diabetes",
  "Hypertension",
  "Asthma",
  "Migraine",
  "COVID-19",
  "Pneumonia",
  "Tuberculosis",
  "Heart Disease",
  "Kidney Stone",
  "Cancer",
  "Dengue",
  "Typhoid",
  "Malaria",
  "Arthritis",
];

const doctors = [
  "Dr. Sharma",
  "Dr. Patel",
  "Dr. Singh",
  "Dr. Khan",
  "Dr. Mehta",
  "Dr. Reddy",
  "Dr. Gupta",
  "Dr. Verma",
];

const bloodGroups = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
];

const genders = ["Male", "Female", "Other"];

const statuses = [
  "Admitted",
  "Under Observation",
  "Discharged",
];

async function seedPatients() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    await Patient.deleteMany();

    const patients = [];

    for (let i = 0; i < 400; i++) {
      patients.push({
        fullName: faker.person.fullName(),

        age: faker.number.int({
          min: 1,
          max: 90,
        }),

        gender: faker.helpers.arrayElement(genders),

        bloodGroup: faker.helpers.arrayElement(bloodGroups),

        phone: faker.string.numeric(10),

        email: faker.internet.email(),

        address: faker.location.streetAddress(true),

        disease: faker.helpers.arrayElement(diseases),

        assignedDoctor: faker.helpers.arrayElement(doctors),

        admissionDate: faker.date.recent({ days: 90 }),

        status: faker.helpers.arrayElement(statuses),
      });
    }

    await Patient.insertMany(patients);

    console.log(`${patients.length} patients inserted successfully`);

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedPatients();