import React from 'react'
import './ProductDetail.css'


function ProductDetail() {
  return (
 <>

      <div className="product-detalis-banner">
        <div className="product-detalis-banner-body">
          <p className='nds-text'></p>
          <p className='banner-body-p'>
            <a href="/">
            <u>10% Import Tax Reduction Discount with code: </u>
            <u>GEARUP</u>
           <u>&nbsp;</u>
            </a>
            <a href="/">
            <u>Terms & Conditions.</u>
            </a>
          </p>
        </div>
      </div>
      


      <div className="product-details-wrapper">
        <div className="grid-item-product-title-container">
          <div>
            <h1>Nike Air Force 1 '07 LV8</h1>
            <h2>Men's Shoes</h2>
          </div>
        </div>
        <div className="grid-item-price-container">
          <div className="grid-item-price-container-inner">
            <div className="grid-item-price-text">
              <span>MRP : ₹ 10 795.00</span>
            </div>
            <div className="additional-price-message">
              <div className="additional-price-message-inner">
                <span>Inclusive of all taxes</span>
              </div>
              <div className="additional-price-message-inner">
                <span>(Also includes all applicable duties)</span>
              </div>
            </div>
          </div>

          <div className="image-carousel-container">
            <div className="image-carousel-container-inner">
              <div className="highly-rated-container">
                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="20px" height="20px" fill="none"><path fill="currentColor" fill-rule="evenodd" stroke="currentColor" stroke-width="1.5" d="M2.56 10.346l5.12 3.694-1.955 5.978c-.225.688.568 1.261 1.157.836L12 17.159l5.12 3.695c.587.425 1.381-.148 1.155-.836l-1.954-5.978 5.118-3.694c.589-.425.286-1.352-.442-1.352H14.67l-.166-.507-1.789-5.47c-.225-.69-1.205-.69-1.43 0L9.33 8.993H3.003c-.728 0-1.03.927-.442 1.352z" clip-rule="evenodd"></path></svg>
                <span className="highly-rated-text">
                  Highly Rated
                </span>
              </div>
              <div className="div-silder-dot-wrapper">
              <div className="div-silder-dot-conatiner">
               <div className="mobile-image-dot active">
                </div>
                  <div className="mobile-image-dot">
                </div>
                  <div className="mobile-image-dot">
                </div>
                  <div className="mobile-image-dot">
                </div>
                  <div className="mobile-image-dot">
                </div>
                  <div className="mobile-image-dot">
                </div>
                  <div className="mobile-image-dot">
                </div>
                  <div className="mobile-image-dot">
                </div>

               </div>
              </div>
              <ul className="mobile-image-carousel-list">
                <li>
                  <div className="mobile-image-carousel-list-flex">
                    <div className="mobile-image-carousel-list-flex-inner"></div>
                      <img className='image-carousel' src="https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/ab49cd62-e261-4dee-8511-242148604889/AIR+FORCE+1+%2707+LV8.png" alt="" />
                    
                  </div>
                </li>
              </ul>
            </div>
            <div className="color-image-silde">
              <div className="first-color-silder">
                <img className='color-img-silder' src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/89b2efd0-68c8-4761-9623-2541df67db5c/AIR+FORCE+1+%2707+LV8.png" alt="" />
              </div>
                <div className="first-color-silder">
                <img className='color-img-silder active' src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/654141ae-1e26-429d-b644-52b25052fc8c/AIR+FORCE+1+%2707+LV8.png" alt="" />
              </div>
            </div>
          </div>
          <div className="image-mobile-size-container">
            <fieldset>
              <legend>
                <span>Select Size</span>
                <div className='size-guide-container'>
                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M21.75 10.5v6.75a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V10.5m3.308-2.25h12.885"></path><path stroke="currentColor" stroke-width="1.5" d="M15.79 5.599l2.652 2.65-2.652 2.653M8.21 5.599l-2.652 2.65 2.652 2.653M17.25 19v-2.5M12 19v-2.5M6.75 19v-2.5"></path></svg>
                <span className='size-guide-text'>Size Guide</span>
                </div>
              </legend>
              <div className="size-list-grid-container">
                <div className="size-list-grid-container-wrapper">
                  <div className="size-list-single-item">
                    <div className='size-list-single-item-text'>
                      UK 5.5
                    </div>
                  </div>
                </div>

              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
