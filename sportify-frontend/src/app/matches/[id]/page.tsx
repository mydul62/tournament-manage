"use client";

import { use } from "react";
import Link from "next/link";
import { Radio, MapPin, Trophy, Shield, ArrowLeft, Clock } from "lucide-react";
import { DashboardShell } from "@/components/common/dashboard-shell";
import { MOCK_MATCHES } from "@/services/match-service";

export default function MatchDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const match = MOCK_MATCHES.find((m) => m.id === resolvedParams.id) || MOCK_MATCHES[0];

  return (
    <DashboardShell>
      <div className="space-y-6">
        {/* Back Link */}
        <Link
          href="/matches"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Match Center
        </Link>

        {/* Live Score Hero Card */}
        <div className="glass-card p-8 rounded-3xl relative overflow-hidden border border-emerald-500/30">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-black uppercase tracking-wider border border-rose-500/30 flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              {match.status === "Live" ? "LIVE • 62'" : match.status}
            </span>
            <span className="text-xs font-semibold text-slate-400">{match.tournamentName}</span>
          </div>

          <div className="py-8 flex items-center justify-between gap-6">
            <div className="flex-1 text-center sm:text-right space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 font-black text-2xl mx-auto sm:ml-auto sm:mr-0 shadow-lg">
                {match.homeTeam.shortName}
              </div>
              <h2 className="text-xl font-extrabold text-slate-100">{match.homeTeam.name}</h2>
              <p className="text-xs text-slate-400">{match.homeTeam.department}</p>
            </div>

            <div className="px-8 py-4 rounded-3xl bg-slate-900/90 border border-slate-800 text-center shadow-2xl">
              <span className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-wider">
                {match.homeScore} : {match.awayScore}
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-2 block">
                Official Score
              </span>
            </div>

            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 font-black text-2xl mx-auto sm:mr-auto sm:ml-0 shadow-lg">
                {match.awayTeam.shortName}
              </div>
              <h2 className="text-xl font-extrabold text-slate-100">{match.awayTeam.name}</h2>
              <p className="text-xs text-slate-400">{match.awayTeam.department}</p>
            </div>
          </div>
        </div>

        {/* Event Timeline */}
        <div className="glass-card p-6 rounded-3xl space-y-4">
          <h3 className="text-lg font-black text-slate-100 flex items-center gap-2">
            <Clock className="w-5 h-5 text-emerald-400" />
            Match Event Timeline
          </h3>

          <div className="space-y-3 pt-2">
            {match.events.map((ev) => (
              <div
                key={ev.id}
                className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-4 text-xs font-semibold"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400 font-black">
                    {ev.minute}'
                  </span>
                  <div>
                    <p className="text-slate-100 font-extrabold">{ev.playerName}</p>
                    <p className="text-slate-400 text-[11px]">{ev.details || ev.type}</p>
                  </div>
                </div>

                <span
                  className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider ${
                    ev.type === "Goal"
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                  }`}
                >
                  {ev.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
