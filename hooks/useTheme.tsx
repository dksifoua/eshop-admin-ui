"use client"

import React, { ReactNode, useContext, useEffect, useState } from "react"
import { ThemeContext } from "@/context/ThemeContext"
import { Theme } from "@/lib/types"

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? Theme.DARK
    : Theme.LIGHT
}

function updateThemeDOM(theme?: Theme): void {
  theme = !theme
    ? getSystemTheme()
    : theme
  document.documentElement.classList.remove(...Object.values(Theme))
  document.documentElement.classList.add(theme)
}

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const { theme: DefaultTheme } = useContext(ThemeContext)
  const [theme, setTheme] = useState(DefaultTheme)

  useEffect(() => {
    updateThemeDOM()
  }, [])

  const toggleTheme = () => {
    const currentTheme: Theme = theme == Theme.SYSTEM ? getSystemTheme() : theme
    const updatedTheme: Theme = currentTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    console.log(`Theme updated from ${currentTheme} to ${updatedTheme}`)
    setTheme(updatedTheme)
    updateThemeDOM(updatedTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}