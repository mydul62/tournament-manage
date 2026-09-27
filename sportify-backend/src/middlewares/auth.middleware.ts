import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { ApiError } from "./error.middleware";

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: "Admin" | "User";
  };
}

export function authMiddleware(requiredRole?: "Admin" | "User") {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new ApiError(401, "Authentication token missing or invalid");
      }

      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, env.jwtSecret) as {
        id: string;
        email: string;
        role: "Admin" | "User";
      };

      req.user = decoded;

      if (requiredRole && decoded.role !== requiredRole && decoded.role !== "Admin") {
        throw new ApiError(403, "Forbidden: insufficient permissions");
      }

      next();
    } catch (err) {
      next(err);
    }
  };
}
