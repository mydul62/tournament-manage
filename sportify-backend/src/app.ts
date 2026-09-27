import express, { Application, Request, Response } from "express";
import cors from "cors";
import { env } from "./config/env";
import { apiRoutes } from "./routes";
import { globalErrorHandler } from "./middlewares/error.middleware";

const app: Application = express();

app.use(cors({ origin: env.corsOrigin, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root health check endpoint
app.get("/", (req: Request, res: Response) => {
  res.json({
    status: "online",
    service: "SPORTIFY Backend API Engine",
    version: "v1",
    timestamp: new Date().toISOString(),
  });
});

// Primary API V1 router
app.use("/api/v1", apiRoutes);

// Global Error Handler
app.use(globalErrorHandler);

export default app;
