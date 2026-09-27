import { Request, Response } from "express";
import { sendResponse } from "../../utils/api-response";

const MOCK_PLAYERS = [
  { id: "player-1", name: "Alex Vance", jerseyNumber: 10, position: "Forward", teamName: "CSE Strikers", department: "Computer Science", stats: { goals: 8, assists: 4 } },
  { id: "player-2", name: "Michael Ray", jerseyNumber: 7, position: "Midfielder", teamName: "EEE Dynamos", department: "Electrical Engineering", stats: { goals: 5, assists: 3 } },
];

export async function getAllPlayers(req: Request, res: Response): Promise<void> {
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Players retrieved successfully",
    data: MOCK_PLAYERS,
  });
}

export async function getPlayerById(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const player = MOCK_PLAYERS.find((p) => p.id === id) || MOCK_PLAYERS[0];
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Player details retrieved successfully",
    data: player,
  });
}

export async function createPlayer(req: Request, res: Response): Promise<void> {
  const newPlayer = {
    id: `player-${Date.now()}`,
    ...req.body,
    stats: { goals: 0, assists: 0 },
  };
  MOCK_PLAYERS.push(newPlayer);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Player created successfully",
    data: newPlayer,
  });
}
