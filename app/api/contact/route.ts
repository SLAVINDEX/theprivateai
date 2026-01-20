import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, phone, interest, message } = body

    // Here you would typically send an email using a service like Resend, SendGrid, etc.
    // For now, we'll log the data and return success
    console.log('[v0] Contact form submission:', {
      name,
      email,
      company,
      phone,
      interest,
      message,
      timestamp: new Date().toISOString(),
      recipient: 'ThePrivateAI@protonmail.com'
    })

    // In production, integrate with an email service:
    // await sendEmail({
    //   to: 'ThePrivateAI@protonmail.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   body: `
    //     Name: ${name}
    //     Email: ${email}
    //     Company: ${company || 'N/A'}
    //     Phone: ${phone || 'N/A'}
    //     Interest: ${interest}
    //     Message: ${message}
    //   `
    // })

    return NextResponse.json({ 
      success: true, 
      message: 'Contact form submitted successfully' 
    })
  } catch (error) {
    console.error('[v0] Error processing contact form:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
