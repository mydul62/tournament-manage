import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  icon: LucideIcon;
  subtitle?: string;
}

export function StatCard({
  title,
  value,
  change,
  isPositive = true,
  icon: Icon,
  subtitle,
}: StatCardProps) {
  return (
    <div className="glass-card p-5 rounded-2xl relative overflow-hidden group">
      {/* Background Accent Glow */}
      <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-300" />

      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {title}
          </p>
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-100 tracking-tight">
            {value}
          </h3>
        </div>

        <div className="w-11 h-11 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-emerald-400 shadow-md group-hover:border-emerald-500/40 group-hover:scale-105 transition-all">
          <Icon className="w-5 h-5" />
        </div>
      </div>

      {(change || subtitle) && (
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
          {change && (
            <div
              className={cn(
                "flex items-center gap-1 font-bold px-2 py-0.5 rounded-md",
                isPositive
                  ? "text-emerald-400 bg-emerald-500/10"
                  : "text-rose-400 bg-rose-500/10"
              )}
            >
              {isPositive ? (
                <TrendingUp className="w-3.5 h-3.5" />
              ) : (
                <TrendingDown className="w-3.5 h-3.5" />
              )}
              <span>{change}</span>
            </div>
          )}
          {subtitle && (
            <span className="text-slate-400 font-medium">{subtitle}</span>
          )}
        </div>
      )}
    </div>
  );
}
