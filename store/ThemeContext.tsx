"use client"

import React, { createContext, ReactElement, useEffect, useState } from "react"

type Theme = "system" | "light" | "dark"

interface ContextProviderProps {
    children: React.ReactNode | React.ReactNode[]
}

export const ThemeContextProvider: React.FC<ContextProviderProps> = ({ children }): ReactElement => {
    const [themeMode, setThemeMode] = useState<Theme>("system")

    useEffect(() => {
        const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)")
        setThemeMode(mediaQueryList.matches ? "dark" : "light")
    }, []);

    const toggleThemeMode = () => {}

    return (
        <ThemeContext.Provider value={{themeMode: themeMode, toggleThemeMode: toggleThemeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

const ThemeContext = createContext({
    themeMode: "light",
    toggleThemeMode: () => {}
})

export default ThemeContext