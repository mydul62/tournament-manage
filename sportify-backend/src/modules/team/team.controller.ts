import { Request, Response } from "express";
import { sendResponse } from "../../utils/api-response";

const MOCK_TEAMS = [
  { id: "team-cse", name: "CSE Strikers", shortName: "CSE", department: "Computer Science & Engineering", captainName: "Alex Vance", played: 6, won: 5, drawn: 1, lost: 0, points: 16 },
  { id: "team-eee", name: "EEE Dynamos", shortName: "EEE", department: "Electrical & Electronic Engineering", captainName: "Michael Ray", played: 6, won: 4, drawn: 1, lost: 1, points: 13 },
];

export async function getAllTeams(req: Request, res: Response): Promise<void> {
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Teams retrieved successfully",
    data: MOCK_TEAMS,
  });
}

export async function getTeamById(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const team = MOCK_TEAMS.find((t) => t.id === id) || MOCK_TEAMS[0];
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Team details retrieved successfully",
    data: team,
  });
}

export async function createTeam(req: Request, res: Response): Promise<void> {
  const newTeam = {
    id: `team-${Date.now()}`,
    ...req.body,
    played: 0, won: 0, drawn: 0, lost: 0, points: 0,
  };
  MOCK_TEAMS.push(newTeam);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Team created successfully",
    data: newTeam,
  });
}
