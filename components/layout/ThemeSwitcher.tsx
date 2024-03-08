"use client"

import React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

const ThemeSwitcher: React.FC = () => {
    const { theme, setTheme } = useTheme()

    return <Button
        size="icon"
        variant="ghost"
        className="rounded-full"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
        {theme === "light" ? <Moon/> : <Sun/>}
    </Button>
}

export default ThemeSwitcher