import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json(
    { success: false, error: "Email delivery is not configured. Use the WhatsApp contact page to prepare a message." },
    { status: 503 },
  )
}
