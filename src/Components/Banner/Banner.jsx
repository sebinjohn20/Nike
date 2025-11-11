import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Banner.css'
import "../../Fonts/font.css";
 const bannerData = [
    {
      id: 1,
      image: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_563,c_limit/b0966a45-559a-459d-a534-d3c0d47521e3/nike-just-do-it.jpg",
      title: "RUN ANYWAY",
      description: "Make inclement weather your advantage in the Vomero 18 GORE-TEX.",
 
    },
    {
      id: 2,
      image: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_563,c_limit/b4f61abf-6928-4553-9849-ea7ce52385e4/nike-just-do-it.png",
      title: "NOT HERE TO BE LIKED",
      description: "Design that disrupts for maximum impact.",
      
    },
    {
      id: 3,
      image: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_563,c_limit/332e569d-d4c1-45f0-8381-4b581bc68518/nike-just-do-it.jpg",
      title: "Just Do It.",
      description: "",
    },
       {
      id: 4,
      image: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_563,c_limit/b0966a45-559a-459d-a534-d3c0d47521e3/nike-just-do-it.jpg",
      title: "RUN ANYWAY",
      description: "Make inclement weather your advantage in the Vomero 18 GORE-TEX.",
 
    },
      
   
  ];
  const featureData=[
    {
        id:1,
        img:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_528,c_limit/e9d60e0b-b51e-45ad-b351-2835f575e4ee/nike-just-do-it.png",
        title:'Nike Running',
        subtitle:'Ready for Race Day'
    },  {
        id:2,
        img:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_528,c_limit/bd7d5dc5-87c3-4a1b-a473-08fd5f66a49f/nike-just-do-it.png",
        title:'Nike Stellar Ride',
        subtitle:'Ready for the Long Run'
    }, {
        id:3,
        img:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_512,c_limit/6e859679-62b6-4ee2-937e-c68b2cc5de98/nike-just-do-it.png",
        title:'Tatum 4 ‘Boston’',
        subtitle:'Never Be the Same'
    }, {
        id:4,
        img:" https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_512,c_limit/f057643f-e974-4497-af3e-1c0e09326133/nike-just-do-it.png",
        
        subtitle:'Air Jordan 40 Edge PF',
        title:false
    }
  ]
  const sportData=[
    {id :1,
      img:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_375,c_limit/a1333c28-e0b7-4f7d-b36e-bc3c96890609/nike-just-do-it.png",
      title:"Basketball"
    },
      {id :2,
      img:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_375,c_limit/11886c98-e7bd-47bd-afd7-ef2d0e9f1c36/nike-just-do-it.png",
      title:"Football"
    },
    
      {id :3,
      img:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_375,c_limit/0c96ec6d-7870-4e62-a44c-4857e403dffd/nike-just-do-it.jpg",
      title:"Running"
    },
      {id :4,
      img:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_375,c_limit/ea74f6f4-2a4b-429a-a9ac-761cb81b9f8d/nike-just-do-it.png",
      title:"Tennis"
    },
    
      {id :5,
      img:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_375,c_limit/19c7721d-8fc7-4176-8fe1-dc1743e11f19/nike-just-do-it.png",
      title:"Golf"
    },
      {id :6,
      img:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_375,c_limit/2bc50e62-3184-41f2-bd04-e2a1d0f1baff/nike-just-do-it.png",
        title:"Skateboarding"
    },
    
    
  ]
