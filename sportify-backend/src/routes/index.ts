import { Router } from "express";
import { authRoutes } from "../modules/auth/auth.route";
import { tournamentRoutes } from "../modules/tournament/tournament.route";
import { matchRoutes } from "../modules/match/match.route";
import { teamRoutes } from "../modules/team/team.route";
import { playerRoutes } from "../modules/player/player.route";
import { statsRoutes } from "../modules/stats/stats.route";

const router = Router();

const moduleRoutes = [
  { path: "/auth", route: authRoutes },
  { path: "/tournaments", route: tournamentRoutes },
  { path: "/matches", route: matchRoutes },
  { path: "/teams", route: teamRoutes },
  { path: "/players", route: playerRoutes },
  { path: "/stats", route: statsRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export const apiRoutes = router;
