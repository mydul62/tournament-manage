"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, Star, Flame, Trophy, Award, Shield } from "lucide-react";
import { DashboardShell } from "@/components/common/dashboard-shell";
import { MOCK_FEATURED_PLAYER } from "@/components/home/featured-player";

export default function PlayerProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const player = MOCK_FEATURED_PLAYER; // Mock default

  return (
    <DashboardShell>
      <div className="space-y-6">
        <Link
          href="/players"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Players
        </Link>

        {/* Player Header Banner */}
        <div className="glass-card p-8 rounded-3xl relative overflow-hidden border border-emerald-500/30 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative shrink-0">
            <img
              src={player.avatarUrl}
              alt={player.name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl object-cover ring-4 ring-emerald-500/50 shadow-2xl"
            />
            <span className="absolute -bottom-2 -right-2 px-3 py-1 rounded-xl bg-emerald-500 text-slate-950 font-black text-sm shadow-lg">
              #{player.jerseyNumber}
            </span>
          </div>

          <div className="flex-1 text-center sm:text-left space-y-2">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-wider border border-emerald-500/30">
                {player.position}
              </span>
              <span className="text-xs text-slate-400 font-bold">{player.department}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-100">{player.name}</h1>
            <p className="text-xs text-slate-400 font-medium max-w-lg">{player.bio}</p>
          </div>

          <div className="flex gap-3 text-center shrink-0">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 min-w-[85px]">
              <span className="text-2xl font-black text-emerald-400">{player.stats.goals}</span>
              <span className="block text-[10px] uppercase font-bold text-slate-400 mt-1">Goals</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 min-w-[85px]">
              <span className="text-2xl font-black text-amber-400">{player.stats.rating}</span>
              <span className="block text-[10px] uppercase font-bold text-slate-400 mt-1">Rating</span>
            </div>
          </div>
        </div>

        {/* Career & Match Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 rounded-3xl space-y-4">
            <h3 className="font-black text-base text-slate-100 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-emerald-400" />
              Tournament Performance Summary
            </h3>
            <div className="space-y-3 text-xs font-semibold">
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900">
                <span className="text-slate-400">Matches Played</span>
                <span className="text-slate-100 font-bold">{player.stats.matchesPlayed}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900">
                <span className="text-slate-400">Goals Scored</span>
                <span className="text-emerald-400 font-bold">{player.stats.goals}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900">
                <span className="text-slate-400">Assists Provided</span>
                <span className="text-slate-100 font-bold">{player.stats.assists}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900">
                <span className="text-slate-400">Yellow / Red Cards</span>
                <span className="text-amber-400 font-bold">
                  {player.stats.yellowCards} Y / {player.stats.redCards} R
                </span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-3xl space-y-4">
            <h3 className="font-black text-base text-slate-100 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              Badges & Milestones
            </h3>
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <Flame className="w-6 h-6 text-amber-400" />
                <div>
                  <p className="font-bold text-xs text-slate-200">Golden Boot Contender</p>
                  <p className="text-[11px] text-slate-400">Leading goalscorer in Spring 2026 League</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
