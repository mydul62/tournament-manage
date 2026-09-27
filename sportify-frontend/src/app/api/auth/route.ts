import { NextResponse } from "next/server";
import { mockUser } from "@/store/use-auth-store";

export async function GET() {
  return NextResponse.json({ user: mockUser });
}
