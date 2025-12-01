import express from "express";
import {
  barberList,
  loginBarber,
  appointmentsBarber,
  appointmentComplete,
  appointmentCancel,
  barberDashboard,
  barberProfile,
  updateBarberProfile,
} from "../controllers/barberController.js";
import authBarber from "../middlewares/authBarber.js";

const barberRouter = express.Router();

barberRouter.get("/list", barberList);
barberRouter.post("/login", loginBarber);
barberRouter.get("/appointments", authBarber, appointmentsBarber);
barberRouter.post("/complete-appointment", authBarber, appointmentComplete);
barberRouter.post("/cancel-appointment", authBarber, appointmentCancel);
barberRouter.get("/dashboard", authBarber, barberDashboard);
barberRouter.get("/profile", authBarber, barberProfile);
barberRouter.post("/update-profile", authBarber, updateBarberProfile);

export default barberRouter;