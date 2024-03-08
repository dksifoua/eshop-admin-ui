import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import React from "react"
import EShopThemeProvider from "@/components/layout/EShopThemeProvider"
import Sidebar from "@/components/layout/Sidebar"
import Header from "@/components/layout/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "e-shop",
    description: "e-shop online store",
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <EShopThemeProvider attribute="class" defaultTheme="system" enableSystem={true} storageKey="theme">
            <Sidebar/>
            <main className="flex flex-col w-full h-full border-b-2">
                <Header/>
                {children}
            </main>
        </EShopThemeProvider>
        </body>
        </html>
    )
}
