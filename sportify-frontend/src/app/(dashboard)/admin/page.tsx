"use client";

import Link from "next/link";
import { Settings, Trophy, Radio, Plus, ShieldCheck, CheckCircle2 } from "lucide-react";
import { DashboardShell } from "@/components/common/dashboard-shell";
import { MOCK_TOURNAMENTS } from "@/services/tournament-service";
import { MOCK_MATCHES } from "@/services/match-service";

export default function AdminPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-100 flex items-center gap-3">
              <Settings className="w-8 h-8 text-emerald-400" />
              Administrative Control Console
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
              Manage campus tournaments, schedule fixtures, and trigger real-time live score updates
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin/tournaments"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-950 flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> New Tournament
            </Link>
            <Link
              href="/admin/matches"
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-extrabold text-xs border border-slate-800 flex items-center gap-1.5"
            >
              <Radio className="w-4 h-4 text-rose-400 animate-pulse" /> Live Score Control
            </Link>
          </div>
        </div>

        {/* Quick Admin Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-3xl space-y-4 border border-emerald-500/20">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 font-black">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-slate-100">Tournament Management</h3>
              <p className="text-xs text-slate-400 mt-1">
                Create new sports leagues, define group stages, set prize pools and upload rules.
              </p>
            </div>
            <Link
              href="/admin/tournaments"
              className="text-xs font-bold text-emerald-400 hover:underline inline-block pt-2"
            >
              Manage 4 Active Tournaments →
            </Link>
          </div>

          <div className="glass-card p-6 rounded-3xl space-y-4 border border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-rose-400 font-black">
              <Radio className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-slate-100">Live Score Controller</h3>
              <p className="text-xs text-slate-400 mt-1">
                Input live goal events, yellow cards, red cards, and substitute players during active matches.
              </p>
            </div>
            <Link
              href="/admin/matches"
              className="text-xs font-bold text-emerald-400 hover:underline inline-block pt-2"
            >
              Open Match Controller →
            </Link>
          </div>

          <div className="glass-card p-6 rounded-3xl space-y-4 border border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 font-black">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-slate-100">Captain & Squad Approvals</h3>
              <p className="text-xs text-slate-400 mt-1">
                Approve submitted player rosters from department captains and verify eligibility.
              </p>
            </div>
            <span className="text-xs font-bold text-slate-500 inline-block pt-2">
              All 32 Squads Approved ✓
            </span>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
