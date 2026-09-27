import { Request, Response } from "express";
import { sendResponse } from "../../utils/api-response";

const MOCK_TOURNAMENTS = [
  {
    id: "tourn-1",
    name: "Inter-Department Football Champions Trophy 2026",
    slug: "inter-dept-football-2026",
    sport: "Football",
    season: "Spring 2026",
    status: "Ongoing",
    startDate: "2026-03-01",
    endDate: "2026-03-30",
    totalTeams: 6,
    prizePool: "$1,500",
    description: "The premier university inter-departmental football tournament.",
  },
  {
    id: "tourn-2",
    name: "Campus T20 Cricket Super League",
    slug: "campus-t20-cricket-2026",
    sport: "Cricket",
    season: "Spring 2026",
    status: "Upcoming",
    startDate: "2026-04-10",
    endDate: "2026-04-28",
    totalTeams: 8,
    prizePool: "$2,000",
    description: "High-octane T20 cricket tournament with 8 university teams.",
  },
];

export async function getAllTournaments(req: Request, res: Response): Promise<void> {
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Tournaments retrieved successfully",
    data: MOCK_TOURNAMENTS,
  });
}

export async function getTournamentById(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const tourn = MOCK_TOURNAMENTS.find((t) => t.id === id || t.slug === id) || MOCK_TOURNAMENTS[0];
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Tournament details retrieved successfully",
    data: tourn,
  });
}

export async function createTournament(req: Request, res: Response): Promise<void> {
  const newTourn = {
    id: `tourn-${Date.now()}`,
    ...req.body,
    status: req.body.status || "Upcoming",
  };
  MOCK_TOURNAMENTS.push(newTourn);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Tournament created successfully",
    data: newTourn,
  });
}
