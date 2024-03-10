"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}
      className="rounded-full"
    >
      {
        theme === "dark" ? <Sun/> : <Moon/>
      }
    </Button>
  )
}

export default function Header() {
  return (
    <div className="flex flex-row w-full h-[10%] border-b-2">
      <div className="flex items-center ml-auto">
        <ThemeToggle/>
      </div>
    </div>
  )
}