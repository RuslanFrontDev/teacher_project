import React from 'react'

import '../styled/productcard.css'

export const ProductCard = ({ id,
  productName,
  price,
  description,
  imageUrl,
  onClick,
  quantity, showAddButton = true,
  showDeleteButton = false,}) => {

  return (
    <div className="product-card">
    <div className="product-card-img">
      <img src={imageUrl} alt="product" />
    </div>
    <div className="product-card-description">
      <p>{productName}</p>
      <p>{description}</p>
      <span>Price {price}</span>
      {quantity && <p>Quantity {quantity}</p>}
    </div>
    {showAddButton && (
      <button
        onClick={onClick}
      >
        Add Cart
      </button>
    )}
    {showDeleteButton && (
      <button onClick={onClick} >Delete Cart</button>
    )}
  </div>
  )
}

export default ProductCard