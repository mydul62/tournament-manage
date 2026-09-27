"use client";

import { useState } from "react";
import { Trophy, Plus, Settings2, Trash2, Edit3 } from "lucide-react";
import { DashboardShell } from "@/components/common/dashboard-shell";
import { MOCK_TOURNAMENTS } from "@/services/tournament-service";

export default function AdminTournamentsPage() {
  const [tournaments] = useState(MOCK_TOURNAMENTS);

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-slate-100 flex items-center gap-2">
              <Trophy className="w-7 h-7 text-emerald-400" />
              Tournament Management
            </h1>
            <p className="text-xs text-slate-400 mt-1">Configure active university leagues and create new tournament events</p>
          </div>
          <button className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-950 flex items-center gap-1.5">
            <Plus className="w-4 h-4" /> Create New Tournament
          </button>
        </div>

        <div className="glass-card p-6 rounded-3xl overflow-x-auto">
          <table className="w-full text-left text-xs font-semibold">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider pb-3">
                <th className="pb-3">Tournament</th>
                <th className="pb-3">Sport</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Teams</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {tournaments.map((t) => (
                <tr key={t.id} className="hover:bg-slate-800/40">
                  <td className="py-3.5 font-bold text-slate-200">{t.name}</td>
                  <td className="py-3.5 text-emerald-400 font-bold">{t.sport}</td>
                  <td className="py-3.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase">
                      {t.status}
                    </span>
                  </td>
                  <td className="py-3.5 text-slate-300">{t.totalTeams} Teams</td>
                  <td className="py-3.5 text-right space-x-2">
                    <button className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 bg-slate-900 border border-slate-800">
                      <Edit3 className="w-3.5 h-3.5" />
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
