"use client";

import { useState } from "react";
import Link from "next/link";
import { Shield, Search, Trophy, Users, ArrowRight } from "lucide-react";
import { DashboardShell } from "@/components/common/dashboard-shell";
import { MOCK_TEAMS } from "@/services/tournament-service";

export default function TeamsPage() {
  const [search, setSearch] = useState("");

  const filteredTeams = MOCK_TEAMS.filter(
    (team) =>
      team.name.toLowerCase().includes(search.toLowerCase()) ||
      team.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-100 flex items-center gap-3">
              <Shield className="w-8 h-8 text-emerald-400" />
              Department Teams & Squads
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
              Official university departmental sports squads competing in Spring 2026 League
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search team or department..."
              className="w-full pl-10 pr-4 py-2 text-xs font-medium bg-slate-900 text-slate-200 placeholder-slate-400 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeams.map((team, idx) => (
            <div
              key={team.id}
              className="glass-card p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between space-y-4 group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 font-black text-xl shadow-lg group-hover:scale-105 transition-transform">
                    {team.shortName}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-100">{team.name}</h3>
                    <p className="text-xs text-slate-400">{team.department}</p>
                  </div>
                </div>

                <span
                  className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black ${
                    idx === 0
                      ? "bg-emerald-500 text-slate-950"
                      : "bg-slate-800 text-slate-300"
                  }`}
                >
                  #{idx + 1}
                </span>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-4 gap-2 py-3 border-y border-slate-800/80 text-center text-xs">
                <div>
                  <span className="font-bold text-slate-300">{team.played}</span>
                  <span className="block text-[10px] text-slate-400">Played</span>
                </div>
                <div>
                  <span className="font-bold text-emerald-400">{team.won}</span>
                  <span className="block text-[10px] text-slate-400">Won</span>
                </div>
                <div>
                  <span className="font-bold text-slate-300">+{team.goalsFor - team.goalsAgainst}</span>
                  <span className="block text-[10px] text-slate-400">GD</span>
                </div>
                <div>
                  <span className="font-black text-emerald-400 text-sm">{team.points}</span>
                  <span className="block text-[10px] text-slate-400 uppercase font-bold">PTS</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-slate-400">Captain: <strong className="text-slate-200">{team.captainName}</strong></span>
                <Link
                  href={`/teams/${team.id}`}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-slate-200 hover:text-white font-bold text-xs border border-slate-800 transition-all flex items-center gap-1 shadow-md"
                >
                  Squad Roster <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
