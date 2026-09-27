"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Trophy,
  LogOut,
  Sparkles,
  Zap,
  X,
  ShieldAlert,
} from "lucide-react";
import { userNavigation, adminNavigation, NavGroup, NavItem } from "@/config/navigation";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export function Sidebar({
  isCollapsed,
  onToggleCollapse,
  isMobileOpen = false,
  onCloseMobile,
}: SidebarProps) {
  const pathname = usePathname();
  const { user, isAdmin, role, switchRole } = useAuth();
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const activeNavigation = isAdmin ? adminNavigation : userNavigation;

  const isNavActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const renderNavItem = (item: NavItem) => {
    const Icon = item.icon;
    const active = isNavActive(item.href);

    return (
      <div key={item.href} className="relative group">
        <Link
          href={item.href}
          onClick={onCloseMobile}
          onMouseEnter={() => setHoveredNav(item.title)}
          onMouseLeave={() => setHoveredNav(null)}
          className={cn(
            "relative flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-200",
            active
              ? "text-emerald-300 bg-gradient-to-r from-emerald-500/15 via-emerald-500/10 to-transparent font-semibold border border-emerald-500/25 shadow-sm shadow-emerald-950/50"
              : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"
          )}
        >
          {active && (
            <motion.div
              layoutId="activeIndicator"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-emerald-500 rounded-r-full shadow-[0_0_12px_#10b981]"
            />
          )}

          <div className="relative shrink-0">
            <Icon
              className={cn(
                "w-5 h-5 transition-colors duration-200",
                active
                  ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                  : "text-slate-400 group-hover:text-slate-200"
              )}
            />
          </div>

          {!isCollapsed && (
            <span className="truncate flex-1 text-slate-200 group-hover:text-slate-50">
              {item.title}
            </span>
          )}

          {!isCollapsed && item.badge && (
            <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {item.badge}
            </span>
          )}
        </Link>

        {/* Floating Tooltip in Collapsed Mode */}
        {isCollapsed && hoveredNav === item.title && (
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1.5 rounded-lg bg-slate-900 text-slate-100 text-xs font-semibold whitespace-nowrap shadow-xl border border-slate-700/80 z-50 pointer-events-none">
            {item.title}
          </div>
        )}
      </div>
    );
  };

  const navContent = (
    <div className="flex flex-col h-full justify-between select-none">
      {/* Brand Header */}
      <div className="p-4 flex items-center justify-between border-b border-slate-800/80">
        <Link href="/" className="flex items-center gap-3 group overflow-hidden">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-emerald-900/40 group-hover:scale-105 transition-all">
            <Trophy className="w-5 h-5 stroke-[2.5]" />
          </div>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="flex flex-col"
            >
              <span className="font-black text-lg tracking-wider text-slate-100 flex items-center gap-1.5">
                SPORTIFY
                <span className={`text-[10px] uppercase font-extrabold tracking-widest px-1.5 py-0.5 rounded border ${
                  isAdmin ? "bg-amber-500/20 text-amber-400 border-amber-500/30" : "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                }`}>
                  {isAdmin ? "ADMIN" : "ARENA"}
                </span>
              </span>
              <span className="text-[11px] font-medium text-slate-400 -mt-1 flex items-center gap-1">
                <Zap className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                Campus League
              </span>
            </motion.div>
          )}
        </Link>

        {/* Desktop Collapse Toggle Button */}
        <button
          onClick={onToggleCollapse}
          className="hidden md:flex items-center justify-center w-8 h-8 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 transition-colors"
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>

        {/* Mobile Close Button */}
        <button
          onClick={onCloseMobile}
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Group Sections */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {activeNavigation.map((group: NavGroup) => (
          <div key={group.groupLabel} className="space-y-1">
            {!isCollapsed && (
              <h3 className="px-3 text-[10px] font-extrabold text-slate-500 tracking-widest uppercase mb-1">
                {group.groupLabel}
              </h3>
            )}
            <nav className="space-y-1">
              {group.items.map((item) => renderNavItem(item))}
            </nav>
          </div>
        ))}
      </div>

      {/* Role Switcher & User Profile Footer */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-900/60 space-y-2">
        {!isCollapsed && (
          <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
            <span className="text-[11px] font-bold text-slate-400">Mode:</span>
            <div className="flex gap-1">
              <button
                onClick={() => switchRole("User")}
                className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all ${
                  role === "User" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                User
              </button>
              <button
                onClick={() => switchRole("Admin")}
                className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all ${
                  role === "Admin" ? "bg-amber-600 text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Admin
              </button>
            </div>
          </div>
        )}

        <div
          className={cn(
            "flex items-center gap-3 p-2 rounded-xl bg-slate-900/90 border border-slate-800/80 shadow-md",
            isCollapsed && "justify-center"
          )}
        >
          <div className="relative shrink-0">
            <img
              src={user?.avatarUrl}
              alt={user?.name}
              className="w-9 h-9 rounded-lg object-cover ring-2 ring-emerald-500/50"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-slate-950" />
          </div>

          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-slate-200 truncate">{user?.name}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                  {user?.role}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <aside
        className={cn(
          "hidden md:flex flex-col fixed left-0 top-0 bottom-0 z-40 bg-slate-950/95 border-r border-slate-800/80 backdrop-blur-2xl transition-all duration-300 ease-in-out",
          isCollapsed ? "w-20" : "w-64"
        )}
      >
        {navContent}
      </aside>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onCloseMobile}
              className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md md:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 bottom-0 z-50 w-72 bg-slate-950 border-r border-slate-800 md:hidden"
            >
              {navContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
