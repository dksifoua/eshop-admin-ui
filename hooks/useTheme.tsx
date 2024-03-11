"use client"

import React, { ReactNode, useContext, useEffect, useState } from "react"
import { ThemeContext } from "@/context/ThemeContext"
import { Theme } from "@/lib/types"

const THEME_STORAGE_KEY = process.env.NEXT_PUBLIC_THEME_STORAGE_KEY
  ? process.env.NEXT_PUBLIC_THEME_STORAGE_KEY
  : "theme"

function getLocalStorageTheme(): Theme | undefined {
  const theme: string | null = localStorage.getItem(THEME_STORAGE_KEY)
  if (theme && Object.values<string>(Theme).includes(theme)) {
    return theme as Theme
  }
  return undefined
}

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? Theme.DARK
    : Theme.LIGHT
}

function updateThemeDOM(theme?: Theme): void {
  const localStorageTheme = getLocalStorageTheme()
  if (!theme) {
    if (localStorageTheme) {
      theme = localStorageTheme === Theme.SYSTEM
        ? getSystemTheme()
        : localStorageTheme
    } else {
      theme = getSystemTheme()
      localStorage.setItem(THEME_STORAGE_KEY, "system")
    }
  }
  document.documentElement.classList.remove(...Object.values(Theme))
  document.documentElement.classList.add(theme)
}

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const { theme: DefaultTheme } = useContext(ThemeContext)
  const [theme, setTheme] = useState(DefaultTheme)

  useEffect(() => {
    const localStorageTheme = getLocalStorageTheme()
    if (localStorageTheme) {
      setTheme(localStorageTheme)
    }
    updateThemeDOM()
  }, [])

  const toggleTheme = () => {
    const currentTheme: Theme = theme == Theme.SYSTEM ? getSystemTheme() : theme
    const updatedTheme: Theme = currentTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    console.log(`Theme updated from ${currentTheme} to ${updatedTheme}`)
    setTheme(updatedTheme)
    updateThemeDOM(updatedTheme)
    localStorage.setItem(THEME_STORAGE_KEY, updatedTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}