import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Eshop",
    description: "Eshop online store",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={inter.className}>
            <div className="eshop-container">
                <nav className="eshop-sidebar">Navbar</nav>
                <header className="eshop-header">Header</header>
                <main className="eshop-main">
                    {children}
                </main>
                <footer className="eshop-footer">Footer</footer>
            </div>
        </body>
        </html>
    );
}