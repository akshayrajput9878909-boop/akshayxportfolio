import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Configure fonts with proper options
const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://akshayrajput.com'),
  title: {
    default: "Akshay Rajput — Web Designer for Local Businesses",
    template: "%s | Akshay Rajput",
  },
  description:
    "I design modern, fast, and conversion-focused websites for local businesses. Turn visitors into customers with clean UI, fast loading speeds, and mobile-optimized design.",
  keywords: ["Web Designer", "Website Design", "Landing Page Design", "Business Website", "Conversion Optimization", "Local Business", "Real Estate Website", "Restaurant Website", "India"],
  authors: [{ name: "Akshay Rajput", url: "https://www.linkedin.com/in/akshay-rajput-6559b4342/" }],
  creator: "Akshay Rajput",
  publisher: "Akshay Rajput",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Akshay Rajput — Web Designer for Local Businesses",
    description: "I design modern, fast, and conversion-focused websites for local businesses. Turn visitors into customers with clean UI and mobile-optimized design.",
    siteName: "Akshay Rajput",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akshay Rajput — Web Designer for Local Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Rajput — Web Designer for Local Businesses",
    description: "I design modern, fast, and conversion-focused websites for local businesses.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="theme-mode">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
