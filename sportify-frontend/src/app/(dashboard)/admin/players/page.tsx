"use client";

import { useState } from "react";
import { Users, Plus, Edit3, Trash2 } from "lucide-react";
import { DashboardShell } from "@/components/common/dashboard-shell";
import { MOCK_FEATURED_PLAYER } from "@/components/home/featured-player";

export default function AdminPlayersPage() {
  const [players, setPlayers] = useState([
    MOCK_FEATURED_PLAYER,
    {
      id: "p-2",
      name: "Michael Ray",
      jerseyNumber: 7,
      position: "Midfielder",
      teamName: "EEE Dynamos",
      department: "Electrical Engineering",
      stats: { matchesPlayed: 5, goals: 5, assists: 3, yellowCards: 2, redCards: 0, rating: 8.9 },
    },
    {
      id: "p-3",
      name: "David Miller",
      jerseyNumber: 9,
      position: "Forward",
      teamName: "Mechanical Titans",
      department: "Mechanical Engineering",
      stats: { matchesPlayed: 5, goals: 4, assists: 1, yellowCards: 0, redCards: 0, rating: 8.4 },
    },
  ]);

  const handleDelete = (id: string) => {
    setPlayers(players.filter((p) => p.id !== id));
  };

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-100 flex items-center gap-3">
              <Users className="w-8 h-8 text-emerald-400" />
              Admin Player Management
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
              Add players, assign team rosters, and manage player cards & statistics
            </p>
          </div>

          <button className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-950 flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add New Player
          </button>
        </div>

        <div className="glass-card p-6 rounded-3xl overflow-x-auto">
          <table className="w-full text-left text-xs font-semibold">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider pb-3">
                <th className="pb-3">#</th>
                <th className="pb-3">Player Name</th>
                <th className="pb-3">Position</th>
                <th className="pb-3">Team</th>
                <th className="pb-3 text-center">Goals</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {players.map((p) => (
                <tr key={p.id} className="hover:bg-slate-800/40">
                  <td className="py-3.5 font-black text-emerald-400">#{p.jerseyNumber}</td>
                  <td className="py-3.5 font-bold text-slate-200">{p.name}</td>
                  <td className="py-3.5 text-slate-400">{p.position}</td>
                  <td className="py-3.5 text-emerald-400 font-bold">{p.teamName}</td>
                  <td className="py-3.5 text-center font-bold text-slate-100">{p.stats.goals}</td>
                  <td className="py-3.5 text-right space-x-2">
                    <button className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 bg-slate-900 border border-slate-800">
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 bg-slate-900 border border-slate-800"
                    >
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
