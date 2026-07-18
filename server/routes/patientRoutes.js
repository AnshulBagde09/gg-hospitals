import express from "express";

import {
  createPatient,
  getPatients,
  getPatient,
  updatePatient,
  deletePatient,
} from "../controllers/patientController.js";

const router = express.Router();

router.route("/")
  .get(getPatients)
  .post(createPatient);

router.route("/:id")
  .get(getPatient)
  .put(updatePatient)
  .delete(deletePatient);

export default router;