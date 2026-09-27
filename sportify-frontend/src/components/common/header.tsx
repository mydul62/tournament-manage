"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Search,
  Bell,
  Menu,
  Sparkles,
  Radio,
  SlidersHorizontal,
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onOpenMobileSidebar: () => void;
  isSidebarCollapsed: boolean;
}

export function Header({
  onOpenMobileSidebar,
  isSidebarCollapsed,
}: HeaderProps) {
  const pathname = usePathname();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);

  const getPageTitle = (path: string) => {
    if (path === "/") return "Dashboard Overview";
    if (path.startsWith("/tournaments")) return "Tournament League Arena";
    if (path.startsWith("/matches")) return "Match Center & Live Scores";
    if (path.startsWith("/players")) return "Player Leaderboard & Roster";
    if (path.startsWith("/teams")) return "Department Squad Directory";
    if (path.startsWith("/admin")) return "Administrative Control Center";
    if (path.startsWith("/captain")) return "Captain Squad Hub";
    return "Sportify Platform";
  };

  return (
    <header className="sticky top-0 z-30 h-16 w-full bg-slate-950/85 border-b border-slate-800/80 backdrop-blur-xl px-4 md:px-6 flex items-center justify-between gap-4">
      {/* Left: Mobile Menu Trigger & Dynamic Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileSidebar}
          className="md:hidden p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 transition-colors"
          aria-label="Open Navigation Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex flex-col">
          <h1 className="text-base md:text-lg font-extrabold text-slate-100 flex items-center gap-2">
            {getPageTitle(pathname)}
          </h1>
          <p className="hidden sm:flex text-xs font-medium text-slate-400 gap-1.5 items-center">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live League Tracking active
          </p>
        </div>
      </div>

      {/* Center: Quick Search Input */}
      <div className="hidden lg:flex flex-1 max-w-md mx-4">
        <div className="relative w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tournaments, matches, teams, or players..."
            className="w-full pl-10 pr-12 py-2 text-xs font-medium bg-slate-900/90 text-slate-200 placeholder-slate-400 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-slate-400 border border-slate-700">
            ⌘K
          </div>
        </div>
      </div>

      {/* Right Actions: Live Ticker, Notifications & User */}
      <div className="flex items-center gap-2.5">
        {/* Live Match Ticker Badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">
          <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
          <span>CSE vs EEE (2-1)</span>
        </div>

        {/* Notifications Dropdown Container */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-900 border border-slate-800/60 transition-colors"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-400 rounded-full ring-2 ring-slate-950 animate-ping" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 p-4 rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur-xl z-50">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <h3 className="text-xs font-extrabold uppercase text-slate-300 tracking-wider">
                  Notifications
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                  2 New
                </span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <p className="font-semibold text-slate-200">CSE Strikers vs EEE Dynamos</p>
                  <p className="text-slate-400 text-[11px]">GOAL! Ethan Hunt scored at 62'</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <p className="font-semibold text-slate-200">Tournament Schedule Updated</p>
                  <p className="text-slate-400 text-[11px]">Finals rescheduled for Sunday 4:00 PM</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Mini Profile Avatar */}
        <div className="pl-2 flex items-center gap-2 border-l border-slate-800">
          <img
            src={user?.avatarUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"}
            alt="User"
            className="w-8 h-8 rounded-lg object-cover ring-2 ring-emerald-500/40"
          />
          <div className="hidden xl:flex flex-col">
            <span className="text-xs font-bold text-slate-200 leading-tight">{user?.name}</span>
            <span className="text-[10px] text-emerald-400 font-semibold">{user?.role}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
