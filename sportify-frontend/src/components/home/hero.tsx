import Link from "next/link";
import { Trophy, Swords, Flame, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950/70 border border-emerald-500/20 shadow-2xl">
      {/* Background Lighting Gradients */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-black uppercase tracking-wider border border-emerald-500/30 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          OFFICIAL UNIVERSITY SPORTS HUB
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight leading-[1.1]">
          Elevate Campus League <br />
          <span className="emerald-gradient-text">Tournaments & Live Action</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-2xl">
          Track inter-department matches in real-time, inspect official standings, follow top player statistics, and manage team rosters seamlessly.
        </p>

        <div className="pt-3 flex flex-wrap items-center gap-3.5">
          <Link
            href="/tournaments"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-900/40 hover:scale-105 transition-all flex items-center gap-2"
          >
            <Trophy className="w-4 h-4" />
            Explore Tournaments
          </Link>
          <Link
            href="/matches"
            className="px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-extrabold text-xs border border-slate-700/80 hover:border-emerald-500/40 transition-all flex items-center gap-2"
          >
            <Swords className="w-4 h-4 text-emerald-400" />
            Live Match Center
          </Link>
        </div>
      </div>
    </div>
  );
}
