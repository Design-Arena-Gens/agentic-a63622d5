import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Binance Square - Top 10 Engaging Posts',
  description: 'Expert-crafted posts designed for maximum engagement on Binance Square',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
