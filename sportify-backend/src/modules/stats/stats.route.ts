import { Router } from "express";
import { getOverviewStats } from "./stats.controller";

const router = Router();

router.get("/overview", getOverviewStats);

export const statsRoutes = router;
