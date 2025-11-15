import React,{ createContext, useContext, useState} from "react";

const FilterContext = createContext();
export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({children}) => {

  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedPrice,setSelectedPrice]=useState([])
  const[selectedOffer,setSelectedOffer]=useState([])
  const[selectedSize,setSelectedSize]=useState([])
  const[selectedColor,setSelectedColor]=useState([])
  const[selectedSports,setSelectedSports]=useState([])
  const[selectedCollections,setSelectedCollections]=useState([])
  const[selectedshoes,setSelectedshoes]=useState([])
  const [selectedShoesHeight, setSelectedShoesHeight] = useState([]);
  const[selectedSurface,setSelectedSurface]=useState([])
  const[selectedBrand,setSelectedBrand]=useState([])
  const[selectedWidth,setSelectedWidth]=useState([])
  const[selectedTechnology,setSelectedTechnology]=useState([])
  const[selectedSort, setSelectedSort]=useState(false)




  

  const updateGenderFilter = (gender) => {
    setSelectedGender((prev) => {
      return prev.includes(gender)
        ? prev.filter((g) => g !== gender)
        : [...prev, gender];
    });
  };
  const updatePriceFilter=(price)=>{
    setSelectedPrice((prev)=>{
        return prev.includes(price)
        ?prev.filter((p)=>p!==price)
        :[...prev,price]
    })
  }
  const updateOfferFilter=(offer)=>{
    setSelectedOffer((prev)=>{
        return prev.includes(offer)
        ?prev.filter((o)=>o!==offer)
        :[...prev,offer]
    })
  }
  const updateSizeFilter=(size)=>{
    setSelectedSize((prev)=>{
     return prev.includes(size)
     ? prev.filter((s)=>s!==size)
     :[...prev,size]
    })
  }
  const updateColorFilter=(color)=>{
    setSelectedColor((prev)=>{
        return  prev.includes(color)
        ?prev.filter((c)=>c!==color)
        :[...prev,color]
    })
  }
  const updateSportsFilter=(sport)=>{
    setSelectedSports((prev)=>{
        return prev.includes(sport)
        ?prev.filter((s)=>s!==sport)
        :[...prev,sport]
    })
  }
  const updateCollectionsFilter=(collection)=>{
    setSelectedCollections((prev)=>{
        return prev.includes(collection)
        ?prev.filter((c)=>c!==collection)
        :[...prev,collection]
    
    })
  }
  const updateShoesFilter=(shoes)=>{
    setSelectedshoes((prev)=>{
        return prev.includes(shoes)
        ?prev.filter((c)=>c!==shoes)
        :[...prev,shoes]
    })
  }
  const updateShoesHeightFilter=(height)=>{
    setSelectedShoesHeight((prev)=>{
        return prev.includes(height)
        ?prev.filter((h)=>h!==height)
        :[...prev,height]
    })
  }
  const updateSurfaceFilter=(surface)=>{
    setSelectedSurface((prev)=>{
        return prev.includes(surface)
        ?prev.filter((s)=>s!==surface)
        : [...prev,surface]
    })
  }
  const updateBrandFilter=(brand)=>{
    setSelectedBrand((prev)=>{
        return prev.includes(brand)
        ?prev.filter((b)=>b!==brand)
        : [...prev,brand]
    })
  }
 const updateTechnologyFilter=(tech)=>{
    setSelectedTechnology((prev)=>{
      return prev.includes(tech)
      ?prev.filter((t)=>t!==tech)
      : [...prev,tech]
    })
  }
  const updateWidthFilter=(width)=>{
    setSelectedWidth((prev)=>{
      return prev.includes(width)
      ?prev.filter((w)=>w!==width)
      :[...prev,width]
    })
  }
  const updateSort=(sortOption)=>{
      setSelectedSort(sortOption);
        
    };
  const genderlist = ["Men", "Women", "Unisex"];
  const priceList=["Under ₹ 2 500.00","₹ 2 501.00 - ₹ 7 500.00","₹ 7 501.00 - ₹ 12 999.00","Over ₹ 13 000.00"]
 const offerList=["Sale"]
 const sizeList=[ "3",
  "3.5",
  "4",
  "4.5",
  "5",
  "5.5",
  "6 (EU 39)",
  "6 (EU 40)",
  "6.5",
  "7",
  "7.5",
  "8",
  "8.5",
  "9",
  "9.5",
  "10",
  "10.5",
  "11",
  "11.5",
  "12",
  "12.5",
  "13",
  "14",
  "15",
  "16",
  "17"]
  const sportsList=[
    "Lifestyle",
    "Basketball",
    "Football",
    "Skateboarding"

  ]
  const collectionList=[
    "Air Force 1",
    "Air Max",
    "Blazer",
    "Cortez",
   

  ]
  const showmoreCollections=[
    "Mercurial",
    "Nike Dunk",
    "Nike Pegasus",
    "Tiempo"
  ]
  const shoesList=[
    "Platforms",


  ]
  const shoeHeightList=[
    "Low Top",
    "Mid Top",
    "High Top"
  ]
const surfaceList=[
    "Firm Ground",
    "Turf"

]
const brandList=[
    "Nike Sportswear",
    "Jordan",
    "Nike By You",
    "NikeLab"

]
const technologyList=[
  "Nike FlyEase",
  "Nike Flyknit",
  "Nike Flymesh",
  "Nike Flyweave",
  


]
const moreTechnologyList=[
  "Nike Flywire",
  "GORE-TEX",
  "Nike Lunarlon",
  "Nike Max Air",
  "Nike Air",
  "Nike Free",
  "Nike React",
  "Nike Shox",
  "NikeSkin",
  "Nike Zoom Air",
  "Nike ZoomX",

]
const widthList=[
  "Regular",
  "Wider",
  "Extra Wider"
]
  const value = {
    selectedGender,
    updateGenderFilter,
    genderlist,
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
    
    

    
 };

  return(
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};
