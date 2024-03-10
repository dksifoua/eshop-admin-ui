"use client"

import React, { createContext, ReactNode, useEffect, useState } from "react"
import { getLocalStoredTheme, setLocalStorageTheme, Theme, themeScript } from "@/utils/theme"

interface ThemeContextProps {
    theme: Theme,
    toggleTheme: () => void,
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: Theme.LIGHT,
    toggleTheme: (): void => {
    }
})

const ThemeScript = React.memo(() => (
    <script dangerouslySetInnerHTML={{ __html: themeScript }}/>
), (): boolean => true)

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

    useEffect(() => {
        const localStoredTheme: Theme = getLocalStoredTheme()
        setLocalStorageTheme(localStoredTheme)
        setTheme(localStoredTheme)
    }, [])

    const toggleTheme = () => {
        const updatedTheme: Theme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setLocalStorageTheme(updatedTheme, theme)
        setTheme(updatedTheme)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeScript/>
            {children}
        </ThemeContext.Provider>
    )
}