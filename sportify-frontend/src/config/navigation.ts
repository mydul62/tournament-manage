import {
  LayoutDashboard,
  Trophy,
  Swords,
  Users,
  Shield,
  Radio,
  Settings,
  User,
  BarChart2,
  LucideIcon,
  HelpCircle,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
}

export interface NavGroup {
  groupLabel: string;
  items: NavItem[];
}

// User Navigation (Viewer / Sports Experience)
export const userNavigation: NavGroup[] = [
  {
    groupLabel: "EXPLORE",
    items: [
      { title: "Home Arena", href: "/", icon: LayoutDashboard },
      { title: "Tournaments", href: "/tournaments", icon: Trophy, badge: "Live" },
      { title: "Match Center", href: "/matches", icon: Swords },
      { title: "Department Teams", href: "/teams", icon: Shield },
      { title: "Players & Stats", href: "/players", icon: Users },
    ],
  },
  {
    groupLabel: "LEAGUE DATA",
    items: [
      { title: "Official Standings", href: "/tournaments", icon: BarChart2 },
    ],
  },
];

// Admin Navigation (Full System Control Center)
export const adminNavigation: NavGroup[] = [
  {
    groupLabel: "CONTROL CENTER",
    items: [
      { title: "Admin Console", href: "/admin", icon: LayoutDashboard },
      { title: "Live Match Control", href: "/admin/matches", icon: Radio, badge: "Control" },
    ],
  },
  {
    groupLabel: "MANAGEMENT",
    items: [
      { title: "Manage Tournaments", href: "/admin/tournaments", icon: Trophy },
      { title: "Manage Teams", href: "/admin/teams", icon: Shield },
      { title: "Manage Players", href: "/admin/players", icon: Users },
    ],
  },
];
