// Socket client interface placeholder for real-time match events
export interface SocketClient {
  connected: boolean;
  emit: (event: string, data: unknown) => void;
  on: (event: string, callback: (data: unknown) => void) => void;
  off: (event: string) => void;
}

export const getSocket = (): SocketClient => {
  return {
    connected: true,
    emit: (event, data) => console.log(`[Socket Emit] ${event}`, data),
    on: (event, callback) => console.log(`[Socket Listen] ${event}`),
    off: (event) => console.log(`[Socket Off] ${event}`),
  };
};
