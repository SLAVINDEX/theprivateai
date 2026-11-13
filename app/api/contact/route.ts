import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json(
    { success: false, error: "Automatic email delivery is not configured. Use the email-draft flow on the contact page." },
    { status: 503 },
  )
}
