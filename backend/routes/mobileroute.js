import express from "express";
import { getMobile } from "../controller/mobileController.js";

const router = express.Router();

router.get("/", getMobile);

export default router;
