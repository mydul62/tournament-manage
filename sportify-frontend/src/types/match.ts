import { Team } from "./tournament";

export type MatchStatus = "Scheduled" | "Live" | "Finished" | "Postponed";
export type EventType = "Goal" | "YellowCard" | "RedCard" | "Substitution";

export interface MatchEvent {
  id: string;
  minute: number;
  type: EventType;
  teamId: string;
  playerName: string;
  assistPlayerName?: string;
  details?: string;
}

export interface Match {
  id: string;
  tournamentId: string;
  tournamentName: string;
  stage: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
  startTime: string;
  venue: string;
  events: MatchEvent[];
  referee?: string;
}
