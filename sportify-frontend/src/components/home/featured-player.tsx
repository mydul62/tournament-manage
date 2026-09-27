import Link from "next/link";
import { Star, Flame, Trophy, ArrowRight } from "lucide-react";
import { Player } from "@/types";

export const MOCK_FEATURED_PLAYER: Player = {
  id: "player-1",
  name: "Alex Vance",
  jerseyNumber: 10,
  position: "Striker / Forward",
  teamId: "team-cse",
  teamName: "CSE Strikers",
  department: "Computer Science & Engineering",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300",
  bio: "Top goalscorer of the Spring 2026 Inter-Department Tournament with 8 goals in 5 appearances.",
  stats: {
    matchesPlayed: 5,
    goals: 8,
    assists: 4,
    yellowCards: 1,
    redCards: 0,
    rating: 9.4,
  },
};

export function FeaturedPlayerCard({ player = MOCK_FEATURED_PLAYER }: { player?: Player }) {
  return (
    <div className="glass-card p-6 rounded-3xl relative overflow-hidden border border-emerald-500/30">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-black uppercase tracking-wider border border-amber-500/20">
          <Star className="w-3.5 h-3.5 fill-amber-400" />
          PLAYER OF THE WEEK
        </span>
        <span className="text-xs text-slate-400 font-bold">{player.teamName}</span>
      </div>

      <div className="py-5 flex flex-col sm:flex-row items-center gap-5">
        <div className="relative">
          <img
            src={player.avatarUrl}
            alt={player.name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-2 ring-emerald-500/50 shadow-xl"
          />
          <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-lg bg-emerald-500 text-slate-950 font-black text-xs shadow-md">
            #{player.jerseyNumber}
          </span>
        </div>

        <div className="flex-1 text-center sm:text-left space-y-1">
          <h3 className="text-xl font-extrabold text-slate-100">{player.name}</h3>
          <p className="text-xs font-semibold text-emerald-400">{player.position}</p>
          <p className="text-xs text-slate-400">{player.department}</p>
        </div>

        <div className="flex gap-3 text-center">
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 min-w-[70px]">
            <p className="text-xl font-black text-emerald-400">{player.stats.goals}</p>
            <p className="text-[10px] uppercase font-bold text-slate-400">Goals</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 min-w-[70px]">
            <p className="text-xl font-black text-slate-200">{player.stats.assists}</p>
            <p className="text-[10px] uppercase font-bold text-slate-400">Assists</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 min-w-[70px]">
            <p className="text-xl font-black text-amber-400">{player.stats.rating}</p>
            <p className="text-[10px] uppercase font-bold text-slate-400">Rating</p>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-800 flex justify-end">
        <Link
          href={`/players/${player.id}`}
          className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1"
        >
          View Full Profile <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
