import Link from "next/link";
import { Radio, MapPin, Trophy, Shield, ArrowRight } from "lucide-react";
import { Match } from "@/types";

interface LiveMatchCardProps {
  match: Match;
}

export function LiveMatchCard({ match }: LiveMatchCardProps) {
  return (
    <div className="glass-card p-6 rounded-3xl relative overflow-hidden border border-emerald-500/30 shadow-2xl">
      {/* Top Banner Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-black uppercase tracking-widest border border-rose-500/30">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            LIVE • 62'
          </span>
          <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
            {match.stage}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span className="truncate max-w-[140px] sm:max-w-none">{match.venue}</span>
        </div>
      </div>

      {/* Main Scoreboard Center Display */}
      <div className="py-6 flex items-center justify-between gap-4">
        {/* Home Team */}
        <div className="flex-1 flex flex-col items-center sm:items-end text-center sm:text-right space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 shadow-lg font-black text-xl">
            {match.homeTeam.shortName || <Shield className="w-7 h-7" />}
          </div>
          <div>
            <h4 className="font-extrabold text-base text-slate-100">{match.homeTeam.name}</h4>
            <p className="text-xs text-slate-400">{match.homeTeam.department}</p>
          </div>
        </div>

        {/* Score Counter */}
        <div className="px-6 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-center shadow-xl">
          <div className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-wider">
            {match.homeScore} : {match.awayScore}
          </div>
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1 block">
            Half Time: 1-1
          </span>
        </div>

        {/* Away Team */}
        <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 shadow-lg font-black text-xl">
            {match.awayTeam.shortName || <Shield className="w-7 h-7" />}
          </div>
          <div>
            <h4 className="font-extrabold text-base text-slate-100">{match.awayTeam.name}</h4>
            <p className="text-xs text-slate-400">{match.awayTeam.department}</p>
          </div>
        </div>
      </div>

      {/* Recent Goal Timeline Event */}
      {match.events && match.events.length > 0 && (
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs flex items-center justify-between text-slate-300">
          <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5" />
            Latest Event (62')
          </span>
          <span className="truncate">
            Ethan Hunt GOAL! (Assist by {match.events[0].playerName})
          </span>
        </div>
      )}

      {/* Card Footer Link */}
      <div className="mt-4 pt-3 flex items-center justify-between border-t border-slate-800/80">
        <span className="text-xs text-slate-400 font-medium">
          {match.tournamentName}
        </span>
        <Link
          href={`/matches/${match.id}`}
          className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors group"
        >
          Match Center <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
