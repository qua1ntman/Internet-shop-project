// Вернет объект с цветом текста
export function themeTextChanger(theme: string): { color: string } {
  return theme === "light"
    ? { color: "rgba(56, 54, 68, 1)" }
    : { color: "rgba(255, 255, 255, 1)" };
}

// Вернет объект с цветом бэкграунда
export function themeBackChanger(theme: string): { backgroundColor: string } {
  return theme === "light"
    ? { backgroundColor: "rgba(243, 239, 229, .7)" }
    : { backgroundColor: "rgba(56, 54, 68, .5)" };
}
