import React, { useEffect, useState } from 'react'
import './ProductList.css'
import { useNavigate } from 'react-router-dom'
import Filter from '../Filter/Filter'
import {useFilter} from '../Context/Context'
import DesktopCard from '../DesktopCard/DesktopCard'

const sort=[
    "Featured",
    "Newest",
    "Price: High-Low",
    "Price: Low-High"

]
function ProductList() {
 const navigate=useNavigate()
  const [products,setProducts]=useState([])
  const[filteredProducts,setFilteredProducts]=useState([])
  const[opensort,setOpenSort]=useState(false)
  const[hideFilter,sethideFilter]=useState(false)
 const [openFilterItem, setOpenFilterItem] = useState({
  gender: false,
  price:false,
  sale:false,
  color:false,
  collections:false,
  height:false,
  brand:false,
  equipment:false,
  bags:false,
  materials:false,
  kids:false,
  air:false,
  features:false,
  tech:false
  
});



  const{selectedSort,selectedColor,selectedGender,selectedPrice,selectedSize,genderlist,
    updateGenderFilter,
    updatePriceFilter,
    priceList,
    offerList,
    updateOfferFilter,
    selectedOffer,
    updateColorFilter,
    updateBrandFilter,
    brandList,
    selectedBrand,
     updateSort

  }=useFilter()




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
              <u>10% Import Tax Reduction Discount with code: </u> <br />
             
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
    <div className="media-desktop-productlist-container">
        
           <div className="productlist-banner">
  <ul>
    <li>
      <div className="productlist-inner-banner">
        <span className="innerbanner-free-padding"></span>
        <div className="productlist-banner-content">
          <p>
            <a href="/">
              <u>10% Import Tax Reduction Discount with code: </u> <br />
             
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
          <div className="desktop-productlist-wrapper">
            <div className="wall-header-offset-des">

            </div>
            <div className="point-header-position-anchor">

            </div>
            <div className="sticky-header-desktop">
              <div className="sticky-header-wall">
                <div className="desk-wall-header-content">
                  <h1 className='wall-header-content-container'>
                    <span className="show-title-prefix">
                      Search results for <br />
                    </span>
                    <span className='shoes-text'>Shoes</span>
                    <span className="shoes-count-text">
                      (3121)
                    </span>
                  </h1>
                  <nav className='wall-header-nav' >
                  <button className="hidefilter-btn" onClick={()=>sethideFilter(!hideFilter)}>
                    <span className='hide-filter-btn-text'>
                    {hideFilter ? "Show Filters" : "Hide Filters"}
                    </span>
                    <svg aria-hidden="true" style={{marginTop:'2px'}} focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M21 8.25H10m-5.25 0H3"></path><path stroke="currentColor" stroke-width="1.5" d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd"></path><path stroke="currentColor" stroke-width="1.5" d="M3 15.75h10.75m5 0H21"></path><path stroke="currentColor" stroke-width="1.5" d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd"></path></svg>
                  </button>
                  <div className="desk-sort-container">
                    <button className='sort-btn-container' onClick={()=>setOpenSort(!opensort)}>
                      <span className='sort-btn-text'>{selectedSort?.length ? `Sort By: ` : `Sort By`}</span>
                      <span className='dropdown-btn-selected-text'> {selectedSort}</span>
                      <div className={`icon-dropdown-sort ${opensort? 'rotated' : ''}`}>

                      </div>
                    </button>
                    <div className="sort-drop-down-container">
                      <div className={`sort-drop-down-container-body ${opensort? 'open' :''}`}>
                        {sort.map((item,index)=>(
                      <button
                        key={index}
                        className={selectedSort === item ? "active-sort" : ""}
                      onClick={() => {
                                 updateSort(item);
                                setOpenSort(false); 
                              }}
                                                  
                      >{item}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="wall-header-offset-des">

            </div>
            <div className="desktop-result-body-container">
              <div className={`desktop-result-body-filter-container ${
                                  hideFilter ? "hide" : ""
                                }`}>
                <div className="simplebar-wrapper">
                  <div className="simplebar-height-auto-observer-wrapper">
                    <div className="simplebar-height-auto-observer">

                    </div>
                  </div>
                  <div className="simplebar-content-wrapper">
                    <div className="left-nav-wrapper">
                      <div className="left-nav-container-body">
                       <div className="left-nav-container-body-item">
                         <span className='first-item-des-body'
                                              onClick={() =>
                          setOpenFilterItem(prev => ({
                            ...prev,
                            gender: !prev.gender
                          }))
                        }
                         > 
                          <div className="first-item-des-body-trigger-content">
                            <div className="trigger-content-label">
                              Gender&nbsp;
                                             {selectedGender.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedGender.length})
                                                    </div>
                                                   )}
                              <div className={`filter-down-arrow-icon ${openFilterItem.gender ? 'rotated' : ''}`}>
                                
                              </div>
                            </div>
                          </div>
                         </span>
                         <div className={`filter-drop-down-hidden ${openFilterItem.gender ? 'open' : ''}`}>
                            <div className="filter-gender-body-container">
                                            {genderlist.map((item, index) => (
                                                <div className="filter-gender-body-first" onClick={() => updateGenderFilter(item)} key={index}>
                                                    <div className={`pesudo-checkbox ${selectedGender.includes(item) ? "is-checked" : ""}`}>
                                                        {selectedGender.includes(item) && <div className="icon-checkmark"></div>}
                                                    </div>
                                                    <span className="filter-gender-body-text">
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                         </div>
                       </div>
                         <div className="left-nav-container-body-item">
                         <span className='first-item-des-body'
                                              onClick={() =>
                          setOpenFilterItem(prev => ({
                            ...prev,
                            kids: !prev.kids
                          }))
                        }
                         > 
                          <div className="first-item-des-body-trigger-content">
                            <div className="trigger-content-label">
                            Kids &nbsp;
                                             {selectedOffer.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedOffer.length})
                                                    </div>
                                                   )}
                              <div className={`filter-down-arrow-icon ${openFilterItem.kids? 'rotated' : ''}`}>
                                
                              </div>
                            </div>
                          </div>
                         </span>
                    <div className={`filter-drop-down-hidden ${openFilterItem.gender ? 'open' : ''}`}>
                            
                         </div>
                       </div>
                        <div className="left-nav-container-body-item">
                         <span className='first-item-des-body'
                                              onClick={() =>
                          setOpenFilterItem(prev => ({
                            ...prev,
                            price: !prev.price
                          }))
                        }
                         > 
                          <div className="first-item-des-body-trigger-content">
                            <div className="trigger-content-label">
                              Shop By Price&nbsp;
                                             {selectedPrice.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedPrice.length})
                                                    </div>
                                                   )}
                              <div className={`filter-down-arrow-icon ${openFilterItem.price ? 'rotated' : ''}`}>
                                
                              </div>
                            </div>
                          </div>
                         </span>
                         <div className={`filter-drop-down-hidden ${openFilterItem.price ? 'open' : ''}`}>
                            <div className="filter-gender-body-container">
                                            {priceList.map((item, index) => (
                                                <div className="filter-gender-body-first" onClick={() => updatePriceFilter(item)} key={index}>
                                                    <div className={`pesudo-checkbox ${selectedPrice.includes(item) ? "is-checked" : ""}`}>
                                                        {selectedPrice.includes(item) && <div className="icon-checkmark"></div>}
                                                    </div>
                                                    <span className="filter-gender-body-text">
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                         </div>
                       </div>
                        <div className="left-nav-container-body-item">
                         <span className='first-item-des-body'
                                              onClick={() =>
                          setOpenFilterItem(prev => ({
                            ...prev,
                            sale: !prev.sale
                          }))
                        }
                         > 
                          <div className="first-item-des-body-trigger-content">
                            <div className="trigger-content-label">
                             Sale & Offers&nbsp;
                                             {selectedOffer.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedOffer.length})
                                                    </div>
                                                   )}
                              <div className={`filter-down-arrow-icon ${openFilterItem.sale ? 'rotated' : ''}`}>
                                
                              </div>
                            </div>
                          </div>
                         </span>
                         <div className={`filter-drop-down-hidden ${openFilterItem.sale ? 'open' : ''}`}>
                            <div className="filter-gender-body-container">
                                            {offerList.map((item, index) => (
                                                <div className="filter-gender-body-first" onClick={() => updateOfferFilter(item)} key={index}>
                                                    <div className={`pesudo-checkbox ${selectedOffer.includes(item) ? "is-checked" : ""}`}>
                                                        {selectedOffer.includes(item) && <div className="icon-checkmark"></div>}
                                                    </div>
                                                    <span className="filter-gender-body-text">
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                         </div>
                       </div>
                          <div className="left-nav-container-body-item">
                         <span className='first-item-des-body'
                                              onClick={() =>
                          setOpenFilterItem(prev => ({
                            ...prev,
                            color: !prev.color
                          }))
                        }
                         > 
                          <div className="first-item-des-body-trigger-content">
                            <div className="trigger-content-label">
                             Colour&nbsp;
                                             {selectedColor.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedColor.length})
                                                    </div>
                                                   )}
                              <div className={`filter-down-arrow-icon ${openFilterItem.color ? 'rotated' : ''}`}>
                                
                              </div>
                            </div>
                          </div>
                         </span>
                         <div className={`filter-drop-down-hidden ${openFilterItem.color? 'open' : ''}`}>
                            <div className="filter-gender-body-container for-colorsd">
                                           <div className="filter-color-section">
                                                        <button className="color-btn" onClick={() => updateColorFilter('Black')} >
                                                            <div className="color-single-item-container is-black">
                                                                {selectedColor.includes('Black')&&(
                                                                <div className="icon-color-checkmark">

                                                                </div>
                                                                )}
                                                            </div>
                                                            <span className="filter-color-text">
                                                                Black
                                                            </span>
                                                        </button>
                                                         <button className="color-btn" onClick={() => updateColorFilter('Blue')} >
                                                            <div className="color-single-item-container is-blue">
                                                                {selectedColor.includes('Blue')&&(
                                                                <div className="icon-color-checkmark">

                                                                </div>
                                                                )}
                                                            </div>
                                                            <span className="filter-color-text">
                                                                Black
                                                            </span>
                                                        </button>
                                                          <button className="color-btn" onClick={() => updateColorFilter('Brown')} >
                                                            <div className="color-single-item-container is-brown">
                                                                {selectedColor.includes('Brown')&&(
                                                                <div className="icon-color-checkmark">

                                                                </div>
                                                                )}
                                                            </div>
                                                            <span className="filter-color-text">
                                                                Brown
                                                            </span>
                                                        </button>
                                                         <button className="color-btn" onClick={() => updateColorFilter('Green')} >
                                                            <div className="color-single-item-container is-green">
                                                                {selectedColor.includes('Green')&&(
                                                                <div className="icon-color-checkmark">

                                                                </div>
                                                                )}
                                                            </div>
                                                            <span className="filter-color-text">
                                                                Green
                                                            </span>
                                                        </button>
                                                         <button className="color-btn" onClick={() => updateColorFilter('Grey')} >
                                                            <div className="color-single-item-container is-grey">
                                                                {selectedColor.includes('Grey')&&(
                                                                <div className="icon-color-checkmark">

                                                                </div>
                                                                )}
                                                            </div>
                                                            <span className="filter-color-text">
                                                                Grey
                                                            </span>
                                                        </button>
                                                         <button className="color-btn" onClick={() => updateColorFilter('Pink')} >
                                                            <div className="color-single-item-container is-pink">
                                                                {selectedColor.includes('Pink')&&(
                                                                <div className="icon-color-checkmark">

                                                                </div>
                                                                )}
                                                            </div>
                                                            <span className="filter-color-text">
                                                                Pink
                                                            </span>
                                                        </button>
                                                         <button className="color-btn" onClick={() => updateColorFilter('Purple')} >
                                                            <div className="color-single-item-container is-purple">
                                                                {selectedColor.includes('Purple')&&(
                                                                <div className="icon-color-checkmark">

                                                                </div>
                                                                )}
                                                            </div>
                                                            <span className="filter-color-text">
                                                                Purple
                                                            </span>
                                                        </button>
                                                         <button className="color-btn" onClick={() => updateColorFilter('Red')} >
                                                            <div className="color-single-item-container is-red">
                                                                {selectedColor.includes('Red')&&(
                                                                <div className="icon-color-checkmark">

                                                                </div>
                                                                )}
                                                            </div>
                                                            <span className="filter-color-text">
                                                                Red
                                                            </span>
                                                        </button>
                                                         <button className="color-btn" onClick={() => updateColorFilter('White')} >
                                                            <div className="color-single-item-container is-white">
                                                                {selectedColor.includes('White')&&(
                                                                <div className="icon-color-checkmark">

                                                                </div>
                                                                )}
                                                            </div>
                                                            <span className="filter-color-text">
                                                                white
                                                            </span>
                                                        </button>
                                                         <button className="color-btn" onClick={() => updateColorFilter('Yellow')} >
                                                            <div className="color-single-item-container is-yellow">
                                                                {selectedColor.includes('Yellow')&&(
                                                                <div className="icon-color-checkmark">

                                                                </div>
                                                                )}
                                                            </div>
                                                            <span className="filter-color-text">
                                                                Yellow
                                                            </span>
                                                        </button>
                                                         
                                                    </div>
                                        </div>
                         </div>
                       </div>
                        <div className="left-nav-container-body-item">
                         <span className='first-item-des-body'
                                              onClick={() =>
                          setOpenFilterItem(prev => ({
                            ...prev,
                            collections: !prev.collections
                          }))
                        }
                         > 
                          <div className="first-item-des-body-trigger-content">
                            <div className="trigger-content-label">
                             Collections&nbsp;
                                             {selectedOffer.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedOffer.length})
                                                    </div>
                                                   )}
                              <div className={`filter-down-arrow-icon ${openFilterItem.collections ? 'rotated' : ''}`}>
                                
                              </div>
                            </div>
                          </div>
                         </span>
                       <div className={`filter-drop-down-hidden ${openFilterItem.gender ? 'open' : ''}`}>
                            
                         </div>
                       </div>
                        <div className="left-nav-container-body-item">
                         <span className='first-item-des-body'
                                              onClick={() =>
                          setOpenFilterItem(prev => ({
                            ...prev,
                            height: !prev.height
                          }))
                        }
                         > 
                          <div className="first-item-des-body-trigger-content">
                            <div className="trigger-content-label">
                             Shoe Height&nbsp;
                                             {selectedOffer.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedOffer.length})
                                                    </div>
                                                   )}
                              <div className={`filter-down-arrow-icon ${openFilterItem.height ? 'rotated' : ''}`}>
                                
                              </div>
                            </div>
                          </div>
                         </span>
                      <div className={`filter-drop-down-hidden ${openFilterItem.gender ? 'open' : ''}`}>
                            
                         </div>
                       </div>
                        <div className="left-nav-container-body-item">
                         <span className='first-item-des-body'
                                              onClick={() =>
                          setOpenFilterItem(prev => ({
                            ...prev,
                            air: !prev.air
                          }))
                        }
                         > 
                          <div className="first-item-des-body-trigger-content">
                            <div className="trigger-content-label">
                           Air Max  &nbsp;
                                             {selectedOffer.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedOffer.length})
                                                    </div>
                                                   )}
                              <div className={`filter-down-arrow-icon ${openFilterItem.air ? 'rotated' : ''}`}>
                                
                              </div>
                            </div>
                          </div>
                         </span>
                     <div className={`filter-drop-down-hidden ${openFilterItem.air ? 'open' : ''}`}>
                            
                         </div>
                       </div>
                         <div className="left-nav-container-body-item">
                         <span className='first-item-des-body'
                                              onClick={() =>
                          setOpenFilterItem(prev => ({
                            ...prev,
                            features: !prev.features                     }))
                        }
                         > 
                          <div className="first-item-des-body-trigger-content">
                            <div className="trigger-content-label">
                            Features &nbsp;
                                             {selectedOffer.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedOffer.length})
                                                    </div>
                                                   )}
                              <div className={`filter-down-arrow-icon ${openFilterItem.features ? 'rotated' : ''}`}>
                                
                              </div>
                            </div>
                          </div>
                         </span>
                     <div className={`filter-drop-down-hidden ${openFilterItem.features ? 'open' : ''}`}>
                            
                         </div>
                       </div>
                       <div className="left-nav-container-body-item">
                         <span className='first-item-des-body'
                                              onClick={() =>
                          setOpenFilterItem(prev => ({
                            ...prev,
                            brand: !prev.brand
                          }))
                        }
                         > 
                          <div className="first-item-des-body-trigger-content">
                            <div className="trigger-content-label">
                              Brand&nbsp;
                                             {selectedBrand.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedBrand.length})
                                                    </div>
                                                   )}
                              <div className={`filter-down-arrow-icon ${openFilterItem.brand ? 'rotated' : ''}`}>
                                
                              </div>
                            </div>
                          </div>
                         </span>
                         <div className={`filter-drop-down-hidden ${openFilterItem.brand ? 'open' : ''}`}>
                            <div className="filter-gender-body-container">
                                            {brandList.map((item, index) => (
                                                <div className="filter-gender-body-first" onClick={() => updateBrandFilter(item)} key={index}>
                                                    <div className={`pesudo-checkbox ${selectedBrand.includes(item) ? "is-checked" : ""}`}>
                                                        {selectedBrand.includes(item) && <div className="icon-checkmark"></div>}
                                                    </div>
                                                    <span className="filter-gender-body-text">
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                         </div>
                       </div>
                        <div className="left-nav-container-body-item">
                         <span className='first-item-des-body'
                                              onClick={() =>
                          setOpenFilterItem(prev => ({
                            ...prev,
                            tech: !prev.tech                    }))
                        }
                         > 
                          <div className="first-item-des-body-trigger-content">
                            <div className="trigger-content-label">
                            Technology&nbsp;
                                             {selectedOffer.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedOffer.length})
                                                    </div>
                                                   )}
                              <div className={`filter-down-arrow-icon ${openFilterItem.tech ? 'rotated' : ''}`}>
                                
                              </div>
                            </div>
                          </div>
                         </span>
                     <div className={`filter-drop-down-hidden ${openFilterItem.features ? 'open' : ''}`}>
                            
                         </div>
                       </div>
                       
                          <div className="left-nav-container-body-item">
                         <span className='first-item-des-body'
                                              onClick={() =>
                          setOpenFilterItem(prev => ({
                            ...prev,
                            equipment: !prev.equipment
                          }))
                        }
                         > 
                          <div className="first-item-des-body-trigger-content">
                            <div className="trigger-content-label">
                             Equipment&nbsp;
                                             {selectedOffer.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedOffer.length})
                                                    </div>
                                                   )}
                              <div className={`filter-down-arrow-icon ${openFilterItem.equipment ? 'rotated' : ''}`}>
                                
                              </div>
                            </div>
                          </div>
                         </span>
                      <div className={`filter-drop-down-hidden ${openFilterItem.gender ? 'open' : ''}`}>
                            
                         </div>
                       </div>
                         <div className="left-nav-container-body-item">
                         <span className='first-item-des-body'
                                              onClick={() =>
                          setOpenFilterItem(prev => ({
                            ...prev,
                            bags: !prev.bags
                          }))
                        }
                         > 
                          <div className="first-item-des-body-trigger-content">
                            <div className="trigger-content-label">
                             Bags&nbsp;
                                             {selectedOffer.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedOffer.length})
                                                    </div>
                                                   )}
                              <div className={`filter-down-arrow-icon ${openFilterItem.bags ? 'rotated' : ''}`}>
                                
                              </div>
                            </div>
                          </div>
                         </span>
                      <div className={`filter-drop-down-hidden ${openFilterItem.gender ? 'open' : ''}`}>
                            
                         </div>
                       </div>
                          <div className="left-nav-container-body-item">
                         <span className='first-item-des-body'
                                              onClick={() =>
                          setOpenFilterItem(prev => ({
                            ...prev,
                            materials: !prev.materials
                          }))
                        }
                         > 
                          <div className="first-item-des-body-trigger-content">
                            <div className="trigger-content-label">
                            Materials &nbsp;
                                             {selectedOffer.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedOffer.length})
                                                    </div>
                                                   )}
                              <div className={`filter-down-arrow-icon ${openFilterItem.materials ? 'rotated' : ''}`}>
                                
                              </div>
                            </div>
                          </div>
                         </span>
                     <div className={`filter-drop-down-hidden ${openFilterItem.gender ? 'open' : ''}`}>
                            
                         </div>
                       </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="simplebar-track-horizontal">
                  <div className="simplebar-scrollbar">

                  </div>
                </div>
    
              </div>
           <div className="product-list-desktop-list-container">
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
           </div>
           

            </div>
          </div>
          </div>



    


  
    </>
  )
}

export default ProductList
