import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboradController";

const router = Router();

router.get("/", getDashboardMetrics);

export default router;
