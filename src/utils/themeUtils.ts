export type Theme = 'light' | 'dark'

/**
 * Récupère le thème du système à l'initialisation
 * @returns dark si le thème système est dark, light sinon
 */
export function getInitialTheme(): Theme {
  const saved = localStorage.getItem('theme')

  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  return saved ? (saved as Theme) : systemDark ? 'dark' : 'light'
}

/**
 * Applique le thème fournit en paramètre
 * @param theme - le thème à appliquer
 */
export function applyTheme(theme: Theme) {
  const isDark = theme === 'dark'

  document.documentElement.classList.toggle('dark', isDark)
  localStorage.setItem('theme', theme)
}
