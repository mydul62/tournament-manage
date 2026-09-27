import { Response } from "express";

export interface ApiResponseOptions<T> {
  statusCode: number;
  success: boolean;
  message?: string;
  data?: T;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
}

export function sendResponse<T>(res: Response, data: ApiResponseOptions<T>): void {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message || "Operation completed successfully",
    data: data.data || null,
    meta: data.meta || undefined,
  });
}
