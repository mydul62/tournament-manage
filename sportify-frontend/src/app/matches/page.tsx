"use client";

import { useState } from "react";
import Link from "next/link";
import { Swords, Radio, Calendar, MapPin, ArrowRight } from "lucide-react";
import { DashboardShell } from "@/components/common/dashboard-shell";
import { MOCK_MATCHES } from "@/services/match-service";

export default function MatchesPage() {
  const [filter, setFilter] = useState<"All" | "Live" | "Finished">("All");

  const matches = MOCK_MATCHES.filter((m) => {
    if (filter === "Live") return m.status === "Live";
    if (filter === "Finished") return m.status === "Finished";
    return true;
  });

  return (
    <DashboardShell>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-100 flex items-center gap-3">
            <Swords className="w-8 h-8 text-emerald-400" />
            Match Center
          </h1>
          <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
            Real-time live scores, upcoming campus league fixtures, and detailed event timelines
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800">
          {(["All", "Live", "Finished"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filter === tab
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab === "Live" && <Radio className="w-3 h-3 inline mr-1 animate-pulse" />}
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Match Cards List */}
      <div className="space-y-4">
        {matches.map((match) => {
          const isLive = match.status === "Live";
          return (
            <div
              key={match.id}
              className={`glass-card p-6 rounded-3xl relative overflow-hidden transition-all ${
                isLive ? "border-emerald-500/40 shadow-xl" : "border-slate-800"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold">
                  <span
                    className={`px-2.5 py-0.5 rounded-full font-black uppercase text-[10px] tracking-wider border ${
                      isLive
                        ? "bg-rose-500/20 text-rose-400 border-rose-500/30"
                        : "bg-slate-800 text-slate-300 border-slate-700"
                    }`}
                  >
                    {isLive ? "LIVE • 62'" : match.status}
                  </span>
                  <span>{match.tournamentName}</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{match.venue}</span>
                </div>
              </div>

              {/* Scoreboard Row */}
              <div className="py-6 flex items-center justify-between gap-4">
                <div className="flex-1 text-right">
                  <h3 className="font-extrabold text-lg text-slate-100">{match.homeTeam.name}</h3>
                  <p className="text-xs text-slate-400">{match.homeTeam.department}</p>
                </div>

                <div className="px-6 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-center font-black text-2xl text-emerald-400">
                  {match.homeScore} : {match.awayScore}
                </div>

                <div className="flex-1 text-left">
                  <h3 className="font-extrabold text-lg text-slate-100">{match.awayTeam.name}</h3>
                  <p className="text-xs text-slate-400">{match.awayTeam.department}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Referee: {match.referee || "Official Staff"}</span>
                <Link
                  href={`/matches/${match.id}`}
                  className="font-bold text-emerald-400 hover:underline flex items-center gap-1"
                >
                  Full Match Center <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardShell>
  );
}
