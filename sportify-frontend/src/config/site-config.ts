export const siteConfig = {
  name: "SPORTIFY",
  title: "SPORTIFY — Campus Sports & League Tracker System",
  description: "Real-time sports management, tournament tracking, and live campus league updates.",
  url: "https://sportify-campus.vercel.app",
  ogImage: "/images/og.png",
  links: {
    github: "https://github.com/mydul62/tournament-manage.git",
  },
  nav: {
    main: [
      { title: "Dashboard", href: "/", icon: "LayoutDashboard" },
      { title: "Tournaments", href: "/tournaments", icon: "Trophy" },
      { title: "Matches", href: "/matches", icon: "Swords" },
      { title: "Players", href: "/players", icon: "Users" },
    ],
    management: [
      { title: "My Squad", href: "/captain/squad", icon: "ShieldAlert", role: "Captain" },
      { title: "Tournament Admin", href: "/admin/tournaments", icon: "Settings2", role: "Admin" },
      { title: "Match Control", href: "/admin/matches", icon: "Radio", role: "Admin" },
    ],
  },
};
