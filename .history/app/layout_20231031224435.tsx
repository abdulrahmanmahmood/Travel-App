import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for camping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}