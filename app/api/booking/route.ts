import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json(
    { success: false, error: "Calendar booking is not configured. Use the consultation-request email draft on the booking page." },
    { status: 503 },
  )
}
