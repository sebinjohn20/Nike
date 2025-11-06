import React, { useEffect, useState } from 'react'
import './ProductList.css'
import { useNavigate } from 'react-router-dom'

function ProductList() {
 const navigate=useNavigate()
  const [products,setProducts]=useState([])
  useEffect(()=>{
    fetch("/Products.json")
    .then((res)=>res.json())
    .then((data)=>{
      setProducts(data)
    })
  })
  return (
    <>
    <div className='productlist-container'>
     <div className="productlist-banner">
  <ul>
    <li>
      <div className="productlist-inner-banner">
        <span className="innerbanner-free-padding"></span>
        <div className="productlist-banner-content">
          <p>
            <a href="/">
              <u>10% Import Tax Reduction Discount with code: </u>
             <strong > <u>GEARUP</u></strong> 
              <u>&nbsp;</u>
            
            </a>
               <span style={{margin: '0 2px'}}></span>
                
            <a href="/">
              <u>Terms & Conditions.</u>
            </a>
          </p>
        </div>
      </div>
    </li>
  </ul>
    </div>
    <div className="product-search-result-conatiner">
        <div className="search-text-container">

        </div>
        <div className="point-header-position-anchor"></div>
        <div className="total-shoes-container">
            <header>
              <div className="wall-header-content">
                <h1 className='wall-header-title'>
                  <span className='title_prefix'> 
                    Search results for
                  </span>
                  <span>shoes</span>
                  <span className='wall-header-item-count'>
                    (3281 Results)
                  </span>
                </h1>
              </div>
            </header>
        </div>
    
          <div className="product-list-body">
            {products.map((item,index)=>(
            <div className="product-card-container" key={index} onClick={()=>navigate(`/product/${item.id}`)}>
              <div className="product-card-body">
               <div className='product-brand-title'>
               {item.brandName}
               </div>
               <div className="product-image-container">
                <img src={item.image} alt={item.brandName} />
               </div>
               <div className="product-info-container">
                <div className="product-card-title">
                  {item.justIn &&(
                  <div className="product-just-in-title">
                    {item.justIn}
                  </div>
                  )}
                  <div className="product-brand-name">
                    {item.brandName}
                  </div>
                  <div className="types-shoe">
                 {item.type}
                  </div>

                </div>
                 <div className="product-price-container">
                  <div className="product-price-container-inner">
                    <div className="product-price-text">
                      {item.price}
                    </div>
                    {item.offerPrice &&(
                    <div className="offer-price-text">
                      MRP : {item.offerPrice}
                    </div>
                    )}
                  </div>
                 </div>
               </div>
              </div>
            </div>
            ))}
            
          </div>
       
    </div>
   
    </div>
  
    </>
  )
}

export default ProductList
