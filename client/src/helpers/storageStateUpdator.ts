import { Dispatch } from "react";

export const storageStateUpdator = <T>(
  setState: Dispatch<React.SetStateAction<T>>, 
  data: T,
  itemName: string,
  storePlace?: string
) => {
  
  let storage = storePlace === 'session' ? sessionStorage : localStorage

  setState(data)
  if (typeof data === 'string')
    storage.setItem(itemName, data)
  if (typeof data === 'number')
    storage.setItem(itemName, `${data}`)
  if (typeof data === 'object')
    storage.setItem(itemName, `${JSON.stringify(data)}`)

}