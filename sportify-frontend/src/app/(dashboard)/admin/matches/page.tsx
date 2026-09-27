"use client";

import { useState } from "react";
import { Radio, Plus, Minus, Goal, AlertTriangle, ShieldCheck } from "lucide-react";
import { DashboardShell } from "@/components/common/dashboard-shell";
import { MOCK_MATCHES } from "@/services/match-service";

export default function AdminMatchesPage() {
  const [match, setMatch] = useState(MOCK_MATCHES[0]);

  const handleScore = (team: "home" | "away", delta: number) => {
    setMatch((prev) => ({
      ...prev,
      homeScore: team === "home" ? Math.max(0, prev.homeScore + delta) : prev.homeScore,
      awayScore: team === "away" ? Math.max(0, prev.awayScore + delta) : prev.awayScore,
    }));
  };

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-black text-slate-100 flex items-center gap-2">
            <Radio className="w-7 h-7 text-rose-400 animate-pulse" />
            Live Match Controller
          </h1>
          <p className="text-xs text-slate-400 mt-1">Real-time score update trigger & live event logger</p>
        </div>

        {/* Live Score Controller Panel */}
        <div className="glass-card p-6 rounded-3xl space-y-6 border border-emerald-500/30">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-bold text-slate-400">
            <span>{match.tournamentName}</span>
            <span className="text-emerald-400 font-extrabold uppercase">Live Control Room</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center">
            {/* Home Control */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="font-extrabold text-base text-slate-100">{match.homeTeam.name}</h3>
              <div className="text-4xl font-black text-emerald-400">{match.homeScore}</div>
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => handleScore("home", 1)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" /> Goal (+1)
                </button>
                <button
                  onClick={() => handleScore("home", -1)}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
                >
                  <Minus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Away Control */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="font-extrabold text-base text-slate-100">{match.awayTeam.name}</h3>
              <div className="text-4xl font-black text-emerald-400">{match.awayScore}</div>
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => handleScore("away", 1)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" /> Goal (+1)
                </button>
                <button
                  onClick={() => handleScore("away", -1)}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
                >
                  <Minus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
