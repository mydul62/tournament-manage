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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar Navigation */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* Main Right Content Area Aligned with Fixed Sidebar */}
      <div
        className={cn(
          "flex-1 flex flex-col min-w-0 transition-all duration-300",
          isSidebarCollapsed ? "md:pl-20" : "md:pl-64"
        )}
      >
        {/* Top Header */}
        <Header
          onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
          isSidebarCollapsed={isSidebarCollapsed}
        />

        {/* Main Content Region */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="py-4 px-6 border-t border-slate-900 bg-slate-950 text-center text-xs text-slate-500">
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
    </div>
  );
}
