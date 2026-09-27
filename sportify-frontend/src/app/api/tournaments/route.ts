import { NextResponse } from "next/server";
import { MOCK_TOURNAMENTS } from "@/services/tournament-service";

export async function GET() {
  return NextResponse.json({ tournaments: MOCK_TOURNAMENTS });
}
