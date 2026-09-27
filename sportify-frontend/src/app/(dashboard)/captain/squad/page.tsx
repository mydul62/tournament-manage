"use client";

import { useState } from "react";
import { Users, Plus, Trash2, Edit } from "lucide-react";
import { DashboardShell } from "@/components/common/dashboard-shell";
import { MOCK_FEATURED_PLAYER } from "@/components/home/featured-player";

export default function CaptainSquadPage() {
  const [squad] = useState([
    MOCK_FEATURED_PLAYER,
    {
      id: "p2",
      name: "Liam Johnson",
      jerseyNumber: 8,
      position: "Midfielder",
      department: "Computer Science",
      stats: { matchesPlayed: 5, goals: 2, assists: 6, yellowCards: 1, redCards: 0, rating: 8.7 },
    },
    {
      id: "p3",
      name: "Ethan Hunt",
      jerseyNumber: 11,
      position: "Winger",
      department: "Computer Science",
      stats: { matchesPlayed: 5, goals: 4, assists: 2, yellowCards: 0, redCards: 0, rating: 8.5 },
    },
  ]);

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-slate-100 flex items-center gap-2">
              <Users className="w-7 h-7 text-emerald-400" />
              Department Squad Roster — CSE Strikers
            </h1>
            <p className="text-xs text-slate-400 mt-1">Register and edit players for official matchday submission</p>
          </div>
          <button className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-950 flex items-center gap-1.5">
            <Plus className="w-4 h-4" /> Add Player
          </button>
        </div>

        <div className="glass-card p-6 rounded-3xl overflow-x-auto">
          <table className="w-full text-left text-xs font-semibold">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider pb-3">
                <th className="pb-3">#</th>
                <th className="pb-3">Player Name</th>
                <th className="pb-3">Position</th>
                <th className="pb-3 text-center">Matches</th>
                <th className="pb-3 text-center">Goals</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {squad.map((player) => (
                <tr key={player.id} className="hover:bg-slate-800/40">
                  <td className="py-3 font-black text-emerald-400">#{player.jerseyNumber}</td>
                  <td className="py-3 font-bold text-slate-200">{player.name}</td>
                  <td className="py-3 text-slate-400">{player.position}</td>
                  <td className="py-3 text-center text-slate-300">{player.stats.matchesPlayed}</td>
                  <td className="py-3 text-center font-bold text-emerald-400">{player.stats.goals}</td>
                  <td className="py-3 text-right space-x-2">
                    <button className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 bg-slate-900 border border-slate-800">
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 bg-slate-900 border border-slate-800">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
