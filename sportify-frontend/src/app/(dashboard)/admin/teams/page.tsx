"use client";

import { useState } from "react";
import { Shield, Plus, Edit3, Trash2, Search } from "lucide-react";
import { DashboardShell } from "@/components/common/dashboard-shell";
import { MOCK_TEAMS } from "@/services/tournament-service";

export default function AdminTeamsPage() {
  const [teams, setTeams] = useState(MOCK_TEAMS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [dept, setDept] = useState("");

  const handleAddTeam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName || !dept) return;

    const newTeam = {
      id: `team-${Date.now()}`,
      name: teamName,
      shortName: teamName.substring(0, 4).toUpperCase(),
      captainName: "New Captain",
      department: dept,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    };

    setTeams([newTeam, ...teams]);
    setTeamName("");
    setDept("");
    setShowAddModal(false);
  };

  const handleDelete = (id: string) => {
    setTeams(teams.filter((t) => t.id !== id));
  };

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-100 flex items-center gap-3">
              <Shield className="w-8 h-8 text-emerald-400" />
              Admin Team Management
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
              Add, edit, and organize departmental sports squads
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-950 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Add Department Team
          </button>
        </div>

        {/* Add Team Modal */}
        {showAddModal && (
          <div className="p-6 rounded-3xl bg-slate-900 border border-emerald-500/30 space-y-4 max-w-md">
            <h3 className="font-extrabold text-base text-slate-100">Add New Department Team</h3>
            <form onSubmit={handleAddTeam} className="space-y-3 text-xs font-semibold">
              <div>
                <label className="text-slate-300">Team Name</label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="e.g. CSE Strikers"
                  className="w-full mt-1 bg-slate-950 text-slate-100 border border-slate-800 rounded-xl px-3 py-2"
                />
              </div>
              <div>
                <label className="text-slate-300">Department</label>
                <input
                  type="text"
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                  placeholder="e.g. Computer Science & Engineering"
                  className="w-full mt-1 bg-slate-950 text-slate-100 border border-slate-800 rounded-xl px-3 py-2"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-xl bg-emerald-600 text-white font-bold"
                >
                  Save Team
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Teams Table */}
        <div className="glass-card p-6 rounded-3xl overflow-x-auto">
          <table className="w-full text-left text-xs font-semibold">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider pb-3">
                <th className="pb-3">Squad Name</th>
                <th className="pb-3">Department</th>
                <th className="pb-3">Captain</th>
                <th className="pb-3 text-center">Points</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {teams.map((t) => (
                <tr key={t.id} className="hover:bg-slate-800/40">
                  <td className="py-3 font-bold text-slate-200">{t.name}</td>
                  <td className="py-3 text-emerald-400 font-bold">{t.department}</td>
                  <td className="py-3 text-slate-300">{t.captainName}</td>
                  <td className="py-3 text-center font-black text-emerald-400 text-sm">{t.points}</td>
                  <td className="py-3 text-right space-x-2">
                    <button className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 bg-slate-900 border border-slate-800">
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(t.id)}
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
