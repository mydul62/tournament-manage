export interface PlayerStat {
  matchesPlayed: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  rating: number;
}

export interface Player {
  id: string;
  name: string;
  jerseyNumber: number;
  position: string;
  teamId: string;
  teamName: string;
  department: string;
  avatarUrl?: string;
  bio?: string;
  stats: PlayerStat;
}
