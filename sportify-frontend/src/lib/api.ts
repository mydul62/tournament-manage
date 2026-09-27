const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

export async function fetcher<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = endpoint.startsWith("http") ? endpoint : `${BACKEND_URL}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;
  
  const token = typeof window !== "undefined" ? localStorage.getItem("sportify_auth_token") : null;
  
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options?.headers || {}),
  };

  try {
    const res = await fetch(url, { ...options, headers });
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `API Error: ${res.statusText}`);
    }
    const data = await res.json();
    return data.data !== undefined ? data.data : data;
  } catch (err: any) {
    console.warn(`[Backend API Connection] Falling back to local data for ${endpoint}:`, err.message);
    throw err;
  }
}
