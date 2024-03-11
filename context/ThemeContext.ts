import { createContext } from "react"
import { Theme } from "@/lib/types"

export const ThemeContext = createContext({
  theme: Theme.SYSTEM,
  toggleTheme: () => {}
})