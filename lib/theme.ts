import { Theme } from "@/lib/types"

export const themeScript = (theme: Theme) => `
    (
        function(theme, Theme) {
            var theme = !window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.DARK : Theme.LIGHT;
            document.documentElement.classList.remove(...Object.values(Theme));
            document.documentElement.classList.add(theme);
        }
    )("${theme}", ${JSON.stringify(Theme)});
`