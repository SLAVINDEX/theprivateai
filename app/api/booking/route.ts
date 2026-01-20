import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, phone, date, time, consultationType, notes } = body

    const consultationTypeLabels: Record<string, string> = {
      discovery: 'Discovery Call (30 min)',
      technical: 'Technical Deep Dive (60 min)',
      demo: 'Live Demo (45 min)',
    }

    // Here you would typically send an email and/or integrate with a calendar
    console.log('[v0] Booking form submission:', {
      name,
      email,
      company,
      phone,
      date,
      time,
      consultationType: consultationTypeLabels[consultationType] || consultationType,
      notes,
      timestamp: new Date().toISOString(),
      recipient: 'ThePrivateAI@protonmail.com'
    })

    // In production, integrate with email and calendar services:
    // await sendEmail({
    //   to: 'ThePrivateAI@protonmail.com',
    //   subject: `New Consultation Booking from ${name}`,
    //   body: `
    //     Name: ${name}
    //     Email: ${email}
    //     Company: ${company || 'N/A'}
    //     Phone: ${phone}
    //     
    //     Requested Date: ${date}
    //     Requested Time: ${time} (CET)
    //     Consultation Type: ${consultationTypeLabels[consultationType]}
    //     
    //     Notes: ${notes || 'None'}
    //   `
    // })
    //
    // await createCalendarEvent({
    //   title: `Consultation with ${name}`,
    //   date,
    //   time,
    //   duration: consultationType === 'discovery' ? 30 : consultationType === 'demo' ? 45 : 60,
    //   attendees: [email, 'ThePrivateAI@protonmail.com']
    // })

    return NextResponse.json({ 
      success: true, 
      message: 'Booking request submitted successfully' 
    })
  } catch (error) {
    console.error('[v0] Error processing booking:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit booking' },
      { status: 500 }
    )
  }
}
