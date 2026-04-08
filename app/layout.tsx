import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

const siteUrl = "https://laisbarbosa.netlify.app/";

export const metadata: Metadata = {
  title: "Portfolio - Lais Barbosa",
  description: "QA Analyst e Front-end Developer",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Lais Barbosa",
    description: "QA Analyst e Front-end Developer",
    url: siteUrl,
    siteName: "Lais Barbosa Portfolio",
    images: [
      {
        url: `${siteUrl}perfil.jpg`,
        width: 1200,
        height: 630,
        alt: "Logo Lais Barbosa",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", 
    title: "Lais Barbosa",
    description: "QA Analyst e Front-end Developer",
    images: [`${siteUrl}perfil.jpg`],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}