import { Router } from "express";
import {
  getAllTournaments,
  getTournamentById,
  createTournament,
} from "./tournament.controller";

const router = Router();

router.get("/", getAllTournaments);
router.get("/:id", getTournamentById);
router.post("/", createTournament);

export const tournamentRoutes = router;
