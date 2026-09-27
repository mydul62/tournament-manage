import { Router } from "express";
import { getAllTeams, getTeamById, createTeam } from "./team.controller";

const router = Router();

router.get("/", getAllTeams);
router.get("/:id", getTeamById);
router.post("/", createTeam);

export const teamRoutes = router;
