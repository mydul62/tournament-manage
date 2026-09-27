"use client";

import { useState } from "react";
import { Trophy, Plus } from "lucide-react";
import { DashboardShell } from "@/components/common/dashboard-shell";
import { TournamentCard } from "@/components/tournaments/tournament-card";
import { TournamentFilters } from "@/components/tournaments/tournament-filters";
import { MOCK_TOURNAMENTS } from "@/services/tournament-service";
import { useAuth } from "@/hooks/use-auth";

export default function TournamentsPage() {
  const { isAdmin } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport, setSelectedSport] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredTournaments = MOCK_TOURNAMENTS.filter((t) => {
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSport = selectedSport === "All" || t.sport === selectedSport;
    const matchesStatus = selectedStatus === "All" || t.status === selectedStatus;
    return matchesSearch && matchesSport && matchesStatus;
  });

  return (
    <DashboardShell>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-100 flex items-center gap-3">
            <Trophy className="w-8 h-8 text-emerald-400" />
            Campus League Tournaments
          </h1>
          <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
            Browse active and upcoming university sport competitions, groups, and prizes
          </p>
        </div>

        {/* Create button visible only for Admin */}
        {isAdmin && (
          <button className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-950 transition-all flex items-center justify-center gap-2 self-start sm:self-auto">
            <Plus className="w-4 h-4" />
            Create Tournament
          </button>
        )}
      </div>

      {/* Filter Bar */}
      <TournamentFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedSport={selectedSport}
        onSportChange={setSelectedSport}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
      />

      {/* Tournament Cards Grid */}
      {filteredTournaments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTournaments.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </div>
      ) : (
        <div className="glass-panel p-12 rounded-3xl text-center space-y-3">
          <Trophy className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold text-slate-300">No tournaments found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search filters or selected sport category to find competitions.
          </p>
        </div>
      )}
    </DashboardShell>
  );
}
