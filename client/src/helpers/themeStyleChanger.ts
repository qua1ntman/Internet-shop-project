// Вернет объект с цветом текста
export function themeTextChanger (theme: string): { color: string } {
  return theme === "light" ? { color: "rgba(20, 20, 20, 1)" } : { color: "rgba(255, 255, 255, 1)" };
};

// Вернет объект с цветом бэкграунда
export function themeBackChanger (theme: string): { backgroundColor: string } {
  return theme === "light"
    ? { backgroundColor: "rgba(255, 255, 255, 1)" }
    : { backgroundColor: "rgba(20, 20, 20, 1)" };
};
