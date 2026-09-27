"use client";

import { use, useState } from "react";
import Link from "next/link";
import {
  Trophy,
  Calendar,
  Users,
  Shield,
  BarChart2,
  List,
  CheckCircle,
} from "lucide-react";
import { DashboardShell } from "@/components/common/dashboard-shell";
import { MOCK_TOURNAMENTS } from "@/services/tournament-service";
import { MOCK_MATCHES } from "@/services/match-service";

export default function TournamentDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const tournament =
    MOCK_TOURNAMENTS.find((t) => t.id === resolvedParams.id || t.slug === resolvedParams.id) ||
    MOCK_TOURNAMENTS[0];

  const [activeTab, setActiveTab] = useState<"overview" | "standings" | "fixtures" | "stats">("overview");

  return (
    <DashboardShell>
      {/* Tournament Header Banner */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-emerald-500/30">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 font-black shadow-xl">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-wider border border-emerald-500/30">
                  {tournament.sport} • {tournament.season}
                </span>
                <span className="text-xs font-bold text-slate-400">
                  {tournament.status}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-100 mt-1">
                {tournament.name}
              </h1>
            </div>
          </div>

          {tournament.prizePool && (
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-right">
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">
                Prize Pool
              </span>
              <span className="text-lg font-black text-amber-300">
                {tournament.prizePool}
              </span>
            </div>
          )}
        </div>

        {/* Tab Navigation Controls */}
        <div className="pt-4 flex items-center gap-2 overflow-x-auto">
          {[
            { id: "overview", label: "Overview", icon: Trophy },
            { id: "standings", label: "Standings", icon: List },
            { id: "fixtures", label: "Fixtures & Results", icon: Calendar },
            { id: "stats", label: "Statistics", icon: BarChart2 },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-950"
                    : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Display */}
      {activeTab === "overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main League Standings Table */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-black text-slate-100 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-emerald-400" />
              League Table
            </h2>

            <div className="glass-card p-5 rounded-3xl overflow-x-auto">
              <table className="w-full text-left text-xs font-semibold">
                <thead>
                  <tr className="border-b border-slate-800 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider pb-3">
                    <th className="pb-3 pl-2">#</th>
                    <th className="pb-3">Team</th>
                    <th className="pb-3 text-center">P</th>
                    <th className="pb-3 text-center">W</th>
                    <th className="pb-3 text-center">D</th>
                    <th className="pb-3 text-center">L</th>
                    <th className="pb-3 text-center">GD</th>
                    <th className="pb-3 text-right pr-2 text-emerald-400">PTS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {tournament.teams.map((team, idx) => (
                    <tr key={team.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 pl-2">
                        <span
                          className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-black ${
                            idx === 0
                              ? "bg-emerald-500 text-slate-950"
                              : "bg-slate-800 text-slate-300"
                          }`}
                        >
                          {idx + 1}
                        </span>
                      </td>
                      <td className="py-3 font-bold text-slate-200">
                        {team.name}
                        <span className="block text-[10px] text-slate-400 font-medium">
                          {team.department}
                        </span>
                      </td>
                      <td className="py-3 text-center text-slate-300">{team.played}</td>
                      <td className="py-3 text-center text-slate-300">{team.won}</td>
                      <td className="py-3 text-center text-slate-300">{team.drawn}</td>
                      <td className="py-3 text-center text-slate-300">{team.lost}</td>
                      <td className="py-3 text-center text-slate-300 font-bold">
                        +{team.goalsFor - team.goalsAgainst}
                      </td>
                      <td className="py-3 text-right pr-2 font-black text-emerald-400 text-sm">
                        {team.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Specs Column */}
          <div className="space-y-6">
            <h2 className="text-lg font-black text-slate-100">Tournament Information</h2>

            <div className="glass-card p-5 rounded-3xl space-y-4 text-xs font-semibold">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-slate-400">Registered Teams</span>
                <span className="text-slate-200 font-bold">{tournament.totalTeams} Teams</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-slate-400">Start Date</span>
                <span className="text-slate-200 font-bold">{tournament.startDate}</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-slate-400">End Date</span>
                <span className="text-slate-200 font-bold">{tournament.endDate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Status</span>
                <span className="text-emerald-400 font-bold">{tournament.status}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "standings" && (
        <div className="glass-card p-6 rounded-3xl space-y-4">
          <h3 className="text-base font-extrabold text-slate-100">Official Group Standings</h3>
          <p className="text-xs text-slate-400">
            Standings are automatically calculated after every official match result approval.
          </p>
          {/* Table display */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-semibold">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="pb-3">Pos</th>
                  <th className="pb-3">Squad</th>
                  <th className="pb-3 text-center">Played</th>
                  <th className="pb-3 text-center">Points</th>
                </tr>
              </thead>
              <tbody>
                {tournament.teams.map((t, idx) => (
                  <tr key={t.id} className="border-b border-slate-800/50">
                    <td className="py-2.5 font-bold text-slate-400">{idx + 1}</td>
                    <td className="py-2.5 font-bold text-slate-200">{t.name}</td>
                    <td className="py-2.5 text-center">{t.played}</td>
                    <td className="py-2.5 text-center font-black text-emerald-400">{t.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "fixtures" && (
        <div className="space-y-4">
          <h3 className="text-base font-extrabold text-slate-100">Match Schedules & Results</h3>
          <div className="space-y-3">
            {MOCK_MATCHES.map((match) => (
              <div
                key={match.id}
                className="glass-card p-4 rounded-2xl flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-slate-400">{match.stage}</span>
                  <div className="font-extrabold text-sm text-slate-200">
                    {match.homeTeam.name} vs {match.awayTeam.name}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-emerald-400">
                    {match.homeScore} - {match.awayScore} ({match.status})
                  </span>
                  <Link
                    href={`/matches/${match.id}`}
                    className="text-xs font-bold text-emerald-400 hover:underline"
                  >
                    Match Center →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "stats" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 rounded-3xl space-y-3">
            <h4 className="font-extrabold text-sm text-slate-100">Top Goalscorers</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900">
                <span className="font-bold text-slate-200">Alex Vance (CSE)</span>
                <span className="font-black text-emerald-400">8 Goals</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900">
                <span className="font-bold text-slate-200">Michael Ray (EEE)</span>
                <span className="font-black text-emerald-400">5 Goals</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardShell>
  );
}
