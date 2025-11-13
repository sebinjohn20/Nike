import React, { useEffect, useState,useRef } from 'react'
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
   const images = [
    "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_375,c_limit/86de6503-60f3-4057-8801-6c9e5137b164/nike-just-do-it.jpg",
    "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_375,c_limit/5b270984-2818-49e3-b32c-ba5331b84c90/nike-just-do-it.jpg",
    "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_375,c_limit/1ca9b7aa-cd9f-4d2e-93ad-6085270c1fd0/nike-just-do-it.jpg",
    "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_375,c_limit/c4009704-4d0d-454b-a6e3-2aa932128a7c/nike-just-do-it.jpg",
    "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_375,c_limit/2588e343-1440-4c63-9dd4-36c2a551e4e2/nike-just-do-it.jpg",
    "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_375,c_limit/5b270984-2818-49e3-b32c-ba5331b84c90/nike-just-do-it.jpg",
    "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_375,c_limit/c4009704-4d0d-454b-a6e3-2aa932128a7c/nike-just-do-it.jpg",
    "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_375,c_limit/2588e343-1440-4c63-9dd4-36c2a551e4e2/nike-just-do-it.jpg",
    "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_375,c_limit/5b270984-2818-49e3-b32c-ba5331b84c90/nike-just-do-it.jpg",








   
  ];
function Banner() {
   const navigate=useNavigate()
   const [currentSlide, setCurrentSlide] = useState(0)

    const [isPlaying , setIsPlaying]=useState(true)
    const [progress, setProgress] = useState(0);
    const silderRef=useRef(null)
    const sliderRefs = useRef(null);
    const sportRefs=useRef(null)
  const [currentIndex, setCurrentIndex] = useState(1);

   const SLIDE_DURATION = 5000; 
   const STEP = 100;

useEffect(() => {
  let progressInterval;

  if (isPlaying) {
    progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + STEP / SLIDE_DURATION;
        if (next >= 1) {
          
          setCurrentSlide((prevSlide) =>
            prevSlide === bannerData.length - 1 ? 0 : prevSlide + 1
          );
          return 0;
        }
        return next;
      });
    }, STEP);
  }

  return () => clearInterval(progressInterval);
}, [isPlaying]);

