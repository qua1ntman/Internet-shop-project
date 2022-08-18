export const themeTextChanger = (theme: string) => {
  return theme === 'light' ? { color: 'rgb(20, 20, 20)' } : { color: 'white' }
}

export const themeBackChanger = (theme: string) => {
  return theme === 'light' ? { backgroundColor: 'white' } : { backgroundColor: 'rgb(20, 20, 20)' }
}