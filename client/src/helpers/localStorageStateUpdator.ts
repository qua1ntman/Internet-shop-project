import { Dispatch } from "react";

export const localStorageStateUpdator = <T>(
  setState: Dispatch<React.SetStateAction<T>>, 
  data: T,
  itemName: string
) => {
  setState(data)
  if (typeof data === 'string')
    localStorage.setItem(itemName, data)
  if (typeof data === 'number')
    localStorage.setItem(itemName, `${data}`)
  if (typeof data === 'object')
    localStorage.setItem(itemName, `${JSON.stringify(data)}`)
}