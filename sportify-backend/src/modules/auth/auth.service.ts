import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { env } from "../../config/env";
import { ApiError } from "../../middlewares/error.middleware";

// In-memory / mock store fallback for standalone demonstration
const MOCK_USERS = [
  {
    id: "usr-admin-1",
    name: "Alex Vance (Admin)",
    email: "admin@sportify.edu",
    passwordHash: bcrypt.hashSync("admin123", 10),
    role: "Admin",
  },
  {
    id: "usr-user-1",
    name: "Jordan Lee (Spectator)",
    email: "user@sportify.edu",
    passwordHash: bcrypt.hashSync("user123", 10),
    role: "User",
  },
];

export const authService = {
  login: async (email: string, pass: string) => {
    const user = MOCK_USERS.find((u) => u.email === email);
    if (!user) {
      throw new ApiError(401, "Invalid email or password");
    }

    const isValid = await bcrypt.compare(pass, user.passwordHash);
    if (!isValid) {
      throw new ApiError(401, "Invalid email or password");
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      env.jwtSecret,
      { expiresIn: "7d" }
    );

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  },

  register: async (name: string, email: string, pass: string, role: "Admin" | "User" = "User") => {
    const existing = MOCK_USERS.find((u) => u.email === email);
    if (existing) {
      throw new ApiError(400, "User with this email already exists");
    }

    const newUser = {
      id: `usr-${Date.now()}`,
      name,
      email,
      passwordHash: await bcrypt.hash("pass", 10),
      role,
    };

    MOCK_USERS.push(newUser);

    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, role: newUser.role },
      env.jwtSecret,
      { expiresIn: "7d" }
    );

    return {
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    };
  },
};
