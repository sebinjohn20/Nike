import React, { useState } from 'react'
import './ProductDetail.css'

 const size =[
  "UK 5.5",
  "UK 6 (EU 39)",
  "UK 6 (EU 40)",
  "UK 6.5",
  "UK 7",
  "UK 7.5",
  "UK 8",
  "UK 8.5",
  "UK 9",
  "UK 9.5",
  "UK 10",
  "UK 10.5",
  "UK 11",
  "UK 11.5",
  "UK 12",
  "UK 13"
]
const silderImg=[
   "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/ab49cd62-e261-4dee-8511-242148604889/AIR+FORCE+1+%2707+LV8.png",
   "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/0ae0c6ab-c785-4a7c-9146-4ef188408433/AIR+FORCE+1+%2707+LV8.png",
   "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/8117e3c9-1b2a-4719-92d4-863dfab2cc35/AIR+FORCE+1+%2707+LV8.png",
   "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/3cc551b7-5b46-4081-9e11-318d31a6c439/AIR+FORCE+1+%2707+LV8.png",
   "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/e0a06185-1311-414b-84ad-4339070a5e72/AIR+FORCE+1+%2707+LV8.png",
   "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/a6bd4b85-8582-48a2-ae44-21e6025f5f0d/AIR+FORCE+1+%2707+LV8.png",
   "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/39692d18-74bf-4585-bc5d-551adf4bb8a9/AIR+FORCE+1+%2707+LV8.png",
   "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/2fdc0970-49d3-4567-8ee9-68dd7c8151d3/AIR+FORCE+1+%2707+LV8.png"

]

function ProductDetail() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const goToSlide = (index) => {
  setCurrentSlide(index);
};
  return (
 <>
  <main>
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
               {silderImg.map((_, index) => (
               <div
              key={index}
              
              className={`mobile-image-dot ${currentSlide === index ? "active" : ""}`}
            ></div>
              ))}
</div>

              </div>
              <ul className="mobile-image-carousel-list"
                  onScroll={(e) => {
                  const width = e.target.clientWidth;
                  const scrollX = e.target.scrollLeft;
                  const activeIndex = Math.round(scrollX / width);
                  setCurrentSlide(activeIndex);
                 }}>

                {silderImg.map((item,index)=>(
                <li key={index}>
                  <div className="mobile-image-carousel-list-flex">
                    <div className="mobile-image-carousel-list-flex-inner"></div>
                      <img className='image-carousel' src={item}></img>
                  </div>
                </li>
                ))}
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
                  {size.map((item,index)=>(
                    <div className="size-list-single-item-wraper">
                      <input type="radio" />
                  <div className="size-list-single-item" key={index}>
              
                      {item}
              
                  </div>
                  </div>
                  ))}
                </div>

              </div>
            </fieldset>
          </div>
         <div className="add-to-bag-container">
          <div>
             <button className='add-to-bag-btn'>
               Add to Bag
             </button>
          </div>
          <div className="favourite-btn-container">
                  <button className='favourite-btn'>
                    Favourite
                    <span>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path><title>non-filled</title></svg>
                    </span>
                  </button>
          </div>
         </div>
         <div className="product-description-wrapper">
          <p className="product-description-wrapper-text">
            Comfortable, durable and timeless—it's number one for a reason. The suede edition pairs metallic accents with a stacked Swoosh logo for style that tracks whether you're on court or on the go.
          </p>
          <br />
          <ul>
            <li className="product-description-color-description">Colour Shown: Desert Ochre/Black/Desert Ochre</li>
            <li className="product-description-color-description">Style: HQ1966-700</li>
            <li className="product-description-color-description">Country/Region of Origin: Vietnam</li>
          </ul>
         </div>
         <div className="view-product-details-container">
           <span>View Product Details</span>
         </div>
           <div className="product-info-accordions">
            <div className="product-info-accordions-inner">
              <summary>
                <span className='summary-wrapper'>
                  <h4>Delivery & Returns</h4>
                  <span className="summary-icons-down">
                    <svg aria-hidden="true" class="nds-summary-control" style={{marginLeft:'12px'}}  focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path></svg>
                  </span>
                </span>
              </summary>
            </div>
            <div className="product-info-accordions-inner">
              <summary>
                <span className='summary-wrapper'>
                  <h4>Reviews (17)</h4>
                  <span className="summary-icons-down">
                    <div className="summary-star-icon-conatiner">
                      <span>
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" fill="none"><path fill="currentColor" fill-rule="evenodd" stroke="currentColor" stroke-width="1.5" d="M2.56 10.346l5.12 3.694-1.955 5.978c-.225.688.568 1.261 1.157.836L12 17.159l5.12 3.695c.587.425 1.381-.148 1.155-.836l-1.954-5.978 5.118-3.694c.589-.425.286-1.352-.442-1.352H14.67l-.166-.507-1.789-5.47c-.225-.69-1.205-.69-1.43 0L9.33 8.993H3.003c-.728 0-1.03.927-.442 1.352z" clip-rule="evenodd"></path></svg>
                      </span>
                      <span>
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" fill="none"><path fill="currentColor" fill-rule="evenodd" stroke="currentColor" stroke-width="1.5" d="M2.56 10.346l5.12 3.694-1.955 5.978c-.225.688.568 1.261 1.157.836L12 17.159l5.12 3.695c.587.425 1.381-.148 1.155-.836l-1.954-5.978 5.118-3.694c.589-.425.286-1.352-.442-1.352H14.67l-.166-.507-1.789-5.47c-.225-.69-1.205-.69-1.43 0L9.33 8.993H3.003c-.728 0-1.03.927-.442 1.352z" clip-rule="evenodd"></path></svg>
                      </span>
                      <var><span>
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" fill="none"><path fill="currentColor" fill-rule="evenodd" stroke="currentColor" stroke-width="1.5" d="M2.56 10.346l5.12 3.694-1.955 5.978c-.225.688.568 1.261 1.157.836L12 17.159l5.12 3.695c.587.425 1.381-.148 1.155-.836l-1.954-5.978 5.118-3.694c.589-.425.286-1.352-.442-1.352H14.67l-.166-.507-1.789-5.47c-.225-.69-1.205-.69-1.43 0L9.33 8.993H3.003c-.728 0-1.03.927-.442 1.352z" clip-rule="evenodd"></path></svg>
                      </span>
                      <span>
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" fill="none"><path fill="currentColor" fill-rule="evenodd" stroke="currentColor" stroke-width="1.5" d="M2.56 10.346l5.12 3.694-1.955 5.978c-.225.688.568 1.261 1.157.836L12 17.159l5.12 3.695c.587.425 1.381-.148 1.155-.836l-1.954-5.978 5.118-3.694c.589-.425.286-1.352-.442-1.352H14.67l-.166-.507-1.789-5.47c-.225-.69-1.205-.69-1.43 0L9.33 8.993H3.003c-.728 0-1.03.927-.442 1.352z" clip-rule="evenodd"></path></svg>
                      </span>
                      <span>
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" fill="none"><path fill="currentColor" fill-rule="evenodd" stroke="currentColor" stroke-width="1.5" d="M2.56 10.346l5.12 3.694-1.955 5.978c-.225.688.568 1.261 1.157.836L12 17.159l5.12 3.695c.587.425 1.381-.148 1.155-.836l-1.954-5.978 5.118-3.694c.589-.425.286-1.352-.442-1.352H14.67l-.166-.507-1.789-5.47c-.225-.69-1.205-.69-1.43 0L9.33 8.993H3.003c-.728 0-1.03.927-.442 1.352z" clip-rule="evenodd"></path></svg>
                      </span></var>
                    </div>
                    <svg aria-hidden="true" class="nds-summary-control" style={{marginLeft:'12px'}}  focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path></svg>
                  </span>
                </span>
              </summary>
            </div>
            <div className="product-info-accordions-inner">
              <summary>
                <span className='summary-wrapper'>
                  <h4>Product Information</h4>
                  <span className="summary-icons-down">
                    <svg aria-hidden="true" class="nds-summary-control" style={{marginLeft:'12px'}}  focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path></svg>
                  </span>
                </span>
              </summary>
            </div>
           </div>
        </div>
      </div>
      </main>
    </>
  )
}

export default ProductDetail
