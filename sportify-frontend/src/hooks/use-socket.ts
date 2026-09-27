"use client";

import { useEffect, useState } from "react";
import { getSocket, SocketClient } from "@/lib/socket";

export function useSocket() {
  const [socket, setSocket] = useState<SocketClient | null>(null);

  useEffect(() => {
    const s = getSocket();
    setSocket(s);
  }, []);

  return socket;
}
