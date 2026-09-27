import {
  LayoutDashboard,
  Trophy,
  Swords,
  Users,
  ShieldCheck,
  Radio,
  Settings,
  User,
  LucideIcon,
  HelpCircle,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
  role?: "Admin" | "Captain" | "User";
}

export interface NavGroup {
  groupLabel: string;
  items: NavItem[];
}

export const sidebarNavigation: NavGroup[] = [
  {
    groupLabel: "MAIN",
    items: [
      { title: "Dashboard", href: "/", icon: LayoutDashboard },
      { title: "Tournaments", href: "/tournaments", icon: Trophy, badge: "Live" },
      { title: "Match Center", href: "/matches", icon: Swords },
      { title: "Players & Stats", href: "/players", icon: Users },
    ],
  },
  {
    groupLabel: "MANAGEMENT",
    items: [
      { title: "My Squad", href: "/captain/squad", icon: ShieldCheck, role: "Captain" },
      { title: "Admin Console", href: "/admin", icon: Settings, role: "Admin" },
      { title: "Live Score Control", href: "/admin/matches", icon: Radio, role: "Admin" },
    ],
  },
  {
    groupLabel: "SYSTEM",
    items: [
      { title: "User Profile", href: "/profile", icon: User },
      { title: "Help & Rules", href: "/help", icon: HelpCircle },
    ],
  },
];