const togglePlayPause = () => {
  setIsPlaying((prev) => !prev);
};
const handlePrev = () => {
  setCurrentSlide((prev) =>
    prev === 0 ? bannerData.length - 1 : prev - 1
  );
  setProgress(0);
};
const handleNext = () => {
  setCurrentSlide((prev) =>
    prev === bannerData.length - 1 ? 0 : prev + 1
  );
  setProgress(0);
};
const handleNextSlider=()=>{
  const silder=silderRef.current
  if(silder){
    silder.scrollBy({left:412, behavior: "smooth" })
  }
}
const handlePrevSlider = () => {
    const slider = silderRef.current;
    if (slider) {
      slider.scrollBy({ left: -412, behavior: "smooth" }); 
      
    }
  };
  const handleSportNextSlider=()=>{
  const silder=sportRefs.current
  if(silder){
    silder.scrollBy({left:412, behavior: "smooth" })
  }
}
const handleSportPrevSlider = () => {
    const slider = sportRefs.current;
    if (slider) {
      slider.scrollBy({ left: -412, behavior: "smooth" }); 
      
    }
  };
   useEffect(() => {
    const slider = sliderRefs.current;
    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const width = slider.clientWidth;
      const index = Math.round(scrollLeft / width) + 1;
      setCurrentIndex(index);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

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
             </div>
            <div className="pause-stop-btn">
                 <button onClick={togglePlayPause}>
      
        <svg viewBox="0 0 48 48" className="pause-btn-one">
          <circle cx="24" cy="24" r="22"></circle>
        </svg>

      
        <svg
          viewBox="0 0 48 48"
          className="pause-btn-two"
          style={{
            strokeDashoffset: `calc(138.16px * (1 - ${progress}))`,
          }}
        >
          <circle cx="24" cy="24" r="22"></circle>
        </svg>

    
        <span className="stop-btn-container">
          {isPlaying ? (
      
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none"
            >
              <rect x="6" y="5" width="4" height="14" fill="currentColor"></rect>
              <rect x="14" y="5" width="4" height="14" fill="currentColor"></rect>
            </svg>
          ) : (
    
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M19.314 11.35L6.367 3.877a.75.75 0 00-1.125.65v14.949a.75.75 0 001.125.649l12.947-7.474a.75.75 0 000-1.3z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </span>
      </button>
                <div className="main-silder-arrow-container">
                  <button className='silder-left-arrow' onClick={handlePrev}>
                    <svg aria-hidden="true" class="_1ohL1pcH" focusable="false" viewBox="0 0 24 24" role="img" width="20px" height="20px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>
                  </button>
                    <button className='silder-right-arrow' onClick={handleNext}>
                      <svg aria-hidden="true" class="_1ohL1pcH" focusable="false" viewBox="0 0 24 24" role="img" width="20px" height="20px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
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


            <div className="desktop-feature-container">
              <div className="desktop-feature-top-container">
                <div className="top-container-first-item" onClick={() => navigate("/productlist")}>
                  <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_664,c_limit/de9f23f0-3d1c-4324-9a81-73dd96e6bb4a/nike-just-do-it.png" alt="" />
                <figcaption>
                  <p className="desktop-top-container-text">
                    Nike Killshot
                  </p>
                  <h3 className='desktop-top-container-des'>
                    Courtside Attitude with a Modern Touch
                  </h3>
                  <div className="nike-shop-btn-container">
                            <div className="nike-shop-btn-container-body">
                                Shop
                            </div>
                        </div>
                </figcaption>
                </div>
                 <div className="top-container-first-item" onClick={() => navigate("/productlist")}>
                  <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_685,c_limit/00ebcdb9-3157-4ec4-916a-b39a9e628831/nike-just-do-it.png" alt="" />
                <figcaption>
                  <p className="desktop-top-container-text">
                  Nike United
                  </p>
                  <h3 className='desktop-top-container-des'>
                   Wicked Game
                  </h3>
                  <div className="nike-shop-btn-container">
                            <div className="nike-shop-btn-container-body">
                                Shop
                            </div>
                        </div>
                </figcaption>
                </div>
              </div>
              <div className="desktop-feature-top-container">
                <div className="top-container-first-item" onClick={() => navigate("/productlist")}>
                  <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_656,c_limit/5948807e-a3db-49c8-91a7-bb46b71862a4/nike-just-do-it.jpg" alt="" />
                <figcaption>
                  <p className="desktop-top-container-text">
                   Nike 24.7
                  </p>
                  <h3 className='desktop-top-container-des'>
               Made for all-day comfort
                  </h3>
                  <div className="nike-shop-btn-container">
                            <div className="nike-shop-btn-container-body">
                                Shop
                            </div>
                        </div>
                </figcaption>
                </div>
                 <div className="top-container-first-item" onClick={() => navigate("/productlist")}>
                  <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_719,c_limit/db1f9109-11d5-4fa5-9423-a90a9ec99468/nike-just-do-it.png" alt="" />
                <figcaption>
                  <p className="desktop-top-container-text">
              Jordan
                  </p>
                  <h3 className='desktop-top-container-des'>
                Coldest in the Game
                  </h3>
                  <div className="nike-shop-btn-container">
                            <div className="nike-shop-btn-container-body">
                                Shop
                            </div>
                        </div>
                </figcaption>
                </div>
              </div>
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
                    <button className='silder-color-arrow-left' onClick={handlePrevSlider}>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>
                    </button>
                     <button className='silder-color-arrow-right'  onClick={handleNextSlider}>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>
                  </div>
                </div>
                <ul className="triple-silder-container" ref={silderRef}>
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
                      <div>  <h2>Shop by Sport</h2></div>

                      <div className="shop-silder-arrow-container">
                    
                    <button className='silder-color-arrow-left' onClick={handleSportPrevSlider}>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>
                    </button>
                     <button className='silder-color-arrow-right'  onClick={handleSportNextSlider}>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>
                  </div>

                    </div>
                    <ul className="shop-bysport-silder-container" ref={sportRefs}>
                      {sportData.map((item,index)=>(
                        <li key={index} >
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
                    <div className="shop-by-icon-slider">
                <div className="shop-by-icon-silder-container" ref={sliderRefs}>
                  <div className="swiper-button-prev">

                  </div>
                     <div className="swiper-button-next">
                    
                  </div>
                  <span className="silder-count">
                    {currentIndex}/{images.length}
                  </span>

                  {images.map((img, i) => (
                    <img key={i} src={img} alt={`Slide ${i + 1}`} />
                  ))}
                </div>
              </div>

                
              </div>
            </div>
        </div>

      </div>

    </div>
  )
}

export default Banner
