import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import GovernmentHeader from "@/components/government-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Indian Cyber Crime Coordination Centre (I4C) | Ministry of Home Affairs",
  description:
    "Official website of the Indian Cyber Crime Coordination Centre (I4C) under the Ministry of Home Affairs, Government of India.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          <GovernmentHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
