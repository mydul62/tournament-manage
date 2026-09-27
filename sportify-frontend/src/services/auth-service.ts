import { User } from "@/types";
import { mockUser } from "@/store/use-auth-store";

export const authService = {
  getCurrentUser: async (): Promise<User> => {
    return mockUser;
  },
  login: async (email: string): Promise<User> => {
    return { ...mockUser, email };
  },
  logout: async (): Promise<void> => {
    console.log("Logged out");
  },
};
