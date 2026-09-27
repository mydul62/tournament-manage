"use client";

import { useState } from "react";
import { User } from "@/types";
import { mockUser } from "@/store/use-auth-store";

export function useAuth() {
  const [user] = useState<User | null>(mockUser);
  const [isLoading] = useState(false);

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    isAdmin: user?.role === "Admin",
    isCaptain: user?.role === "Captain" || user?.role === "Admin",
  };
}
