import { User, UserRole } from "@/types";

export const mockAdminUser: User = {
  id: "usr-admin",
  name: "Alex Vance (Admin)",
  email: "admin@sportify.edu",
  role: "Admin",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
};

export const mockStandardUser: User = {
  id: "usr-[user]",
  name: "Jordan Lee (Spectator)",
  email: "jordan@university.edu",
  role: "User",
  avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
};

export const mockUser = mockAdminUser;
