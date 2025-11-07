import React, { useState } from 'react'
import "../../Fonts/font.css";
import "./Filter.css"
const sort=[
    "Featured",
    "Newest",
    "Price: High-Low",
    "Price: Low-High"

]

function Filter() {
    const[showFilter,setShowFilter]=useState(false)

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
                                                <div className="sort-items-container-flex-one" key={index}>
                                                    <input type="radio" name="sort-option" /> 
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
                                </div>
                            </div>
                        
                    </div>
                </div>
                </div>
                </div>
            )}
            </>

  
  )
}

export default Filter
