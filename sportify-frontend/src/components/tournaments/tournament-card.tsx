import Link from "next/link";
import { Trophy, Calendar, Users, ArrowRight, ShieldCheck } from "lucide-react";
import { Tournament } from "@/types";

export function TournamentCard({ tournament }: { tournament: Tournament }) {
  const isOngoing = tournament.status === "Ongoing";

  return (
    <div className="glass-card p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between space-y-5 group">
      {/* Top Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 font-bold shadow-md group-hover:scale-105 transition-transform">
            <Trophy className="w-5 h-5" />
          </span>
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              {tournament.sport} • {tournament.season}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${
                isOngoing
                  ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                  : "bg-slate-800 text-slate-300 border-slate-700"
              }`}
            >
              {isOngoing && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
              {tournament.status}
            </span>
          </div>
        </div>

        {tournament.prizePool && (
          <span className="px-3 py-1 rounded-xl bg-amber-500/10 text-amber-400 font-black text-xs border border-amber-500/20">
            {tournament.prizePool}
          </span>
        )}
      </div>

      {/* Main Title & Description */}
      <div className="space-y-1.5">
        <h3 className="text-lg font-extrabold text-slate-100 group-hover:text-emerald-300 transition-colors">
          {tournament.name}
        </h3>
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
          {tournament.description}
        </p>
      </div>

      {/* Meta Specs */}
      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <Users className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>{tournament.totalTeams} Registered Teams</span>
        </div>
        <div className="flex items-center gap-2 text-slate-300">
          <Calendar className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>{tournament.startDate}</span>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
        <span className="text-[11px] font-bold text-slate-500">Official Campus Tournament</span>
        <Link
          href={`/tournaments/${tournament.id}`}
          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-emerald-600 text-slate-200 hover:text-white font-bold text-xs border border-slate-800 hover:border-emerald-500 transition-all flex items-center gap-1.5 shadow-md"
        >
          View Tournament <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
