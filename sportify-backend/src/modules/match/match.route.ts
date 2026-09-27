import { Router } from "express";
import {
  getAllMatches,
  getMatchById,
  updateMatchScore,
  addMatchEvent,
} from "./match.controller";

const router = Router();

router.get("/", getAllMatches);
router.get("/:id", getMatchById);
router.patch("/:id/score", updateMatchScore);
router.post("/:id/events", addMatchEvent);

export const matchRoutes = router;
