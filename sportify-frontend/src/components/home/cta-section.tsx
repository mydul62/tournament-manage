import Link from "next/link";
import { ShieldCheck, UserPlus, Trophy } from "lucide-react";

export function CTASection() {
  return (
    <div className="glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden border border-slate-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="space-y-2 max-w-xl">
        <h3 className="text-xl sm:text-2xl font-black text-slate-100">
          Ready to Lead Your Departmental Team?
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
          Register your squad for upcoming campus tournaments, request fixture slots, or join as a captain to update live squad lineups.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 shrink-0">
        <Link
          href="/register"
          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-900/40 transition-all flex items-center gap-2"
        >
          <UserPlus className="w-4 h-4" />
          Join Sportify
        </Link>
        <Link
          href="/captain/squad"
          className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-extrabold text-xs border border-slate-700 transition-all flex items-center gap-2"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          Captain Squad Portal
        </Link>
      </div>
    </div>
  );
}
