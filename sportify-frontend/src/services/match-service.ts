import { Match } from "@/types";
import { MOCK_TEAMS } from "./tournament-service";

export const MOCK_MATCHES: Match[] = [
  {
    id: "match-101",
    tournamentId: "tourn-1",
    tournamentName: "Inter-Department Football Champions Trophy 2026",
    stage: "Group Stage — Round 6",
    homeTeam: MOCK_TEAMS[0], // CSE
    awayTeam: MOCK_TEAMS[1], // EEE
    homeScore: 2,
    awayScore: 1,
    status: "Live",
    startTime: "2026-03-27T15:30:00Z",
    venue: "Central Campus Stadium — Main Pitch",
    events: [
      {
        id: "ev-1",
        minute: 18,
        type: "Goal",
        teamId: "team-cse",
        playerName: "Alex Vance",
        assistPlayerName: "Liam Johnson",
        details: "Header into top-right corner from cross",
      },
      {
        id: "ev-2",
        minute: 34,
        type: "Goal",
        teamId: "team-eee",
        playerName: "Michael Ray",
        details: "Penalty kick conversion low left corner",
      },
      {
        id: "ev-3",
        minute: 62,
        type: "Goal",
        teamId: "team-cse",
        playerName: "Ethan Hunt",
        assistPlayerName: "Alex Vance",
        details: "Outside the box curling rocket",
      },
      {
        id: "ev-4",
        minute: 75,
        type: "YellowCard",
        teamId: "team-eee",
        playerName: "James Carter",
        details: "Tactical foul on counter-attack",
      },
      {
        id: "ev-5",
        minute: 81,
        type: "Substitution",
        teamId: "team-cse",
        playerName: "Marcus Steel IN",
        assistPlayerName: "Liam Johnson OUT",
        details: "Tactical substitution for fresh legs",
      },
    ],
    referee: "Prof. R. Vance (FIFA Badge)",
  },
  {
    id: "match-102",
    tournamentId: "tourn-1",
    tournamentName: "Inter-Department Football Champions Trophy 2026",
    stage: "Group Stage — Round 6",
    homeTeam: MOCK_TEAMS[2], // MECH
    awayTeam: MOCK_TEAMS[3], // BBA
    homeScore: 3,
    awayScore: 0,
    status: "Finished",
    startTime: "2026-03-27T10:00:00Z",
    venue: "East Turf Grounds",
    events: [
      { id: "ev-10", minute: 12, type: "Goal", teamId: "team-me", playerName: "David Miller" },
      { id: "ev-11", minute: 48, type: "Goal", teamId: "team-me", playerName: "David Miller" },
      { id: "ev-12", minute: 78, type: "Goal", teamId: "team-me", playerName: "Sam Wilson" },
    ],
    referee: "Coach K. Stevens",
  },
  {
    id: "match-103",
    tournamentId: "tourn-1",
    tournamentName: "Inter-Department Football Champions Trophy 2026",
    stage: "Group Stage — Round 6",
    homeTeam: MOCK_TEAMS[4], // CE
    awayTeam: MOCK_TEAMS[5], // ARCH
    homeScore: 2,
    awayScore: 0,
    status: "Finished",
    startTime: "2026-03-26T16:00:00Z",
    venue: "West Pavilion Field",
    events: [
      { id: "ev-20", minute: 29, type: "Goal", teamId: "team-ce", playerName: "Robert Ford" },
      { id: "ev-21", minute: 65, type: "Goal", teamId: "team-ce", playerName: "Daniel Craig" },
    ],
    referee: "Dr. A. Rahman",
  },
  {
    id: "match-104",
    tournamentId: "tourn-1",
    tournamentName: "Inter-Department Football Champions Trophy 2026",
    stage: "Semi-Final 1",
    homeTeam: MOCK_TEAMS[0], // CSE
    awayTeam: MOCK_TEAMS[2], // MECH
    homeScore: 0,
    awayScore: 0,
    status: "Scheduled",
    startTime: "2026-03-29T15:00:00Z",
    venue: "Central Campus Stadium",
    events: [],
    referee: "Prof. R. Vance",
  },
  {
    id: "match-105",
    tournamentId: "tourn-1",
    tournamentName: "Inter-Department Football Champions Trophy 2026",
    stage: "Semi-Final 2",
    homeTeam: MOCK_TEAMS[1], // EEE
    awayTeam: MOCK_TEAMS[3], // BBA
    homeScore: 0,
    awayScore: 0,
    status: "Scheduled",
    startTime: "2026-03-29T18:00:00Z",
    venue: "Central Campus Stadium",
    events: [],
    referee: "Coach K. Stevens",
  },
  {
    id: "match-106",
    tournamentId: "tourn-1",
    tournamentName: "Inter-Department Football Champions Trophy 2026",
    stage: "Grand Final",
    homeTeam: MOCK_TEAMS[0],
    awayTeam: MOCK_TEAMS[1],
    homeScore: 0,
    awayScore: 0,
    status: "Scheduled",
    startTime: "2026-03-30T16:30:00Z",
    venue: "Central Campus Stadium — Main Pitch",
    events: [],
    referee: "International Guest Referee",
  },
];

export const matchService = {
  getMatches: async (): Promise<Match[]> => MOCK_MATCHES,
  getMatchById: async (id: string): Promise<Match | undefined> =>
    MOCK_MATCHES.find((m) => m.id === id),
  getLiveMatches: async (): Promise<Match[]> =>
    MOCK_MATCHES.filter((m) => m.status === "Live"),
};
