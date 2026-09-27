"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Search, Flame, Star, Shield } from "lucide-react";
import { DashboardShell } from "@/components/common/dashboard-shell";
import { MOCK_FEATURED_PLAYER } from "@/components/home/featured-player";

export default function PlayersPage() {
  const [search, setSearch] = useState("");

  const players = [
    MOCK_FEATURED_PLAYER,
    {
      id: "player-2",
      name: "Michael Ray",
      jerseyNumber: 7,
      position: "Midfielder",
      teamId: "team-eee",
      teamName: "EEE Dynamos",
      department: "Electrical Engineering",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
      stats: { matchesPlayed: 5, goals: 5, assists: 3, yellowCards: 2, redCards: 0, rating: 8.9 },
    },
    {
      id: "player-3",
      name: "David Miller",
      jerseyNumber: 9,
      position: "Forward",
      teamId: "team-me",
      teamName: "Mechanical Titans",
      department: "Mechanical Engineering",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
      stats: { matchesPlayed: 5, goals: 4, assists: 1, yellowCards: 0, redCards: 0, rating: 8.4 },
    },
  ].filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <DashboardShell>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-100 flex items-center gap-3">
            <Users className="w-8 h-8 text-emerald-400" />
            Player Directory & Roster
          </h1>
          <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
            Explore university student athletes, performance stats, and individual player cards
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search player name..."
            className="w-full pl-10 pr-4 py-2 text-xs font-medium bg-slate-900 text-slate-200 placeholder-slate-400 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
          />
        </div>
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <div
            key={player.id}
            className="glass-card p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between space-y-4 group"
          >
            <div className="flex items-center gap-4">
              <img
                src={player.avatarUrl}
                alt={player.name}
                className="w-16 h-16 rounded-2xl object-cover ring-2 ring-emerald-500/40 shadow-lg group-hover:scale-105 transition-transform"
              />
              <div>
                <span className="text-[10px] font-black uppercase text-emerald-400 tracking-wider">
                  #{player.jerseyNumber} • {player.position}
                </span>
                <h3 className="text-lg font-extrabold text-slate-100">{player.name}</h3>
                <p className="text-xs text-slate-400">{player.teamName}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800 text-center text-xs">
              <div className="p-2 rounded-xl bg-slate-900">
                <span className="font-black text-emerald-400 text-base">{player.stats.goals}</span>
                <span className="block text-[10px] text-slate-400 font-bold">Goals</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900">
                <span className="font-black text-slate-200 text-base">{player.stats.assists}</span>
                <span className="block text-[10px] text-slate-400 font-bold">Assists</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900">
                <span className="font-black text-amber-400 text-base">{player.stats.rating}</span>
                <span className="block text-[10px] text-slate-400 font-bold">Rating</span>
              </div>
            </div>

            <Link
              href={`/players/${player.id}`}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-slate-200 hover:text-white font-bold text-xs border border-slate-800 transition-all text-center block"
            >
              View Full Player Profile →
            </Link>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
