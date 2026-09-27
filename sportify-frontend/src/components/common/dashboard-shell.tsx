"use client";

import { useState } from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { cn } from "@/lib/utils";

interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Sidebar Navigation */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* Top Application Header */}
      <Header
        onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
        isSidebarCollapsed={isSidebarCollapsed}
      />

      {/* Main Content Region */}
      <main
        className={cn(
          "flex-1 p-4 md:p-6 lg:p-8 transition-all duration-300",
          isSidebarCollapsed ? "md:ml-20" : "md:ml-64"
        )}
      >
        <div className="max-w-7xl mx-auto space-y-8">{children}</div>
      </main>

      {/* Bottom Footer */}
      <footer
        className={cn(
          "py-4 px-6 border-t border-slate-900 bg-slate-950 text-center text-xs text-slate-400 transition-all duration-300",
          isSidebarCollapsed ? "md:ml-20" : "md:ml-64"
        )}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 SPORTIFY — Campus Sports & League Tracker System</p>
          <div className="flex items-center gap-4 text-[11px] font-medium text-slate-400">
            <span className="text-emerald-400">● Systems Operational</span>
            <span>Privacy Policy</span>
            <span>Tournament Rules</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
