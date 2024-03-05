import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import React from "react"
import EShopThemeProvider from "@/components/EShopThemeProvider"
import ThemeSwitcher from "@/components/ThemeSwitcher"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "e-shop",
    description: "e-shop online store",
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <EShopThemeProvider attribute="class" defaultTheme="dark">
            <ThemeSwitcher/>
            {children}
        </EShopThemeProvider>
        </body>
        </html>
    )
}
