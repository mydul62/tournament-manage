import { Router } from "express";
import { getAllPlayers, getPlayerById, createPlayer } from "./player.controller";

const router = Router();

router.get("/", getAllPlayers);
router.get("/:id", getPlayerById);
router.post("/", createPlayer);

export const playerRoutes = router;
