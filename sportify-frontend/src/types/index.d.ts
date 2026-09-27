export * from "./tournament";
export * from "./match";
export * from "./player";

export type UserRole = "Admin" | "Captain" | "User";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  teamId?: string;
}
