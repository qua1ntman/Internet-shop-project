import React, { useContext } from 'react'
import { appContext } from '../../App';
import { localStorageStateUpdator } from '../../helpers/localStorageStateUpdator';
import { ISubCategoryData } from '../../interfaces/dataInterface';
import { useCategory } from './../../contexts/CategoryContext';
import './Sort.scss'
import { productSorter } from './../../helpers/sorter';

export const Sort = () => {

  const { 
    clickedSubcategory,
    setClickedSubcategory,
    sort,
    setSort
  } = useCategory()

  const { color } = useContext(appContext);

  const handlePriceSort = () => {
    let data: string = sort === 'ᐁ' ? 'ᐃ' : sort === 'ᐃ' ? 'ᐁ' : 'ᐃ'
    localStorageStateUpdator(setSort, data, 'sort')
    let sortedData: ISubCategoryData = 
      JSON.parse(JSON.stringify(clickedSubcategory))
    sortedData.products = productSorter(sortedData.products!, sort)
    localStorageStateUpdator(setClickedSubcategory, sortedData, 'subcategory')
    setClickedSubcategory(sortedData)
  }

  const handleTitleSort = () => {
    let data: string = sort === 'A-Z' ? 'Z-A' : sort === 'Z-A' ? 'A-Z' : 'Z-A'
    localStorageStateUpdator(setSort, data, 'sort')
    let sortedData: ISubCategoryData = 
      JSON.parse(JSON.stringify(clickedSubcategory))
    sortedData.products = productSorter(sortedData.products!, sort)
    localStorageStateUpdator(setClickedSubcategory, sortedData, 'subcategory')
    setClickedSubcategory(sortedData)
  }

  return (
    <div className='sort-container'>
      <div 
        style={{ color }}
        className="sort-btn"
        onClick={handlePriceSort}
      >
        Sort by Price {sort === 'ᐃ' ? 'ᐃ' : sort === 'ᐁ' ? 'ᐁ' : ''}
      </div>
      <div 
        style={{ color }}
        className="sort-btn"
        onClick={handleTitleSort}
      >
        Sort by Name {sort === 'A-Z' ? '(A-Z)' : sort === 'Z-A' ? '(Z-A)': ''}
      </div>
    </div>
  )
}
