import { useCallback, useEffect, useState } from "react"

type Theme = "dark" | "light"
const STORAGE_KEY = "auto-lux-theme"

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("theme-light", theme === "light")
  document.documentElement.style.colorScheme = theme === "light" ? "light" : "dark"
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark"
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null
    return stored ?? "dark"
  })

  useEffect(() => {
    applyTheme(theme)
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"))
  }, [])

  return { theme, toggle }
}
