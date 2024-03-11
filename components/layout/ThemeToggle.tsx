"use client"

import React, { useContext } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { Theme } from "@/lib/types"
import { ThemeContext } from "@/context/ThemeContext"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={toggleTheme}
      className="rounded-full"
    >
      {
        theme === Theme.DARK ? <Sun/> : <Moon/>
      }
    </Button>
  )
}