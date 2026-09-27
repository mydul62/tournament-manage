export type SportCategory = "Football" | "Cricket" | "Basketball" | "Badminton" | "Volleyball";
export type TournamentStatus = "Upcoming" | "Ongoing" | "Completed" | "Draft";

export interface Team {
  id: string;
  name: string;
  shortName: string;
  logoUrl?: string;
  captainName: string;
  department: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export interface Tournament {
  id: string;
  name: string;
  slug: string;
  sport: SportCategory;
  season: string;
  status: TournamentStatus;
  startDate: string;
  endDate: string;
  bannerUrl?: string;
  totalTeams: number;
  prizePool?: string;
  description: string;
  teams: Team[];
}

export interface StandingRow {
  position: number;
  team: Team;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: ("W" | "D" | "L")[];
}
