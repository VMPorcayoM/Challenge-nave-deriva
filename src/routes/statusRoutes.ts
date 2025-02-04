import { Router } from "express";
import {
  getStatus,
  getRepairBay,
  postTeapot,
  phaseChangeDiagram
} from "../controllers/statusController";

const router = Router();

router.get("/status", getStatus);
router.get("/repair-bay", getRepairBay);
router.post("/teapot", postTeapot);
router.get("/phase-change-diagram", phaseChangeDiagram);

export default router;