import { Request, Response } from "express";
import { sendResponse } from "../../utils/api-response";
import { emitMatchUpdate } from "../../utils/socket";

const MOCK_MATCHES = [
  {
    id: "match-101",
    tournamentId: "tourn-1",
    tournamentName: "Inter-Department Football Champions Trophy 2026",
    stage: "Group Stage — Round 6",
    homeTeam: { id: "team-cse", name: "CSE Strikers", shortName: "CSE" },
    awayTeam: { id: "team-eee", name: "EEE Dynamos", shortName: "EEE" },
    homeScore: 2,
    awayScore: 1,
    status: "Live",
    startTime: "2026-03-27T15:30:00Z",
    venue: "Central Campus Stadium — Main Pitch",
    events: [
      { id: "ev-1", minute: 18, type: "Goal", playerName: "Alex Vance", details: "Header from corner" },
      { id: "ev-2", minute: 34, type: "Goal", playerName: "Michael Ray", details: "Penalty kick" },
      { id: "ev-3", minute: 62, type: "Goal", playerName: "Ethan Hunt", details: "Outside box shot" },
    ],
  },
];

export async function getAllMatches(req: Request, res: Response): Promise<void> {
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Matches retrieved successfully",
    data: MOCK_MATCHES,
  });
}

export async function getMatchById(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const match = MOCK_MATCHES.find((m) => m.id === id) || MOCK_MATCHES[0];
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Match details retrieved successfully",
    data: match,
  });
}

export async function updateMatchScore(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { homeScore, awayScore, status } = req.body;
  const match = MOCK_MATCHES.find((m) => m.id === id) || MOCK_MATCHES[0];

  if (homeScore !== undefined) match.homeScore = homeScore;
  if (awayScore !== undefined) match.awayScore = awayScore;
  if (status) match.status = status;

  emitMatchUpdate(match.id, "match-score-updated", match);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Match score updated in real-time",
    data: match,
  });
}

export async function addMatchEvent(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { minute, type, playerName, details } = req.body;
  const match = MOCK_MATCHES.find((m) => m.id === id) || MOCK_MATCHES[0];

  const newEvent = {
    id: `ev-${Date.now()}`,
    minute: Number(minute) || 0,
    type: type || "Goal",
    playerName: playerName || "Player",
    details: details || "",
  };

  match.events.unshift(newEvent);

  if (type === "Goal") {
    match.homeScore += 1;
  }

  emitMatchUpdate(match.id, "match-event-added", { match, event: newEvent });

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Match event added & broadcasted",
    data: match,
  });
}
