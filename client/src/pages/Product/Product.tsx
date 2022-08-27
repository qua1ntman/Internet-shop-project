import React, { useState } from 'react'
import { IProduct } from './../../interfaces/dataInterface';
import './Product.scss'

export const Product = ({ product }: {product: IProduct | undefined}) => {

  const [bigImg, setBigImg] = useState(product?.image[0])

  console.dir(product);
  if (product) {
    return (
      <div className='product-page-container'>
        <div className='product-images-container'>
          <div className="product-slider">
            {product.image.map((img, i) => {
              return <img onClick={() => setBigImg(img)} className='slider-img' key={i} src={img} alt={product.title} />
            })}
          </div>
          <div className="big-image">
            <img src={bigImg} alt={product.title} />
          </div>
        </div>
        <div className='product-info-container'>
          <div className="product-sizes">
            <label htmlFor="size">Size: </label>
            <select name="size" id="size">
              {product.size.map((item, i) => {
                if (i === 0) return (
                  <option key={i} value={item} selected>{item}</option>
                )
                return <option key={i} value={item}>{item}</option>
              })}
            </select>
          </div>
          <div className="product-description">
            <div className='product-description-name'>
              <span>Material:</span>
              <span>Color:</span>
              <span>Collection:</span>
              <span>Brands:</span>
              <span>New:</span>
            </div>
            <div className='product-description-value'>
              <span>{product.material.join(', ')}</span>
              <span>{product.color}</span>
              <span>{product.collection}</span>
              <span>{product.brand}</span>
              <span>{product.kind ? 'Yes' : 'No'}</span>
              </div>
            </div>
        </div>
      </div>
    )
  } else return (
    <div>No no no</div>
  )
  
}
