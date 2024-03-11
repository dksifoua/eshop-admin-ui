import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import React from "react"
import Sidebar from "@/components/layout/Sidebar"
import Header from "@/components/layout/Header"
import { ThemeContextProvider } from "@/hooks/useTheme"
import { Theme } from "@/lib/types"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "eshop",
  description: "eshop online store",
}

export default function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode
  }>
) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <ThemeContextProvider>
      <div className="flex flex-row w-full h-lvh">
        <Sidebar/>
        <main className="flex flex-col w-full h-full">
          <Header/>
          {children}
        </main>
      </div>
    </ThemeContextProvider>
    </body>
    </html>
  )
}
