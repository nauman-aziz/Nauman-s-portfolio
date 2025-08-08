import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Muhammad Nauman - Senior Software Engineer',
  description: 'Senior Software Engineer with 4+ years of experience in full-stack development, AI integration, and modern web technologies.',
  keywords: 'Software Engineer, React, Next.js, TypeScript, AI, Full Stack Developer',
  authors: [{ name: 'Muhammad Nauman' }],
  openGraph: {
    title: 'Muhammad Nauman - Senior Software Engineer',
    description: 'Senior Software Engineer with 4+ years of experience in full-stack development',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/yjp3aho.css" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sofia antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}