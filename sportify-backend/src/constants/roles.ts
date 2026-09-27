export const USER_ROLES = {
  ADMIN: "Admin",
  USER: "User",
} as const;

export type RoleType = typeof USER_ROLES[keyof typeof USER_ROLES];
