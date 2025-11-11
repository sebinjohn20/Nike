import React, { useEffect, useState } from 'react'
import './ProductList.css'
import { useNavigate } from 'react-router-dom'
import Filter from '../Filter/Filter'
import {useFilter} from '../Context/Context'
function ProductList() {
 const navigate=useNavigate()
  const [products,setProducts]=useState([])
  const[filteredProducts,setFilteredProducts]=useState([])
  const{selectedSort,selectedColor,selectedGender,selectedPrice,selectedSize}=useFilter()
  useEffect(()=>{
    fetch("/Products.json")
    .then((res)=>res.json())
    .then((data)=>{
      setProducts(data)
      setFilteredProducts(data)
    })
  },[])
  useEffect(()=>{
    const applySorting=(productsToSort,sortBy)=>{
      const sortedProducts=[...productsToSort];
      switch(sortBy){
           
         
        case "Newest":
          return sortedProducts.sort((a,b)=>b.id-a.id);
        case "Price: High-Low":
          return sortedProducts.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        case "Price: Low-High":
          return sortedProducts.sort((a,b)=>parsePrice(a.price)-parsePrice(b.price))
     
          default:
        return sortedProducts;

      }
    }
    let filtered= products
    // Color filter
    .filter(product=>
      selectedColor.length ===0 || selectedColor.includes(product.color)
      
    )
    // Gender Filter
    .filter(product=>
      selectedGender.length===0 || selectedGender.includes(product.gender)
    )
    // Price Filter
    .filter(product =>
  selectedPrice.length === 0 ||
  selectedPrice.some(range => isPriceInRange(parsePrice(product.price), range))

)
  // Size Filter
  .filter(product=>
    selectedSize.length === 0 ||
    product.size.some(size=>selectedSize.includes(size))
  )

    filtered=applySorting(filtered,selectedSort)
    setFilteredProducts(filtered)
  },[selectedSort,selectedColor,selectedGender,selectedPrice,selectedSize])



const parsePrice = priceStr =>
  parseFloat(priceStr.replace(/[^0-9.]/g, "")) || 0;


const isPriceInRange=(price,range)=>{
  switch (range) {
    case "Under ₹ 2 500.00": return price<=2500
    case "₹ 2 501.00 - ₹ 7 500.00": return price>=2501 && price<=7500
    case "₹ 7 501.00 - ₹ 12 999.00": return price>=7501 && price<=12999
     case "Over ₹ 13 000.00": return price >= 13000;
   
  
    default:
      return true;
  }
}

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
            {filteredProducts.map((item,index)=>(
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
                      {item.offerPrice}
                    </div>
                    )}
                  </div>
                 </div>
               </div>
              </div>
            </div>
            ))}
           
            
          </div>
          <Filter></Filter>
       
    </div>
   
    </div>
  
    </>
  )
}

export default ProductList
