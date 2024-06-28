import express from "express"
import { sendReservation } from "../Controller/reservation.js";
const router = express.Router();

router.post("/send",sendReservation);

export default router;