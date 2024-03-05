import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import React from "react"
import Sidebar from "@/components/layout/Sidebar"
import Header from "@/components/layout/Header"
import { ThemeProvider } from "@/components/layout/ThemeProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Eshop",
    description: "Eshop online store",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="eshop-container">
                <nav className="eshop-sidebar">
                    <Sidebar/>
                </nav>
                <header className="eshop-header">
                    <Header/>
                </header>
                <main className="eshop-main p-2 border-t-2 border-l-2">
                    {children}
                </main>
                <footer className="eshop-footer">Footer</footer>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
