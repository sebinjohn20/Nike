import React from 'react'
import './ProductList.css'

function ProductList() {
  return (
    <div className='productlist-container'>
      <div className="productlist-banner">
        <ul>
            <li>
                <div className="productlist-inner-banner">
                    <span className="innerbanner-free-padding">
                        
                    </span>
                    <div className="productlist-banner-content">
                        <p>
                            <u>10% Import Tax Reduction Discount with code: </u>
                            <u>GEARUP</u><u>&nbsp;</u>
                            <u>Terms & Conditions.</u>
                        </p>
                    </div>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default ProductList
