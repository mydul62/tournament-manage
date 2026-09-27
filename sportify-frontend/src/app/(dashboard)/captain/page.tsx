"use client";

import Link from "next/link";
import { Shield, Users, Trophy, Plus, ArrowRight } from "lucide-react";
import { DashboardShell } from "@/components/common/dashboard-shell";
import { MOCK_TOURNAMENTS } from "@/services/tournament-service";

export default function CaptainDashboardPage() {
  const team = MOCK_TOURNAMENTS[0].teams[0];

  return (
    <DashboardShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-100 flex items-center gap-3">
              <Shield className="w-8 h-8 text-emerald-400" />
              Captain Squad Portal — {team.name}
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
              Manage your departmental squad roster, starting XI, and match day lineups
            </p>
          </div>

          <Link
            href="/captain/squad"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-950 flex items-center gap-2"
          >
            <Users className="w-4 h-4" /> Manage Squad Roster
          </Link>
        </div>

        {/* Team Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-3xl space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase">Played / Points</span>
            <p className="text-3xl font-black text-emerald-400">{team.played} Played • {team.points} Pts</p>
            <p className="text-xs text-slate-400">Position 1st in Group A</p>
          </div>

          <div className="glass-card p-6 rounded-3xl space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase">Goals For / Against</span>
            <p className="text-3xl font-black text-slate-100">{team.goalsFor} : {team.goalsAgainst}</p>
            <p className="text-xs text-emerald-400 font-semibold">Goal Difference +{team.goalsFor - team.goalsAgainst}</p>
          </div>

          <div className="glass-card p-6 rounded-3xl space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase">Active Squad Members</span>
            <p className="text-3xl font-black text-amber-400">18 Players</p>
            <p className="text-xs text-slate-400">Eligible for Round 6</p>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
