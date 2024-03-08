import { Inter } from "next/font/google"
import "./globals.css"
import React from "react"
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
        <div className={`flex flex-row w-full h-lvh `}>
            <Sidebar/>
            <main className="flex flex-col w-full h-full border-b-2">
                <Header/>
                {children}
            </main>
        </div>
        </body>
        </html>
    )
}
