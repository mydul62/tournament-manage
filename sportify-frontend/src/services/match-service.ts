import { Match } from "@/types";
import { MOCK_TOURNAMENTS } from "./tournament-service";

export const MOCK_MATCHES: Match[] = [
  {
    id: "match-101",
    tournamentId: "tourn-1",
    tournamentName: "Inter-Department Football Champions Trophy 2026",
    stage: "Group Stage — Round 6",
    homeTeam: MOCK_TOURNAMENTS[0].teams[0],
    awayTeam: MOCK_TOURNAMENTS[0].teams[1],
    homeScore: 2,
    awayScore: 1,
    status: "Live",
    startTime: "2026-03-27T15:30:00Z",
    venue: "Central Campus Stadium — Pitch 1",
    events: [
      {
        id: "ev-1",
        minute: 18,
        type: "Goal",
        teamId: "team-cse",
        playerName: "Alex Vance",
        assistPlayerName: "Liam Johnson",
        details: "Header into top-right corner",
      },
      {
        id: "ev-2",
        minute: 34,
        type: "Goal",
        teamId: "team-eee",
        playerName: "Michael Ray",
        details: "Penalty kick",
      },
      {
        id: "ev-3",
        minute: 62,
        type: "Goal",
        teamId: "team-cse",
        playerName: "Ethan Hunt",
        assistPlayerName: "Alex Vance",
        details: "Outside the box rocket",
      },
      {
        id: "ev-4",
        minute: 75,
        type: "YellowCard",
        teamId: "team-eee",
        playerName: "James Carter",
        details: "Tactical foul",
      },
    ],
    referee: "Prof. R. Vance",
  },
  {
    id: "match-102",
    tournamentId: "tourn-1",
    tournamentName: "Inter-Department Football Champions Trophy 2026",
    stage: "Group Stage — Round 6",
    homeTeam: MOCK_TOURNAMENTS[0].teams[2],
    awayTeam: MOCK_TOURNAMENTS[0].teams[3],
    homeScore: 3,
    awayScore: 0,
    status: "Finished",
    startTime: "2026-03-27T10:00:00Z",
    venue: "East Turf Field",
    events: [
      {
        id: "ev-10",
        minute: 12,
        type: "Goal",
        teamId: "team-me",
        playerName: "David Miller",
      },
    ],
  },
];

export const matchService = {
  getMatches: async (): Promise<Match[]> => MOCK_MATCHES,
  getMatchById: async (id: string): Promise<Match | undefined> =>
    MOCK_MATCHES.find((m) => m.id === id),
  getLiveMatches: async (): Promise<Match[]> =>
    MOCK_MATCHES.filter((m) => m.status === "Live"),
};
