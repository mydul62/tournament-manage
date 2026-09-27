import { NextResponse } from "next/server";
import { MOCK_MATCHES } from "@/services/match-service";

export async function GET() {
  return NextResponse.json({ matches: MOCK_MATCHES });
}
