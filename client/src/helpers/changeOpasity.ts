export const changeOpasity = (rgba: string, share: number): string => {
  const rgbaArr: string[] = rgba.split('(')[1].replace(')', '').split(', ')
  rgbaArr[3] = `${share}`
  return `rgba(${rgbaArr.join(', ')})`
}