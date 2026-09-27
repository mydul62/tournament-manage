import { Request, Response } from "express";
import { sendResponse } from "../../utils/api-response";

export async function getOverviewStats(req: Request, res: Response): Promise<void> {
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Overview stats retrieved successfully",
    data: {
      activeTournaments: 4,
      liveMatches: 1,
      totalGoals: 87,
      registeredSquads: 32,
    },
  });
}
