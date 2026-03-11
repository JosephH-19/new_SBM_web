import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'SOFT & BUSINESS MANAGEMENT - Soluciones Tecnológicas',
  description: 'SOFT & BUSINESS MANAGEMENT ofrece soluciones tecnológicas innovadoras para microempresas en Perú.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased min-h-screen bg-dark">{children}</body>
    </html>
  )
}
