"use client";

import { Search, Filter } from "lucide-react";

interface TournamentFiltersProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedSport: string;
  onSportChange: (s: string) => void;
  selectedStatus: string;
  onStatusChange: (s: string) => void;
}

export function TournamentFilters({
  searchQuery,
  onSearchChange,
  selectedSport,
  onSportChange,
  selectedStatus,
  onStatusChange,
}: TournamentFiltersProps) {
  const sports = ["All", "Football", "Cricket", "Basketball", "Badminton"];
  const statuses = ["All", "Ongoing", "Upcoming", "Completed"];

  return (
    <div className="glass-panel p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 border border-slate-800">
      {/* Search Input */}
      <div className="relative w-full md:w-72">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Filter by tournament name..."
          className="w-full pl-10 pr-4 py-2 text-xs font-medium bg-slate-900 text-slate-200 placeholder-slate-400 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500/50"
        />
      </div>

      {/* Sport Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
        {sports.map((sport) => (
          <button
            key={sport}
            onClick={() => onSportChange(sport)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedSport === sport
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-950"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}
          >
            {sport}
          </button>
        ))}
      </div>

      {/* Status Filter */}
      <div className="flex items-center gap-2 w-full md:w-auto justify-end">
        <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <select
          value={selectedStatus}
          onChange={(e) => onStatusChange(e.target.value)}
          className="bg-slate-900 text-slate-200 border border-slate-800 rounded-xl px-3 py-1.5 text-xs font-bold focus:outline-none focus:border-emerald-500"
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              Status: {status}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
