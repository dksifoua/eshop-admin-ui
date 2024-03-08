"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/Icon"
import useThemeMode from "@/hooks/useThemeMode"

const ThemeSwitcher: React.FC = () => {
    const [themeMode, toggleThemeMode] = useThemeMode()

    return <Button
        size="icon"
        variant="ghost"
        className="rounded-full"
        onClick={() => toggleThemeMode()}
    >
        {themeMode === "light" ? <Icon name="moon"/> : <Icon name="sun"/>}
    </Button>
}

export default ThemeSwitcher