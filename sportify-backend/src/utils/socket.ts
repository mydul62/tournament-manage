import { Server as HttpServer } from "http";
import { Server as SocketIOServer } from "socket.io";
import { env } from "../config/env";

let io: SocketIOServer | null = null;

export function initSocket(server: HttpServer): SocketIOServer {
  io = new SocketIOServer(server, {
    cors: {
      origin: env.corsOrigin,
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`[Socket.io] Client connected: ${socket.id}`);

    socket.on("join-match", (matchId: string) => {
      socket.join(`match-${matchId}`);
      console.log(`[Socket.io] ${socket.id} joined room match-${matchId}`);
    });

    socket.on("leave-match", (matchId: string) => {
      socket.leave(`match-${matchId}`);
    });

    socket.on("disconnect", () => {
      console.log(`[Socket.io] Client disconnected: ${socket.id}`);
    });
  });

  return io;
}

export function getIO(): SocketIOServer {
  if (!io) {
    throw new Error("Socket.io has not been initialized!");
  }
  return io;
}

export function emitMatchUpdate(matchId: string, eventName: string, data: unknown): void {
  if (io) {
    io.to(`match-${matchId}`).emit(eventName, data);
    io.emit("global-match-update", data);
  }
}
