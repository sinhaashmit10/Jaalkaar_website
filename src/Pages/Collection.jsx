import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets';
import ProductItem from '../Components/ProductItem';

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let filterProductCopy = filterProducts.slice();

    switch(sortType){
      case 'low-high':
        setFilterProducts(filterProductCopy.sort((a,b)=>(a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(filterProductCopy.sort((a,b)=>(b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter();
  },[category, subCategory, search, showSearch])

  useEffect(()=>{
    sortProduct();
  },[sortType])


  return (
    <div className='flex flex-col gap-2 border-t'>
      <div className="relative">
        {/* Scrolling Background Section */}
        <div
          className="h-[85vh] bg-fixed bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${assets.asset6})`, // Replace with your desired image
          }}
        >
          <div className='flex justify-start'>
            <div className='min-w-60 w-full sm:w-3/4 lg:w-1/2 p-16 flex flex-col'>
              <h1 className='text-5xl prata-regular text-[#D4AF37] font-bold mb-6'>Our Collection</h1>
              <p className='text-white text-lg'>Welcome to Jaalkaar's Collection – a curated showcase of timeless elegance and exquisite craftsmanship. Each saree in our collection tells a unique story, blending tradition with contemporary aesthetics. From the intricate patterns of Bihar's Bavan Buti sarees to the rich textures and vibrant hues, our designs celebrate India's rich cultural heritage.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-1 px-10 sm:gap-10 border-t'>
        {/* Filter Options */}
        <div className='min-w-60'>
          <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
            <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
          </p>
          {/* Category Filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-4 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/> Women
              </p>
              {/* <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/> Women
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/> Women
              </p> */}
            </div>
          </div>
          {/* Types (SubCategory Filter) */}
          <div className={`border border-gray-300 pl-5 py-3 mt-4 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Tussar Saree'} onChange={toggleSubCategory}/> Tussar Saree
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Cotton Saree'} onChange={toggleSubCategory}/> Cotton Saree
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Stole'} onChange={toggleSubCategory}/> Stole
              </p>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl my-2 mb-4'>
            {/* Product Sort */}
            <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low - High</option>
              <option value="high-low">Sort by: High - Low</option>
            </select>
          </div>
          {/* Map Products */}
          <div className='w-full sm:w-5/6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item,index)=>(
                <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection