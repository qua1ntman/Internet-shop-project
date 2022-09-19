import React from 'react'
import { ISubCategoryData } from '../../interfaces/dataInterface';
import { useCategory } from './../../contexts/CategoryContext';
import './Sort.scss'
import { productSorter } from './../../helpers/sorter';
import { useApp } from '../../contexts/AppContext';
import { storageStateUpdator } from '../../helpers/storageStateUpdator';

export const Sort = () => {

  const { 
    clickedSubcategory,
    setClickedSubcategory,
    sort,
    setSort
  } = useCategory()

  const { color } = useApp();

  const handlePriceSort = () => {
    let data: string = sort === 'ᐁ' ? 'ᐃ' : sort === 'ᐃ' ? 'ᐁ' : 'ᐃ'
    storageStateUpdator(setSort, data, 'sort', 'session')
    let sortedData: ISubCategoryData = 
      JSON.parse(JSON.stringify(clickedSubcategory))
    sortedData.products = productSorter(sortedData.products!, data)
    storageStateUpdator(setClickedSubcategory, sortedData, 'subcategory', 'session')
  }

  const handleTitleSort = () => {
    let data: string = sort === 'A-Z' ? 'Z-A' : sort === 'Z-A' ? 'A-Z' : 'Z-A'
    storageStateUpdator(setSort, data, 'sort', 'session')
    let sortedData: ISubCategoryData = 
      JSON.parse(JSON.stringify(clickedSubcategory))
    sortedData.products = productSorter(sortedData.products!, data)
    storageStateUpdator(setClickedSubcategory, sortedData, 'subcategory', 'session')
  }

  return (
    <div className='sort-container'>
      <div 
        style={{ color }}
        className="sort-btn"
        onClick={handlePriceSort}
      >
        Sort by Price {sort === 'ᐃ' ? 'ᐁ' : sort === 'ᐁ' ? 'ᐃ' : ''}
      </div>
      <div 
        style={{ color }}
        className="sort-btn"
        onClick={handleTitleSort}
      >
        Sort by Name {sort === 'A-Z' ? '(Z-A)' : sort === 'Z-A' ? '(A-Z)': ''}
      </div>
    </div>
  )
}
