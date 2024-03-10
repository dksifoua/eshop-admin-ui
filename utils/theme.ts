const THEME_STORAGE_KEY = "eshop-theme"

export enum Theme {
    DARK = "dark",
    LIGHT = "light",
}

export const setLocalStorageTheme = (updatedTheme: Theme, currentTheme?: Theme): void => {
    localStorage.setItem(THEME_STORAGE_KEY, updatedTheme)
    currentTheme && document.documentElement.classList.remove(currentTheme)
    document.documentElement.classList.add(updatedTheme)
}

const getSystemTheme = (): Theme => {
    // if (!window) return Theme.LIGHT

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? Theme.DARK
        : Theme.LIGHT
}

export const getLocalStoredTheme = (): Theme => {
    let theme: Theme | null
    const localStoredTheme: string | null = localStorage.getItem(THEME_STORAGE_KEY)
    if (localStoredTheme && Object.values<string>(Theme).includes(localStoredTheme)) {
        theme = localStoredTheme as Theme
    } else {
        theme = getSystemTheme()
    }
    return theme
}

export const themeScript: string = `
    (
        function(THEME_STORAGE_KEY, Theme) {
            var localStoredTheme = localStorage.getItem(THEME_STORAGE_KEY);
            var theme;
            if (localStoredTheme && Object.values(Theme).includes(localStoredTheme)) {
                theme = localStoredTheme;
            } else {
                theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.DARK : Theme.LIGHT;
                localStorage.setItem(THEME_STORAGE_KEY, theme);
            }
            document.documentElement.classList.add(theme);
        }
    )("${THEME_STORAGE_KEY}", ${JSON.stringify(Theme)});
`