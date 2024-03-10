"use client"

import React, { useContext, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/Icon"
import { Theme } from "@/utils/theme"
import { ThemeContext } from "@/hooks/useTheme"

const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <Button
            size="icon"
            variant="ghost"
            className="rounded-full"
            onClick={toggleTheme}
        >
            {
                theme === Theme.LIGHT
                    ? <Icon name="moon"/>
                    : <Icon name="sun"/>
            }
        </Button>
    )
}

export default ThemeSwitcher