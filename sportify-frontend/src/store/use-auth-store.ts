import { User } from "@/types";

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: User) => void;
  logout: () => void;
}

// Simple state placeholder ready for zustand / react state integration
export const mockUser: User = {
  id: "usr-1",
  name: "Alex Vance",
  email: "alex.vance@university.edu",
  role: "Admin",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
  teamId: "team-cse-1",
};
