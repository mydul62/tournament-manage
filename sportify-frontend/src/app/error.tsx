"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
      <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400">
        <h2 className="text-xl font-bold mb-2">Something went wrong!</h2>
        <p className="text-sm text-red-300 max-w-md">{error.message || "An unexpected error occurred."}</p>
      </div>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-900/30"
      >
        Try Again
      </button>
    </div>
  );
}
