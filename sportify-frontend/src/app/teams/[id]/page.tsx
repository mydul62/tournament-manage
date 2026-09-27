"use client";

import { use } from "react";
import Link from "next/link";
import { Shield, ArrowLeft, Trophy, Users, Star } from "lucide-react";
import { DashboardShell } from "@/components/common/dashboard-shell";
import { MOCK_TEAMS } from "@/services/tournament-service";
import { MOCK_FEATURED_PLAYER } from "@/components/home/featured-player";

export default function TeamDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const team = MOCK_TEAMS.find((t) => t.id === resolvedParams.id) || MOCK_TEAMS[0];

  return (
    <DashboardShell>
      <div className="space-y-6">
        <Link
          href="/teams"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Teams
        </Link>

        {/* Team Banner */}
        <div className="glass-card p-8 rounded-3xl relative overflow-hidden border border-emerald-500/30 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 font-black text-3xl shadow-2xl shrink-0">
            {team.shortName}
          </div>

          <div className="flex-1 text-center sm:text-left space-y-1">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-100">{team.name}</h1>
            <p className="text-xs font-semibold text-emerald-400">{team.department}</p>
            <p className="text-xs text-slate-400">Team Captain: {team.captainName}</p>
          </div>

          <div className="flex gap-3 text-center shrink-0">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 min-w-[85px]">
              <span className="text-2xl font-black text-emerald-400">{team.points}</span>
              <span className="block text-[10px] uppercase font-bold text-slate-400 mt-1">Points</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 min-w-[85px]">
              <span className="text-2xl font-black text-slate-100">{team.won}W - {team.lost}L</span>
              <span className="block text-[10px] uppercase font-bold text-slate-400 mt-1">Record</span>
            </div>
          </div>
        </div>

        {/* Squad Roster */}
        <div className="glass-card p-6 rounded-3xl space-y-4">
          <h3 className="font-extrabold text-base text-slate-100 flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-400" />
            Official Squad Lineup
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center font-black text-emerald-400 text-sm">
                #10
              </div>
              <div>
                <p className="font-bold text-xs text-slate-100">{MOCK_FEATURED_PLAYER.name}</p>
                <p className="text-[11px] text-slate-400">{MOCK_FEATURED_PLAYER.position}</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center font-black text-slate-300 text-sm">
                #8
              </div>
              <div>
                <p className="font-bold text-xs text-slate-100">Liam Johnson</p>
                <p className="text-[11px] text-slate-400">Midfielder</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center font-black text-slate-300 text-sm">
                #11
              </div>
              <div>
                <p className="font-bold text-xs text-slate-100">Ethan Hunt</p>
                <p className="text-[11px] text-slate-400">Winger</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
