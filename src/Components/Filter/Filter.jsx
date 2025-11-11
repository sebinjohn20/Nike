import React, { useState } from 'react'
import "../../Fonts/font.css";
import "./Filter.css"
import {useFilter} from '../Context/Context'
const sort=[
    "Featured",
    "Newest",
    "Price: High-Low",
    "Price: Low-High"

]



function Filter() {
    const[showFilter,setShowFilter]=useState(false)
    const [isOpen, setIsOpen] = useState(false);



    const{genderlist,
        selectedGender,
        updateGenderFilter, 
        selectedPrice,
        updatePriceFilter,
        priceList,
        offerList,
        selectedOffer,
        updateOfferFilter,
        sizeList,
        selectedSize,
        updateSizeFilter,
        selectedColor,
        updateColorFilter,
        selectedSports,
        updateSportsFilter,
        sportsList,
        collectionList,
        selectedCollections,
        updateCollectionsFilter,
        showmoreCollections,
        selectedshoes,
        updateShoesFilter,
        shoesList,
        selectedShoesHeight,
        updateShoesHeightFilter,
        shoeHeightList,
         selectedSurface,
        updateSurfaceFilter,
        surfaceList,
        selectedBrand,
        updateBrandFilter,
        brandList,
        selectedTechnology,
        updateTechnologyFilter,
        technologyList,
        moreTechnologyList,
        widthList,
       selectedWidth,
      updateWidthFilter,
       selectedSort,
       updateSort
        

        }=useFilter();

  return (
    <>
      <div className="sort-and-filter-btn-container">
               <button onClick={()=>setShowFilter(!showFilter)}>
                <span className="filter-sort-btn-text">
                  Sort & Filter
                </span>
                <svg aria-hidden="true" class="icon-filter-ds" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M21 8.25H10m-5.25 0H3"></path><path stroke="currentColor" stroke-width="1.5" d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd"></path><path stroke="currentColor" stroke-width="1.5" d="M3 15.75h10.75m5 0H21"></path><path stroke="currentColor" stroke-width="1.5" d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd"></path></svg>
               </button>
            </div>

            {showFilter &&(
                <div className="filter-top-container">
                    <div className="filter-top-inner-container">
                        <div className="filter-top-inner-container-body"></div>
                <div className='draggable-filter-container'>
                    <div className="mobile-results-nav">
                        <div className="mobile-results-nav-closebtn">
                            <button  onClick={()=>setShowFilter(!showFilter)}>
                                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945"></path></svg>
                            </button>
                            </div>
                            <div className="mobile-results-nav-scroll-conatiner">
                                <h1 className='mobile-results-nav-top-tittle'>Filter</h1>
                                <div className="sort-container-wrapper">
                                    <div className="sort-items-container">
                                        <fieldset>
                                            <legend>
                                                <h3 className='sort-by-text'>Sort By</h3>
                                            </legend>
                                            <div className="sort-items-container-flex">
                                              {sort.map((item, index) => (
                                                <div className="sort-items-container-flex-one" key={index} onClick={()=>updateSort(item)}>
                                                    <input type="radio" name="sort-option" 
                                                     checked={selectedSort === item}
                                                    
                                                    /> 
                                                    <span className='radio-cirlce'></span>
                                                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px">
                                                    <g transform="translate(2,2)">
                                                        <circle className="radio-outline" cx="10" cy="10" r="9.25"></circle>
                                                        <circle className="radio-fill" cx="10" cy="10" r="5"></circle>
                                                    </g>
                                                    </svg>
                                                    <h4>{item}</h4>
                                                </div>
                                                ))}
                                                                                           
                                         </div>
                                        </fieldset>
                                    </div>
                                    <div className="filter-group-container">
                                        <div className="filter-gender-container">
                                            <div className="filter-gender-heading-conatiner">
                                                <div className="filter-gender-text">
                                                   Gender&nbsp;
                                                   {selectedGender.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedGender.length})
                                                    </div>
                                                   )}
                                                </div>
                                                
                                            </div>
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
                                     <div className="filter-group-container">
                                        <div className="filter-price-container">
                                            <div className="filter-gender-heading-conatiner">
                                                <div className="filter-gender-text">
                                                   Shop By Price&nbsp;
                                                   {selectedPrice.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedPrice.length})
                                                    </div>
                                                   )}
                                                </div>
                                                
                                            </div>
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
                                    <div className="filter-group-container">
                                        <div className="filter-price-container">
                                            <div className="filter-gender-heading-conatiner">
                                                <div className="filter-gender-text">
                                                  Sale & Offers&nbsp;
                                                   {selectedOffer.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedOffer.length})
                                                    </div>
                                                   )}
                                                </div>
                                                
                                            </div>
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

                                   
                                     <div className="filter-group-container">
                                        <div className="filter-price-container">
                                            <div className="filter-gender-heading-conatiner">
                                                <div className="filter-gender-text">
                                                  Size&nbsp;
                                                   {selectedSize.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedSize.length})
                                                    </div>
                                                   )}
                                                </div>
                                                
                                            </div>
                                           <div className="filter-group-for-size">
                                            <div className="filter-size-group">
                                                {sizeList.map((item,key)=>(
                                                <button className={`size-button ${selectedSize.includes(item)? "is-active":""}`} key={key} onClick={()=>updateSizeFilter(item)}>
                                                    <span className='filter-single-size'>{item}</span>
                                                </button>
                                                ))}
                                            </div>
                                           </div>


                                        </div>
                                    </div>
                                        <div className="filter-group-container">
                                        <div className="filter-price-container">
                                            <div className="filter-gender-heading-conatiner">
                                                <div className="filter-gender-text">
                                                  Color&nbsp;
                                                   {selectedColor.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedColor.length})
                                                    </div>
                                                   )}
                                                </div>
                                                 
                                            </div>
                                         
                                                   <div className="filter-group-for-colors">
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
                                   
                                     <div className="filter-group-container">
                                        <div className="filter-price-container">
                                            <div className="filter-gender-heading-conatiner">
                                                <div className="filter-gender-text">
                                                   Sports&nbsp;
                                                   {selectedSports.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedSports.length})
                                                    </div>
                                                   )}
                                                </div>
                                                
                                            </div>
                                            <div className="filter-gender-body-container">
                                            {sportsList.map((item, index) => (
                                                <div className="filter-gender-body-first" onClick={() => updateSportsFilter(item)} key={index}>
                                                    <div className={`pesudo-checkbox ${selectedSports.includes(item) ? "is-checked" : ""}`}>
                                                        {selectedSports.includes(item) && <div className="icon-checkmark"></div>}
                                                    </div>
                                                    <span className="filter-gender-body-text">
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>


                                        </div>
                                    </div>
                                    <div className="filter-group-container">
                                        <div className="filter-price-container">
                                            <div className="filter-gender-heading-conatiner">
                                                <div className="filter-gender-text">
                                                   Collections&nbsp;
                                                   {selectedCollections.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedCollections.length})
                                                    </div>
                                                   )}
                                                </div>
                                                
                                            </div>
                                            <div className="filter-gender-body-container">
                                            {collectionList.map((item, index) => (
                                                
                                                <div className="filter-gender-body-first" onClick={() => updateCollectionsFilter(item)} key={index}>
                                                    <div className={`pesudo-checkbox ${selectedCollections.includes(item) ? "is-checked" : ""}`}>
                                                        {selectedCollections.includes(item) && <div className="icon-checkmark"></div>}
                                                    </div>
                                                    <span className="filter-gender-body-text">
                                                        {item}
                                                    </span>
                                                </div>
                                                  ))}
                                                <div className="show-more-btn">
                                                    <button className="show-more-btn-text"onClick={() => setIsOpen(!isOpen)}>
                                                         {isOpen ? "- Less" : "+ More"}
                                                    </button>
                                                  <div className={`show-more-content ${isOpen ? 'open' : ''}`}>
                                                        <div className="show-more-content-body">
                                                  {showmoreCollections.map((collection, index) => (
                                                            <div
                                                                className="filter-gender-body-first"
                                                                onClick={() => updateCollectionsFilter(collection)}
                                                                key={index}
                                                            >
                                                                <div className={`pesudo-checkbox ${selectedCollections.includes(collection) ? "is-checked" : ""}`}>
                                                                {selectedCollections.includes(collection) && <div className="icon-checkmark"></div>}
                                                                </div>
                                                                <span className="filter-gender-body-text">
                                                                {collection}
                                                                </span>
                                                            </div>
                                                            ))}

                                                        </div>
                                                    </div>
                                                </div>
                                          
                                        </div>


                                        </div>
                                    </div>
                                      <div className="filter-group-container">
                                        <div className="filter-price-container">
                                            <div className="filter-gender-heading-conatiner">
                                                <div className="filter-gender-text">
                                                  Shoes&nbsp;
                                                   {selectedshoes.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedshoes.length})
                                                    </div>
                                                   )}
                                                </div>
                                                
                                            </div>
                                            <div className="filter-gender-body-container">
                                            {shoesList.map((item, index) => (
                                                <div className="filter-gender-body-first" onClick={() => updateShoesFilter(item)} key={index}>
                                                    <div className={`pesudo-checkbox ${selectedshoes.includes(item) ? "is-checked" : ""}`}>
                                                        {selectedshoes.includes(item) && <div className="icon-checkmark"></div>}
                                                    </div>
                                                    <span className="filter-gender-body-text">
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>


                                        </div>
                                    </div>
                                    <div className="filter-group-container">
                                        <div className="filter-price-container">
                                            <div className="filter-gender-heading-conatiner">
                                                <div className="filter-gender-text">
                                                   Shoe Height&nbsp;
                                                  
                                             {selectedShoesHeight?.length !== 0 && (
                                                <div className="filter-group-count">
                                                    ({selectedShoesHeight.length})
                                                </div>
                                                )}

                                                </div>
                                                
                                            </div>
                                            <div className="filter-gender-body-container">
                                            {shoeHeightList.map((item, index) => (
                                                <div className="filter-gender-body-first" onClick={() => updateShoesHeightFilter(item)} key={index}>
                                                    <div className={`pesudo-checkbox ${selectedShoesHeight.includes(item) ? "is-checked" : ""}`}>
                                                        {selectedShoesHeight.includes(item) && <div className="icon-checkmark"></div>}
                                                    </div>
                                                    <span className="filter-gender-body-text">
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>


                                        </div>
                                    </div>
                                      <div className="filter-group-container">
                                        <div className="filter-price-container">
                                            <div className="filter-gender-heading-conatiner">
                                                <div className="filter-gender-text">
                                                  Surface&nbsp;
                                                   {selectedSurface.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedSurface.length})
                                                    </div>
                                                   )}
                                                </div>
                                                
                                            </div>
                                            <div className="filter-gender-body-container">
                                            {surfaceList.map((item, index) => (
                                                <div className="filter-gender-body-first" onClick={() => updateSurfaceFilter(item)} key={index}>
                                                    <div className={`pesudo-checkbox ${selectedSurface.includes(item) ? "is-checked" : ""}`}>
                                                        {selectedSurface.includes(item) && <div className="icon-checkmark"></div>}
                                                    </div>
                                                    <span className="filter-gender-body-text">
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>


                                        </div>
                                    </div>
                                     <div className="filter-group-container">
                                        <div className="filter-price-container">
                                            <div className="filter-gender-heading-conatiner">
                                                <div className="filter-gender-text">
                                                   Brand&nbsp;
                                                   {selectedBrand.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedBrand.length})
                                                    </div>
                                                   )}
                                                </div>
                                                
                                            </div>
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
                                     <div className="filter-group-container">
                                        <div className="filter-price-container">
                                            <div className="filter-gender-heading-conatiner">
                                                <div className="filter-gender-text">
                                                   Technology&nbsp;
                                                   {selectedTechnology.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedTechnology.length})
                                                    </div>
                                                   )}
                                                </div>
                                                
                                            </div>
                                            <div className="filter-gender-body-container">
                                            {technologyList.map((item, index) => (
                                                
                                                <div className="filter-gender-body-first" onClick={() => updateTechnologyFilter(item)} key={index}>
                                                    <div className={`pesudo-checkbox ${selectedTechnology.includes(item) ? "is-checked" : ""}`}>
                                                        {selectedTechnology.includes(item) && <div className="icon-checkmark"></div>}
                                                    </div>
                                                    <span className="filter-gender-body-text">
                                                        {item}
                                                    </span>
                                                </div>
                                                  ))}
                                                <div className="show-more-btn">
                                                    <button className="show-more-btn-text"onClick={() => setIsOpen(!isOpen)}>
                                                         {isOpen ? "- Less" : "+ More"}
                                                    </button>
                                                  <div className={`show-more-content ${isOpen ? 'open' : ''}`}>
                                                        <div className="show-more-content-body">
                                                  {moreTechnologyList.map((collection, index) => (
                                                            <div
                                                                className="filter-gender-body-first"
                                                                onClick={() => updateTechnologyFilter(collection)}
                                                                key={index}
                                                            >
                                                                <div className={`pesudo-checkbox ${selectedTechnology.includes(collection) ? "is-checked" : ""}`}>
                                                                {selectedTechnology.includes(collection) && <div className="icon-checkmark"></div>}
                                                                </div>
                                                                <span className="filter-gender-body-text">
                                                                {collection}
                                                                </span>
                                                            </div>
                                                            ))}

                                                        </div>
                                                    </div>
                                                </div>
                                          
                                        </div>


                                        </div>
                                    </div>
                                    <div className="filter-group-container">
                                        <div className="filter-price-container">
                                            <div className="filter-gender-heading-conatiner">
                                                <div className="filter-gender-text">
                                                   Width&nbsp;
                                                   {selectedWidth.length!==0 &&(
                                                    <div className="filter-group-count">
                                                        ({selectedWidth.length})
                                                    </div>
                                                   )}
                                                </div>
                                                
                                            </div>
                                            <div className="filter-gender-body-container">
                                            {widthList.map((item, index) => (
                                                <div className="filter-gender-body-first" onClick={() => updateWidthFilter(item)} key={index}>
                                                    <div className={`pesudo-checkbox ${selectedWidth.includes(item) ? "is-checked" : ""}`}>
                                                        {selectedWidth.includes(item) && <div className="icon-checkmark"></div>}
                                                    </div>
                                                    <span className="filter-gender-body-text">
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>


                                        </div>
                                    </div>
                                
                                </div>
                                     
                            </div>
                                            {
                                                [
                                                    selectedBrand,
                                                    selectedColor,
                                                    selectedCollections,
                                                    selectedOffer,
                                                    selectedGender,
                                                    selectedPrice,
                                                    selectedSize,
                                                    selectedSports,
                                                    selectedshoes,
                                                    selectedShoesHeight,
                                                    selectedSurface,
                                                    selectedTechnology,
                                                    selectedWidth
                                                ].some(arr => arr.length > 0) && (
                                                    <nav className='filter-apply-container' onClick={()=>setShowFilter(!showFilter)}>
                                                    <button className='filter-apply-btn'>Apply</button>
                                                    </nav>
                                                )
                                                }

                                               




                         
                            
                        
                    </div>
                </div>
                </div>
                </div>
            )}
            </>

  
  )
}

export default Filter
