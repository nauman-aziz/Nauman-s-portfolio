import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const apiKey = process.env.RESEND_API_KEY
const to = process.env.CONTACT_TO

const resend = new Resend(apiKey)

export async function POST(req: Request) {
  try {
    if (!apiKey) {
      return NextResponse.json({ ok: false, error: 'Missing RESEND_API_KEY' }, { status: 500 })
    }
    if (!to) {
      return NextResponse.json({ ok: false, error: 'Missing CONTACT_TO' }, { status: 500 })
    }

    const { name, email, subject, message, hp } = await req.json()

    if (hp) return NextResponse.json({ ok: true }) // honeypot

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields.' }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to,                            // string or string[]
      subject: `Portfolio: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      replyTo: [email],             // ✅ correct field for Resend
    })

    if (error) {
      console.error('RESEND ERROR:', error)
      return NextResponse.json({ ok: false, error }, { status: 502 })
    }

    return NextResponse.json({ ok: true, id: data?.id })
  } catch (err: any) {
    console.error('CONTACT ERROR', err)
    return NextResponse.json({ ok: false, error: String(err?.message || err) }, { status: 500 })
  }
}