function Banner() {
   const navigate=useNavigate()
    const[currentSlide, setCurrentSlide]=useState(0)
      const [isPlaying, setIsPlaying] = useState(true);

    useEffect(()=>{
        let intervel;
        if(isPlaying){
            intervel=setInterval(() => {
                setCurrentSlide((prev)=>
                    prev===bannerData.length-1? 0 : prev+1
                )
                
            }, 5000);
        }
        return()=>{
            if(intervel)
                clearInterval(intervel)
        }
    },[isPlaying])
    const togglePlayPause=()=>{
        setIsPlaying(!isPlaying)
    }
    
  return (
    <div>
      <div className="banner-container">
        <div className="mini-banner-container">
            <div className="mini-banner-body">
                <span> 10% Import Tax Reduction Discount with code: GEARUP</span>
                <div className="terms-conditions-banner">
                    <span> Terms & Conditions  </span>
             
                </div>
            </div>
        </div>
        <div className="main-banner-container">
            <div className="main-banner-container-body">
                <div className="main-banner-container-swiper">
                    <div className="main-banner-swiper-wrapper">
                        <div className="main-banner-img-conatainer">
                            <img className="main-banner-img"src={bannerData[currentSlide].image} 
                             alt={bannerData[currentSlide].title} />
                        </div>
                    </div>
                   
                    </div>
                     <div className='main-banner-text-container'>
                        <h3>{bannerData[currentSlide].title}</h3>
                        <p>{bannerData[currentSlide].description}</p>
                        <div className="shop-banner-btn">
                            <span>Shop</span>
                        </div>
                </div>
            </div>
            <div className="swiper-pagination-container">
              {bannerData.map((_, index) => (
              <span
                key={index}
                className={`swiper-pagination-bullet ${index === currentSlide ? 'active' : ''}`}
                
                style={{
                  opacity: index === currentSlide ? 1 : 0.5,
                  cursor: 'pointer'
                }}
              ></span>
            ))}
            <div className="pause-stop-btn">
                <button onClick={togglePlayPause}>
                    <svg viewBox="0 0 48 48" class="pause-btn-one"><circle cx="24" cy="24" r="22"></circle></svg>
                    <svg 
                  viewBox="0 0 48 48" 
                  className="pause-btn-two"
                  style={{
                    strokeDashoffset: isPlaying ? '138.16px' : '0px'
                  }}
                >
                  <circle cx="24" cy="24" r="22"></circle>
                </svg>
                   <span className='stop-btn-container'>
                  {isPlaying ? (
                 
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                      <rect x="6" y="5" width="4" height="14" fill="currentColor"></rect>
                      <rect x="14" y="5" width="4" height="14" fill="currentColor"></rect>
                    </svg>
                  ) : (
                    
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                      <path fill="currentColor" fillRule="evenodd" d="M19.314 11.35L6.367 3.877a.75.75 0 00-1.125.65v14.949a.75.75 0 001.125.649l12.947-7.474a.75.75 0 000-1.3z" clipRule="evenodd"></path>
                    </svg>
                  )}
                </span>
                </button>
            </div>
            </div>
            
        </div>
        <div className="featured-banner">
            <div className="featured-text-container">
                <h1>Featured</h1>
            </div>
            
            <div className='nike-running-container' onClick={() => navigate("/productlist")} >
                {featureData.map((item,index)=>(
                <div className="nike-running-container-body" key={index}>
                    <div className="nike-image-container">
                        <img className='nike-img' src={item.img} alt="" />
                    </div>
                    <div className="nike-running-text-container">
                      <p className={`nike-title-text ${index === 2 ? "black-text" : "default-color"}`}>
                             {item.title || ""}
                        </p>
                        <h3 className={`nike-subtitle ${index === 2 ? "black-text" : "default-color"}`}>
                                {item.subtitle}
                        </h3>
                        <div className="nike-shop-btn-container">
                            <div className="nike-shop-btn-container-body">
                                Shop
                            </div>
                        </div>
                    </div>
                </div>
                  ))}
            </div>
          <div className="triple-black-collection-container">
            <section>
                <div className="triple-black-text-container">
                  <div className="tripl-black-text-container-inner">
                    <h2>Colour of the Season: Triple Black Collection</h2>
                  </div>
                  <div className="triple-silder-arrow-container">
                    <div className="silder-shop-text">
                      Shop
                    </div>
                    <button className='silder-color-arrow-left'>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>
                    </button>
                     <button className='silder-color-arrow-right'>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>
                  </div>
                </div>
                <ul className="triple-silder-container">
                  <li>
                    <div className="product-silde-container">
                        <div className="product-silder-flex-container">
                            <div className="image-wrapper">
                                <img className='image-wrapper-img' src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_300,c_limit/7700a685-0adc-4cc6-b444-90657971543a/air-max-phenomena-shoes-FBJkueNB.png" alt="" />
                            </div>
                            <div className="triple-silder-bottom-container">
                                <div>
                                    <h4>Nike Air Max Phenomena</h4>
                                    <h5>Women's Shoes</h5>
                                </div>
                                <div className="triple-price-container">
                                   <h3>MRP : ₹ 13 995.00</h3> 
                                </div>
                            </div>

                        </div>
                    </div>
                  </li>
                  <li>
                    <div className="product-silde-container">
                        <div className="product-silder-flex-container">
                            <div className="image-wrapper">
                                <img className='image-wrapper-img' src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_300,c_limit/ab581537-fbd1-41c8-bded-200fa4f49db0/vomero-plus-road-running-shoes-sBieAqOJ.png" alt="" />
                            </div>
                            <div className="triple-silder-bottom-container">
                                <div>
                                    <h4>Nike Air Max Phenomena</h4>
                                    <h5>Women's Shoes</h5>
                                </div>
                                <div className="triple-price-container">
                                   <h3>MRP : ₹ 13 995.00</h3> 
                                </div>
                            </div>

                        </div>
                    </div>
                  </li>
                  <li>
                    <div className="product-silde-container">
                        <div className="product-silder-flex-container">
                            <div className="image-wrapper">
                                <img className='image-wrapper-img' src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_300,c_limit/7700a685-0adc-4cc6-b444-90657971543a/air-max-phenomena-shoes-FBJkueNB.png" alt="" />
                            </div>
                            <div className="triple-silder-bottom-container">
                                <div>
                                    <h4>Nike Air Max Phenomena</h4>
                                    <h5>Women's Shoes</h5>
                                </div>
                                <div className="triple-price-container">
                                   <h3>MRP : ₹ 13 995.00</h3> 
                                </div>
                            </div>

                        </div>
                    </div>
                  </li>
                  <li>
                    <div className="product-silde-container">
                        <div className="product-silder-flex-container">
                            <div className="image-wrapper">
                                <img className='image-wrapper-img' src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_300,c_limit/7700a685-0adc-4cc6-b444-90657971543a/air-max-phenomena-shoes-FBJkueNB.png" alt="" />
                            </div>
                            <div className="triple-silder-bottom-container">
                                <div>
                                    <h4>Nike Air Max Phenomena</h4>
                                    <h5>Women's Shoes</h5>
                                </div>
                                <div className="triple-price-container">
                                   <h3>MRP : ₹ 13 995.00</h3> 
                                </div>
                            </div>

                        </div>
                    </div>
                  </li>
                  <li>
                    <div className="product-silde-container">
                        <div className="product-silder-flex-container">
                            <div className="image-wrapper">
                                <img className='image-wrapper-img' src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_300,c_limit/7700a685-0adc-4cc6-b444-90657971543a/air-max-phenomena-shoes-FBJkueNB.png" alt="" />
                            </div>
                            <div className="triple-silder-bottom-container">
                                <div>
                                    <h4>Nike Air Max Phenomena</h4>
                                    <h5>Women's Shoes</h5>
                                </div>
                                <div className="triple-price-container">
                                   <h3>MRP : ₹ 13 995.00</h3> 
                                </div>
                            </div>

                        </div>
                    </div>
                  </li>
                  <li>
                    <div className="product-silde-container">
                        <div className="product-silder-flex-container">
                            <div className="image-wrapper">
                                <img className='image-wrapper-img' src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_300,c_limit/7700a685-0adc-4cc6-b444-90657971543a/air-max-phenomena-shoes-FBJkueNB.png" alt="" />
                            </div>
                            <div className="triple-silder-bottom-container">
                                <div>
                                    <h4>Nike Air Max Phenomena</h4>
                                    <h5>Women's Shoes</h5>
                                </div>
                                <div className="triple-price-container">
                                   <h3>MRP : ₹ 13 995.00</h3> 
                                </div>
                            </div>

                        </div>
                    </div>
                  </li>
                </ul>
            </section>
          </div>
          <div className="shop-bysport-container">
            <div className="shop-bysport-container-body">
                <div className="shop-bysport-container-body-top">
                    <div className="shop-by-sport-text-container">
                        <h2>Shop by Sport</h2>
                    </div>
                    <ul className="shop-bysport-silder-container">
                      {sportData.map((item,index)=>(
                        <li key={index}>
                            <div className='shop-bysport-silder-img-co'>
                                <img src={item.img} alt="" />
                            </div>
                            <div className="shop-by-sport-silder-text-container">
                              <h3>{item.title}</h3>
                            </div>

                        </li>
                       
                        ))}
                         <li className="buffer"></li>
                    </ul>
                </div>
            </div>
          </div>
            <div className="shop-by-icon-container">
              <div className="shop-by-icon-container-body">
                <div className="shop-by-icon-text-container">
                  <h2>Shop by Icons</h2>
                </div>
                <div className="shop-by-icon-silder-container">
                 <span className='silder-count'>1/9</span>
                 <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_375,c_limit/86de6503-60f3-4057-8801-6c9e5137b164/nike-just-do-it.jpg" alt="" />
                 
                </div>
              </div>
            </div>
        </div>

      </div>

    </div>
  )
}

export default Banner
