import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blue Rose Numerology - Discover Your Destiny',
  description: 'Discover your destiny with Pythagorean Numerology. Enter your full name to reveal your Expression and Soul Urge Numbers.',
  keywords: 'numerology, pythagorean numerology, expression number, soul urge number, destiny, spiritual guidance',
  authors: [{ name: 'Kandela Gytha Dharanawati' }],
  openGraph: {
    title: 'Blue Rose Numerology - Discover Your Destiny',
    description: 'Discover your destiny with Pythagorean Numerology. Enter your full name to reveal your Expression and Soul Urge Numbers.',
    type: 'website',
    url: 'https://kandelagyth.website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue Rose Numerology - Discover Your Destiny',
    description: 'Discover your destiny with Pythagorean Numerology. Enter your full name to reveal your Expression and Soul Urge Numbers.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Sacramento&family=Lora:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

