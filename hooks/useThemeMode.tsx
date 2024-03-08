"use client"

import { createContext, useLayoutEffect, useState } from "react"

const STORAGE_KEY = "theme-mode"

enum ThemeMode {
    DARK = "dark",
    LIGHT = "light"
}

const useThemeMode = (): ThemeMode => {
    const [themeMode, setThemeMode] = useState<ThemeMode | null>(null)

    useLayoutEffect(() => {
        const storedThemeMode = localStorage.getItem(STORAGE_KEY)
        let currentThemeMode
        if (storedThemeMode && Object.values(ThemeMode).includes(storedThemeMode)) {
            currentThemeMode = storedThemeMode
        } else {
            currentThemeMode = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? ThemeMode.DARK
                : ThemeMode.LIGHT
            localStorage.setItem(STORAGE_KEY, currentThemeMode)
        }
        document.documentElement.classList.add(currentThemeMode)
        setThemeMode(currentThemeMode)
    }, [])

    const toggleThemeMode = () => {
        const currentThemeMode = themeMode
        const newThemeMode = themeMode === "dark"
            ? "light" as ThemeMode
            : "dark" as ThemeMode
        document.documentElement.classList.remove(currentThemeMode)
        document.documentElement.classList.add(newThemeMode)
        localStorage.setItem(STORAGE_KEY, newThemeMode)
        setThemeMode(newThemeMode)
    }

    return [themeMode, toggleThemeMode]
}

export default useThemeMode