// Вернет объект с цветом текста
export const themeTextChanger = (theme: string) => {
  return theme === 'light' ? { color: 'rgb(20, 20, 20)' } : { color: 'white' }
}

// Вернет объект с цветом бэкграунда
export const themeBackChanger = (theme: string) => {
  return theme === 'light' ? { backgroundColor: 'white' } : { backgroundColor: 'rgb(20, 20, 20)' }
}