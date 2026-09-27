"use client";

import { useState, useEffect } from "react";
import { User, UserRole } from "@/types";
import { mockAdminUser, mockStandardUser } from "@/store/use-auth-store";

export function useAuth() {
  const [role, setRole] = useState<UserRole>("Admin");
  const [user, setUser] = useState<User>(mockAdminUser);

  useEffect(() => {
    const savedRole = localStorage.getItem("sportify_user_role") as UserRole;
    if (savedRole && (savedRole === "Admin" || savedRole === "User")) {
      setRole(savedRole);
      setUser(savedRole === "Admin" ? mockAdminUser : mockStandardUser);
    }
  }, []);

  const switchRole = (newRole: UserRole) => {
    setRole(newRole);
    setUser(newRole === "Admin" ? mockAdminUser : mockStandardUser);
    localStorage.setItem("sportify_user_role", newRole);
  };

  return {
    user,
    role,
    switchRole,
    isAdmin: role === "Admin",
    isUser: role === "User",
  };
}
