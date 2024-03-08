"use client"

import { type ThemeProviderProps } from "next-themes/dist/types"
import { ThemeProvider } from "next-themes"

const EShopThemeProvider = ({ children, ...props }: ThemeProviderProps) =>
    <ThemeProvider {...props}>{children}</ThemeProvider>


export default EShopThemeProvider