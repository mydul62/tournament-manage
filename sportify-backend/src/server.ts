import http from "http";
import app from "./app";
import { env } from "./config/env";
import { initSocket } from "./utils/socket";

const server = http.createServer(app);

// Initialize Socket.io real-time engine
const io = initSocket(server);

server.listen(env.port, () => {
  console.log(`
 🚀 =================================================== 🚀
    SPORTIFY Backend Engine is running!
    - Port: ${env.port}
    - API Endpoint: http://localhost:${env.port}/api/v1
    - Socket.io: Enabled
    - Environment: ${env.nodeEnv}
 🚀 =================================================== 🚀
  `);
});

process.on("unhandledRejection", (error) => {
  console.error("Unhandled Rejection:", error);
  server.close(() => process.exit(1));
});
