import React, { useState } from 'react'
import "../../Fonts/font.css";
import './Footer.css'
function Footer() {
    const[openFooter,setOpenFooter]=useState({
        resources:true,
        help:false,
        company:false
    }
    )
    const toggleSection=(section)=>{
        setOpenFooter(prev=>{
            const newState={
                     resources: false,
                help: false,
                company: false
            }
           newState[section] = !prev[section];
            return newState;
        });
    };
  return (
    <div>
      <footer>
        <div className="footer-border-container"> </div> 
           <div className="footer-menu">
            <div className="footer-menu-body">


                {/* resources section */}


                <div className="footer-resources-container">
                  <summary onClick={()=>toggleSection('resources')}>
                    <span className="footer-resources-text-container">
                        <p>Resources</p>
                        <span className="footer-section-arrow">
                           <svg aria-hidden="true"className={`footer-down-arrow ${openFooter.resources ? 'rotated' : ''}`} focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path></svg> 
                        </span>
                    </span>
                    </summary>  
                    <div className={`footer-content-wrapper ${openFooter.resources ? 'open' : ''}`}>
                        <p>Find A Store</p>
                        <p>Become A Member</p>
                        <p>Running Shoe Finder </p>
                        <p>Product Advice</p>
                        <p>Nike Coaching</p>
                        <p>Send Us Feedback</p>
                    </div>
                </div>

                {/* end */}

                {/* help section */}


                   <div className="footer-resources-container">
                  <summary onClick={()=>toggleSection('help')}>
                    <span className="footer-resources-text-container">
                        <p>Help</p>
                        <span className="footer-section-arrow">
                           <svg aria-hidden="true"className={`footer-down-arrow ${openFooter.help ? 'rotated' : ''}`} focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path></svg> 
                        </span>
                    </span>
                    </summary>  
                    <div className={`footer-content-wrapper ${openFooter.help ? 'open' : ''}`}>
                        <p>Get Help</p>
                        <p>Order Status</p>
                        <p>Delivery </p>
                        <p>Returns</p>
                        <p>Payment Options</p>
                        <p>Contact Us On Nike.com Inquiries</p>
                        <p>Contact Us On All Other Inquiries</p>
                    </div>
                </div>


                    {/* end */}
                    {/* company section */}
                      <div className="footer-resources-container">
                  <summary onClick={()=>toggleSection('company')}>
                    <span className="footer-resources-text-container">
                        <p>Company</p>
                        <span className="footer-section-arrow">
                           <svg aria-hidden="true"className={`footer-down-arrow ${openFooter.company ? 'rotated' : ''}`} focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path></svg> 
                        </span>
                    </span>
                    </summary>  
                    <div className={`footer-content-wrapper ${openFooter.company ? 'open' : ''}`}>
                        <p>About Nike</p>
                        <p>News</p>
                        <p>Careers </p>
                        <p>Investors</p>
                        <p>Sustainability</p>
                        <p>Impact</p>
                        <p>Report a Concern</p>
                    </div>
                </div>

            </div>
            <div style={{height:'1px'}}></div>
           <div className="footer-country-container">
            <span className='globe-icon-span'>
                <svg aria-hidden="true" class="globe-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M21.75 12A9.75 9.75 0 0112 21.75M21.75 12A9.75 9.75 0 0012 2.25M21.75 12c0 2.071-4.365 3.75-9.75 3.75S2.25 14.071 2.25 12m19.5 0c0-2.071-4.365-3.75-9.75-3.75S2.25 9.929 2.25 12M12 21.75A9.75 9.75 0 012.25 12M12 21.75c2.9 0 5.25-4.365 5.25-9.75S14.9 2.25 12 2.25m0 19.5c-2.9 0-5.25-4.365-5.25-9.75S9.1 2.25 12 2.25M2.25 12A9.75 9.75 0 0112 2.25"></path></svg>
            </span>
            India
        </div>
        <div className="country-bottom-border">

        </div>
        </div>
        <div className="footer-space-bottom">

        </div>
        <div className="footer-bottom-last-container">
            <ul className="footer-list">
                <li className="footer-copy-right">
           <span>© 2025 Nike, Inc. All rights reserved</span>
                </li>
                <li className="footer-copy-right">
           <span>Guides</span>
             <svg aria-hidden="true" class="summary-caret" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M17.5 9.25l-5.5 5.5-5.5-5.5"></path></svg>
                </li>
                  <li className="footer-copy-right">
           <span>Terms of Sale</span>
                </li>
                <li className="footer-copy-right">
           <span>Terms of Use</span>

                </li>
                <li className="footer-copy-right">
           <span>Nike Privacy Policy</span>
                </li>
                <li className="footer-copy-right">
           <span>Privacy Settings</span>
                </li>
                
                
            </ul>
        </div>
        

      </footer>
    </div>
  )
}

export default Footer
