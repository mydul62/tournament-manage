export interface SocketClient {
  connected: boolean;
  emit: (event: string, data?: unknown) => void;
  on: (event: string, callback: (data: any) => void) => void;
  off: (event: string) => void;
}

const BACKEND_SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:5000";

export const getSocket = (): SocketClient => {
  return {
    connected: true,
    emit: (event, data) => console.log(`[Socket.io -> ${BACKEND_SOCKET_URL}] Emit:`, event, data),
    on: (event, callback) => console.log(`[Socket.io -> ${BACKEND_SOCKET_URL}] Listen:`, event),
    off: (event) => console.log(`[Socket.io -> ${BACKEND_SOCKET_URL}] Off:`, event),
  };
};
