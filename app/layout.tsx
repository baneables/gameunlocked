import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { GameProvider } from "@/contexts/GameContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GameUnlocked - Free PC Games",
  description: "Download your favorite PC games for free. Pre-installed games without the cost.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GameProvider>{children}</GameProvider>
      </body>
    </html>
  )
}