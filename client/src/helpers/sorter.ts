import { IProductData } from "../interfaces/dataInterface";

export const productSorter = (
  data: IProductData[], 
  sortType: string
): IProductData[] => {

  if (sortType === 'ᐁ') {
    data = data.sort((a, b) => a.price - b.price)
  }
  if (sortType === 'ᐃ') {
    data = data.sort((a, b) => b.price - a.price)
  }
  if (sortType === 'A-Z') {
    data = data.sort((a, b) => {
      if(a.brand > b.brand) return -1 
      if(a.brand < b.brand) return 1  
      return 0
    })
  }
  if (sortType === 'Z-A') {
    data = data.sort((a, b) => {
      if(a.brand > b.brand) return 1 
      if(a.brand < b.brand) return -1  
      return 0
    })
  }

  return data
}