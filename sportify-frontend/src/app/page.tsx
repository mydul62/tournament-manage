import Link from "next/link";
import {
  Trophy,
  Swords,
  Users,
  Flame,
  Plus,
  ArrowRight,
  Shield,
  Activity,
  Calendar,
} from "lucide-react";
import { DashboardShell } from "@/components/common/dashboard-shell";
import { StatCard } from "@/components/common/stat-card";
import { LiveMatchCard } from "@/components/home/live-match-card";
import { MOCK_MATCHES } from "@/services/match-service";
import { MOCK_TOURNAMENTS } from "@/services/tournament-service";

export default function HomePage() {
  const liveMatch = MOCK_MATCHES[0];
  const tournament = MOCK_TOURNAMENTS[0];

  return (
    <DashboardShell>
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-950 border border-emerald-500/20 shadow-2xl">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
            <Flame className="w-3.5 h-3.5 fill-emerald-400" />
            SPRING 2026 CAMPUS LEAGUE SEASON
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-100 tracking-tight leading-tight">
            Welcome to <span className="emerald-gradient-text">SPORTIFY Arena</span>
          </h1>
          <p className="text-sm text-slate-400 font-medium leading-relaxed">
            Real-time campus tournament scores, live league standings, fixture updates, and player statistics all in one unified platform.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/tournaments"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-900/40 transition-all flex items-center gap-2"
            >
              <Trophy className="w-4 h-4" />
              Explore Tournaments
            </Link>
            <Link
              href="/matches"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs border border-slate-800 transition-all flex items-center gap-2"
            >
              <Swords className="w-4 h-4 text-emerald-400" />
              Match Center
            </Link>
          </div>
        </div>
      </div>

      {/* Stat Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Active Tournaments"
          value="4"
          change="+2 this month"
          isPositive={true}
          icon={Trophy}
          subtitle="Football & Cricket"
        />
        <StatCard
          title="Live Matches"
          value="1"
          change="In progress"
          isPositive={true}
          icon={Activity}
          subtitle="Inter-Dept Round 6"
        />
        <StatCard
          title="Total Goals Scored"
          value="87"
          change="+14 this week"
          isPositive={true}
          icon={Flame}
          subtitle="Avg 2.8 / match"
        />
        <StatCard
          title="Registered Squads"
          value="32"
          change="Full Capacity"
          isPositive={true}
          icon={Users}
          subtitle="Across 8 Departments"
        />
      </div>

      {/* Main Two Column Layout: Live Match Highlight & League Standings Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Live Match & Upcoming Fixtures (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              Featured Live Action
            </h2>
            <Link
              href="/matches"
              className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1"
            >
              All Matches <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <LiveMatchCard match={liveMatch} />

          {/* Upcoming Fixtures Showcase */}
          <div className="glass-card p-6 rounded-3xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-extrabold text-sm text-slate-200 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-400" />
                Upcoming Fixtures Today
              </h3>
              <span className="text-xs text-slate-400 font-medium">March 27, 2026</span>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between gap-4 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-400 px-2 py-1 rounded bg-slate-800">
                    17:00
                  </span>
                  <div>
                    <p className="font-bold text-xs text-slate-200">Mechanical Titans vs BBA Warriors</p>
                    <p className="text-[11px] text-slate-400">East Turf Field • Group B</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-xl bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                  Scheduled
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Standings Snapshot */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-slate-100 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-emerald-400" />
              League Table
            </h2>
            <Link
              href="/tournaments/tourn-1"
              className="text-xs font-bold text-emerald-400 hover:underline"
            >
              Full Table
            </Link>
          </div>

          <div className="glass-card p-5 rounded-3xl space-y-4">
            <div className="flex items-center justify-between text-[11px] font-extrabold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-800">
              <span>Team</span>
              <div className="flex gap-4">
                <span>P</span>
                <span>GD</span>
                <span className="text-emerald-400">PTS</span>
              </div>
            </div>

            <div className="space-y-2 text-xs font-semibold">
              {tournament.teams.map((t, idx) => (
                <div
                  key={t.id}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/60 border border-slate-800/50 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black ${
                        idx === 0
                          ? "bg-emerald-500 text-slate-950"
                          : "bg-slate-800 text-slate-300"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="text-slate-200">{t.name}</span>
                  </div>

                  <div className="flex items-center gap-4 text-slate-300 font-bold">
                    <span>{t.played}</span>
                    <span className="text-slate-400">+{t.goalsFor - t.goalsAgainst}</span>
                    <span className="text-emerald-400 font-extrabold">{t.points}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/tournaments"
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs border border-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              View All Groups
            </Link>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
