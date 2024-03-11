import React from "react"
import ThemeToggle from "@/components/layout/ThemeToggle"

export default function Header() {
  return (
    <div className="flex flex-row w-full h-[10%] border-b-2">
      <div className="flex items-center ml-auto">
        <ThemeToggle/>
      </div>
    </div>
  )
}