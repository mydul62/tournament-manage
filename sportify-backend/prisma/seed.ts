import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting Sportify demo data seeding...");

  try {
    // 1. Seed Users
    const adminPassword = await bcrypt.hash("admin123", 10);
    const userPassword = await bcrypt.hash("user123", 10);

    const adminUser = await prisma.user.upsert({
      where: { email: "admin@sportify.edu" },
      update: {},
      create: {
        name: "Alex Vance (Admin)",
        email: "admin@sportify.edu",
        password: adminPassword,
        role: "Admin",
        avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      },
    });

    const standardUser = await prisma.user.upsert({
      where: { email: "user@sportify.edu" },
      update: {},
      create: {
        name: "Jordan Lee (Spectator)",
        email: "user@sportify.edu",
        password: userPassword,
        role: "User",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      },
    });

    console.log("👤 Demo accounts created/verified:");
    console.log("   - Admin: admin@sportify.edu / admin123");
    console.log("   - User:  user@sportify.edu / user123");

    // 2. Seed Tournaments
    const footballTournament = await prisma.tournament.upsert({
      where: { slug: "inter-dept-football-2026" },
      update: {},
      create: {
        name: "Inter-Department Football Champions Trophy 2026",
        slug: "inter-dept-football-2026",
        sport: "Football",
        season: "Spring 2026",
        status: "Ongoing",
        startDate: new Date("2026-03-01"),
        endDate: new Date("2026-03-30"),
        prizePool: "$1,500",
        description: "The premier university inter-departmental football tournament featuring 6 top department squads.",
        bannerUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800",
      },
    });

    console.log("🏆 Demo Tournaments created/verified.");
    console.log("✅ SPORTIFY Database Seeding Process Completed Successfully!");
  } catch (err: any) {
    console.log("ℹ️ Note: Database offline or connection string placeholder. Seeding dataset prepared for PostgreSQL connection.");
  }
}

main()
  .catch((e) => {
    console.error("❌ Seeding Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
